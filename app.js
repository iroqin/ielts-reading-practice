// IELTS Reading Test 292 - Interactive Engine
// Follows Hallmark Workbench design discipline and authentic computer-delivered IELTS testing standards.

(function() {
  "use strict";

  // Test Catalog
  const TESTS_CATALOG = {
    "291": (typeof window !== "undefined" && window.IELTS_TEST_291_DATA) ? window.IELTS_TEST_291_DATA : null,
    "292": (typeof window !== "undefined" && (window.IELTS_TEST_292_DATA || window.IELTS_TEST_DATA)) ? (window.IELTS_TEST_292_DATA || window.IELTS_TEST_DATA) : null,
    "293": (typeof window !== "undefined" && window.IELTS_TEST_293_DATA) ? window.IELTS_TEST_293_DATA : null
  };

  function getActiveTestId() {
    try {
      const params = new URLSearchParams(window.location.search);
      const qTest = params.get("test");
      if (qTest && TESTS_CATALOG[qTest]) return qTest;
      const saved = localStorage.getItem("ielts_selected_test_id");
      if (saved && TESTS_CATALOG[saved]) return saved;
    } catch (e) {}
    return "291"; // Default to Test 291
  }

  let currentTestId = getActiveTestId();

  function getTestData() {
    return TESTS_CATALOG[currentTestId] || (typeof window !== "undefined" && (window.IELTS_TEST_291_DATA || window.IELTS_TEST_DATA));
  }

  function getStorageKey() {
    return `ielts_test_${currentTestId}_saved_state`;
  }

  // Application State
  const state = {
    currentPassageNum: 1,
    activeQuestionId: 1,
    mobileActivePane: "passage", // "passage" or "questions"
    answers: {},
    flags: new Set(),
    timerSeconds: 60 * 60,
    timerRunning: true,
    timerInterval: null,
    theme: "light",
    fontSize: "normal",
    isSubmitted: false,
    scoreResult: null,
    highlights: []
  };

  // DOM Cache
  const dom = {
    timerDisplay: document.getElementById("timer-display"),
    timerBox: document.getElementById("timer-box"),
    timerToggleBtn: document.getElementById("timer-toggle-btn"),
    passagePane: document.getElementById("passage-pane"),
    questionsPane: document.getElementById("questions-pane"),
    workbench: document.getElementById("workbench"),
    splitDivider: document.getElementById("split-divider"),
    paletteMatrix: document.getElementById("palette-matrix"),
    paletteStats: document.getElementById("palette-stats"),
    passageNavTabs: document.getElementById("passage-nav-tabs"),
    btnPrev: document.getElementById("btn-nav-prev"),
    btnNext: document.getElementById("btn-nav-next"),
    btnFlagToggle: document.getElementById("btn-flag-toggle"),
    btnSubmit: document.getElementById("btn-submit-test"),
    scoreModal: document.getElementById("score-modal"),
    modalCloseBtn: document.getElementById("modal-close-btn"),
    modalReviewBtn: document.getElementById("modal-review-btn"),
    modalRetakeBtn: document.getElementById("modal-retake-btn"),
    highlighterToolbar: document.getElementById("highlighter-toolbar"),
    mobileTogglePassage: document.getElementById("mobile-tab-passage"),
    mobileToggleQuestions: document.getElementById("mobile-tab-questions"),
    testSelector: document.getElementById("test-selector-dropdown")
  };

  // Initialize
  function init() {
    const testData = getTestData();
    state.timerSeconds = (testData && testData.timeLimitMinutes ? testData.timeLimitMinutes : 60) * 60;
    syncTestSelectorUI();
    loadSavedState();
    renderPassageTabs();
    renderPassage();
    renderQuestions();
    renderPalette();
    initSplitter();
    initHighlighter();
    initTimer();
    initThemeAndFont();
    bindEvents();
    updateUI();
  }

  function syncTestSelectorUI() {
    if (dom.testSelector) {
      dom.testSelector.value = currentTestId;
    }
  }

  function switchTest(newTestId) {
    if (!TESTS_CATALOG[newTestId] || newTestId === currentTestId) return;
    saveState();
    if (state.timerInterval) clearInterval(state.timerInterval);

    currentTestId = newTestId;
    localStorage.setItem("ielts_selected_test_id", newTestId);

    try {
      const url = new URL(window.location);
      url.searchParams.set("test", newTestId);
      window.history.replaceState({}, "", url);
    } catch (e) {}

    // Reset runtime state
    state.currentPassageNum = 1;
    state.activeQuestionId = 1;
    state.answers = {};
    state.flags.clear();
    state.isSubmitted = false;
    state.scoreResult = null;
    state.timerRunning = true;
    const testData = getTestData();
    state.timerSeconds = (testData && testData.timeLimitMinutes ? testData.timeLimitMinutes : 60) * 60;

    dom.btnSubmit.textContent = "Submit Test";
    dom.btnSubmit.style.backgroundColor = "";

    loadSavedState();
    renderPassageTabs();
    renderPassage();
    renderQuestions();
    renderPalette();
    initTimer();
    updateUI();

    dom.passagePane.scrollTop = 0;
    dom.questionsPane.scrollTop = 0;
  }

  // Save / Load state
  function saveState() {
    try {
      const data = {
        currentPassageNum: state.currentPassageNum,
        activeQuestionId: state.activeQuestionId,
        answers: state.answers,
        flags: Array.from(state.flags),
        timerSeconds: state.timerSeconds,
        theme: state.theme,
        fontSize: state.fontSize,
        isSubmitted: state.isSubmitted,
        scoreResult: state.scoreResult
      };
      localStorage.setItem(getStorageKey(), JSON.stringify(data));
    } catch (e) {
      console.warn("Could not save to localStorage", e);
    }
  }

  function loadSavedState() {
    try {
      const saved = localStorage.getItem(getStorageKey());
      if (saved) {
        const parsed = JSON.parse(saved);
        state.answers = parsed.answers || {};
        state.flags = new Set(parsed.flags || []);
        if (typeof parsed.timerSeconds === "number") state.timerSeconds = parsed.timerSeconds;
        if (parsed.currentPassageNum) state.currentPassageNum = parsed.currentPassageNum;
        if (parsed.activeQuestionId) state.activeQuestionId = parsed.activeQuestionId;
        if (parsed.theme) state.theme = parsed.theme;
        if (parsed.fontSize) state.fontSize = parsed.fontSize;
        if (parsed.isSubmitted) {
          state.isSubmitted = parsed.isSubmitted;
          state.scoreResult = parsed.scoreResult;
        }
      }
    } catch (e) {
      console.warn("Could not load saved state", e);
    }
  }

  // Passage Tabs
  function renderPassageTabs() {
    dom.passageNavTabs.innerHTML = "";
    const testData = getTestData();
    if (!testData || !testData.passages) return;
    testData.passages.forEach(p => {
      const btn = document.createElement("button");
      btn.className = `passage-tab-btn ${p.number === state.currentPassageNum ? "active" : ""}`;
      btn.dataset.passage = p.number;

      // Count answered for this passage
      const passageQuestions = getQuestionsForPassage(p.number);
      const answeredCount = passageQuestions.filter(q => isQuestionAnswered(q.id)).length;

      btn.innerHTML = `
        <span class="tab-label-text">Passage</span> ${p.number}
        <span class="tab-badge" id="tab-badge-p${p.number}">${answeredCount}/${passageQuestions.length}</span>
      `;

      btn.addEventListener("click", () => {
        switchPassage(p.number);
      });
      dom.passageNavTabs.appendChild(btn);
    });
  }

  function switchPassage(passageNum) {
    if (state.currentPassageNum === passageNum) return;
    state.currentPassageNum = passageNum;
    
    // Auto-select first question of passage
    const pQuestions = getQuestionsForPassage(passageNum);
    if (pQuestions.length > 0) {
      state.activeQuestionId = pQuestions[0].id;
    }

    renderPassage();
    renderQuestions();
    updatePassageTabs();
    updatePalette();
    updateNavButtons();
    saveState();

    // Scroll panes to top
    dom.passagePane.scrollTop = 0;
    dom.questionsPane.scrollTop = 0;
  }

  function updatePassageTabs() {
    document.querySelectorAll(".passage-tab-btn").forEach(btn => {
      const pNum = parseInt(btn.dataset.passage, 10);
      btn.classList.toggle("active", pNum === state.currentPassageNum);
      const pQuestions = getQuestionsForPassage(pNum);
      const answered = pQuestions.filter(q => isQuestionAnswered(q.id)).length;
      const badge = document.getElementById(`tab-badge-p${pNum}`);
      if (badge) badge.textContent = `${answered}/${pQuestions.length}`;
    });
  }

  // Render Passage Content
  function renderPassage() {
    const testData = getTestData();
    const passage = testData ? testData.passages.find(p => p.number === state.currentPassageNum) : null;
    if (!passage) return;

    dom.passagePane.innerHTML = `
      <div class="passage-header-block">
        <div class="passage-badge">Reading Passage ${passage.number}</div>
        <h1 class="passage-title">${passage.title}</h1>
        ${passage.subtitle ? `<div class="passage-subtitle">${passage.subtitle}</div>` : ""}
        <div class="passage-tools-bar">
          <span>Tip: Select any passage text to highlight in yellow, green, or pink</span>
          <div class="passage-tools-group">
            <span>Passage ${passage.number} of 3</span>
          </div>
        </div>
      </div>
      <div class="passage-content" id="passage-content-area">
        ${passage.paragraphs.map(p => `
          <div class="passage-paragraph" id="para-${p.id}">
            ${p.label ? `<span class="para-label">${p.label}</span>` : ""}
            <span class="para-text">${p.text}</span>
          </div>
        `).join("")}
      </div>
    `;
  }

  // Render Questions Pane
  function renderQuestions() {
    const testData = getTestData();
    const passage = testData ? testData.passages.find(p => p.number === state.currentPassageNum) : null;
    if (!passage) return;

    const passageQuestions = getQuestionsForPassage(passage.number);
    const answeredCount = passageQuestions.filter(q => isQuestionAnswered(q.id)).length;

    let html = `
      <div class="questions-header">
        <div class="questions-header-title">Questions for Passage ${passage.number}</div>
        <div class="passage-progress-info" id="passage-progress-counter">
          ${answeredCount} of ${passageQuestions.length} answered
        </div>
      </div>
    `;

    passage.questionGroups.forEach(group => {
      html += renderQuestionGroup(group);
    });

    dom.questionsPane.innerHTML = html;
    bindQuestionInputs();

    // If review mode active, display explanations inline
    if (state.isSubmitted) {
      renderInlineExplanations();
    }
  }

  function renderQuestionGroup(group) {
    let contentHtml = "";

    if (group.type === "true-false-notgiven" || group.type === "yes-no-notgiven") {
      contentHtml = group.questions.map(q => {
        const val = state.answers[q.id] || "";
        const isFlagged = state.flags.has(q.id);
        return `
          <div class="question-item ${val ? "is-answered" : ""} ${isFlagged ? "is-flagged" : ""}" id="q-card-${q.id}">
            <div class="question-header">
              <div style="display:flex; align-items:center;">
                <span class="question-num-tag">${q.id}</span>
              </div>
              <button class="question-flag-action ${isFlagged ? "active" : ""}" data-qid="${q.id}">
                ${isFlagged ? "🚩 Flagged" : "⚐ Flag"}
              </button>
            </div>
            <div class="question-prompt-text">${q.prompt}</div>
            <div class="radio-options-pills">
              ${q.options.map(opt => `
                <label class="radio-pill-label ${val === opt ? "checked" : ""}">
                  <input type="radio" name="q-${q.id}" value="${opt}" ${val === opt ? "checked" : ""} ${state.isSubmitted ? "disabled" : ""}>
                  ${opt}
                </label>
              `).join("")}
            </div>
            <div class="q-explanation-slot" id="explanation-slot-${q.id}"></div>
          </div>
        `;
      }).join("");
    } else if (group.type === "fill-blank") {
      contentHtml = `
        ${group.title ? `<div class="group-title-heading">${group.title}</div>` : ""}
        ${group.questions.map(q => {
          const val = state.answers[q.id] || "";
          const isFlagged = state.flags.has(q.id);
          const words = val.trim().split(/\s+/).filter(Boolean).length;
          const countBadge = val.trim() ? (words <= q.wordLimit ? `<span class="blank-word-count-badge ok">${words} word</span>` : `<span class="blank-word-count-badge exceeded">${words} words (Limit: ${q.wordLimit})</span>`) : "";

          return `
            <div class="question-item ${val ? "is-answered" : ""} ${isFlagged ? "is-flagged" : ""}" id="q-card-${q.id}">
              <div class="question-header">
                <div style="display:flex; align-items:center;">
                  <span class="question-num-tag">${q.id}</span>
                </div>
                <button class="question-flag-action ${isFlagged ? "active" : ""}" data-qid="${q.id}">
                  ${isFlagged ? "🚩 Flagged" : "⚐ Flag"}
                </button>
              </div>
              <div class="blank-question-row">
                <div class="blank-prefix-suffix">
                  ${q.prefix ? `${q.prefix} ` : ""}
                  <div class="blank-input-wrap">
                    <input type="text" class="blank-text-input" data-qid="${q.id}" data-limit="${q.wordLimit}" value="${escapeHtml(val)}" placeholder="${q.placeholder || 'Answer'}" ${state.isSubmitted ? "disabled" : ""}>
                    <span class="word-badge-slot" id="word-badge-${q.id}">${countBadge}</span>
                  </div>
                  ${q.suffix ? ` ${q.suffix}` : ""}
                </div>
              </div>
              <div class="q-explanation-slot" id="explanation-slot-${q.id}"></div>
            </div>
          `;
        }).join("")}
      `;
    } else if (group.type === "matching-paragraphs") {
      contentHtml = group.questions.map(q => {
        const val = state.answers[q.id] || "";
        const isFlagged = state.flags.has(q.id);

        return `
          <div class="question-item ${val ? "is-answered" : ""} ${isFlagged ? "is-flagged" : ""}" id="q-card-${q.id}">
            <div class="question-header">
              <div style="display:flex; align-items:center;">
                <span class="question-num-tag">${q.id}</span>
              </div>
              <button class="question-flag-action ${isFlagged ? "active" : ""}" data-qid="${q.id}">
                ${isFlagged ? "🚩 Flagged" : "⚐ Flag"}
              </button>
            </div>
            <div class="question-prompt-text">${q.prompt}</div>
            <div style="display:flex; align-items:center; gap:0.75rem; margin-top:0.5rem;">
              <label style="font-size:0.85rem; font-weight:600; color:var(--color-ink-muted);">Select Paragraph:</label>
              <select class="select-paragraph-dropdown" data-qid="${q.id}" ${state.isSubmitted ? "disabled" : ""}>
                <option value="">-- Choose paragraph --</option>
                ${q.options.map(opt => `
                  <option value="${opt}" ${val === opt ? "selected" : ""}>Paragraph ${opt}</option>
                `).join("")}
              </select>
            </div>
            <div class="q-explanation-slot" id="explanation-slot-${q.id}"></div>
          </div>
        `;
      }).join("");
    } else if (group.type === "matching-features") {
      contentHtml = `
        <div class="phrase-bank-card">
          <div class="phrase-bank-title">List of People and Organisations</div>
          <div class="phrase-bank-grid">
            ${group.featureBank.map(item => `
              <div class="phrase-chip">
                <span class="phrase-chip-letter">${item.letter}</span>
                <span>${item.name}</span>
              </div>
            `).join("")}
          </div>
        </div>
        ${group.questions.map(q => {
          const val = state.answers[q.id] || "";
          const isFlagged = state.flags.has(q.id);

          return `
            <div class="question-item ${val ? "is-answered" : ""} ${isFlagged ? "is-flagged" : ""}" id="q-card-${q.id}">
              <div class="question-header">
                <div style="display:flex; align-items:center;">
                  <span class="question-num-tag">${q.id}</span>
                </div>
                <button class="question-flag-action ${isFlagged ? "active" : ""}" data-qid="${q.id}">
                  ${isFlagged ? "🚩 Flagged" : "⚐ Flag"}
                </button>
              </div>
              <div class="question-prompt-text">${q.prompt}</div>
              <div style="display:flex; align-items:center; gap:0.75rem; margin-top:0.5rem;">
                <label style="font-size:0.85rem; font-weight:600; color:var(--color-ink-muted);">Select Person / Organisation:</label>
                <select class="select-feature-dropdown" data-qid="${q.id}" ${state.isSubmitted ? "disabled" : ""}>
                  <option value="">-- Choose (A–F) --</option>
                  ${group.featureBank.map(f => `
                    <option value="${f.letter}" ${val === f.letter ? "selected" : ""}>${f.letter} - ${f.name}</option>
                  `).join("")}
                </select>
              </div>
              <div class="q-explanation-slot" id="explanation-slot-${q.id}"></div>
            </div>
          `;
        }).join("")}
      `;
    } else if (group.type === "matching-headings") {
      contentHtml = `
        <div class="phrase-bank-card">
          <div class="phrase-bank-title">List of Headings</div>
          <div style="display:flex; flex-direction:column; gap:0.4rem; margin-top:0.6rem;">
            ${group.headingBank.map(item => `
              <div class="phrase-chip" style="justify-content:flex-start; text-align:left; padding:0.4rem 0.6rem;">
                <span class="phrase-chip-letter" style="min-width:2.2rem; text-align:center;">${item.numeral}</span>
                <span>${item.text}</span>
              </div>
            `).join("")}
          </div>
        </div>
        ${group.questions.map(q => {
          const val = state.answers[q.id] || "";
          const isFlagged = state.flags.has(q.id);

          return `
            <div class="question-item ${val ? "is-answered" : ""} ${isFlagged ? "is-flagged" : ""}" id="q-card-${q.id}">
              <div class="question-header">
                <div style="display:flex; align-items:center;">
                  <span class="question-num-tag">${q.id}</span>
                </div>
                <button class="question-flag-action ${isFlagged ? "active" : ""}" data-qid="${q.id}">
                  ${isFlagged ? "🚩 Flagged" : "⚐ Flag"}
                </button>
              </div>
              <div class="question-prompt-text" style="font-weight:700; font-size:1rem; color:var(--color-primary);">${q.prompt}</div>
              <div style="display:flex; align-items:center; gap:0.75rem; margin-top:0.5rem;">
                <label style="font-size:0.85rem; font-weight:600; color:var(--color-ink-muted);">Select Heading:</label>
                <select class="select-heading-dropdown" data-qid="${q.id}" ${state.isSubmitted ? "disabled" : ""}>
                  <option value="">-- Choose Heading (i–xii) --</option>
                  ${group.headingBank.map(h => `
                    <option value="${h.numeral}" ${val.toLowerCase() === h.numeral.toLowerCase() ? "selected" : ""}>${h.numeral} - ${h.text}</option>
                  `).join("")}
                </select>
              </div>
              <div class="q-explanation-slot" id="explanation-slot-${q.id}"></div>
            </div>
          `;
        }).join("")}
      `;
    } else if (group.type === "multi-choice-double") {
      const pair = group.pairIds; // e.g. [20, 21]
      const ans1 = state.answers[pair[0]] || "";
      const ans2 = state.answers[pair[1]] || "";
      const selectedAnswers = [ans1, ans2].filter(Boolean);
      const isPairFlagged = state.flags.has(pair[0]) || state.flags.has(pair[1]);

      contentHtml = `
        <div class="double-mcq-box" id="q-pair-card-${pair.join('-')}">
          <div class="double-mcq-header">
            <div style="display:flex; align-items:center; gap:0.5rem;">
              <span class="question-num-tag" id="tag-${pair[0]}">${pair[0]}</span>
              <span class="question-num-tag" id="tag-${pair[1]}">${pair[1]}</span>
            </div>
            <div style="display:flex; align-items:center; gap:0.75rem;">
              <span class="double-mcq-counter ${selectedAnswers.length === 2 ? "ready" : ""}" id="double-counter-${pair.join('-')}">
                ${selectedAnswers.length} of 2 chosen
              </span>
              <button class="question-flag-action ${isPairFlagged ? "active" : ""}" data-pair="${pair.join(',')}">
                ${isPairFlagged ? "🚩 Flagged" : "⚐ Flag"}
              </button>
            </div>
          </div>
          <div class="question-prompt-text" style="font-weight:600; margin-bottom:1rem;">
            ${group.leadQuestion}
          </div>
          <div class="mcq-options-list">
            ${group.choices.map(c => {
              const isChecked = selectedAnswers.includes(c.letter);
              return `
                <label class="mcq-option-label ${isChecked ? "checked" : ""}" data-pair="${pair.join(',')}" data-letter="${c.letter}">
                  <span class="mcq-option-letter">${c.letter}</span>
                  <input type="checkbox" style="display:none;" value="${c.letter}" ${isChecked ? "checked" : ""} ${state.isSubmitted ? "disabled" : ""}>
                  <span>${c.text}</span>
                </label>
              `;
            }).join("")}
          </div>
          <div class="q-explanation-slot" id="explanation-slot-${pair[0]}"></div>
        </div>
      `;
    } else if (group.type === "multiple-choice") {
      contentHtml = group.questions.map(q => {
        const val = state.answers[q.id] || "";
        const isFlagged = state.flags.has(q.id);

        return `
          <div class="question-item ${val ? "is-answered" : ""} ${isFlagged ? "is-flagged" : ""}" id="q-card-${q.id}">
            <div class="question-header">
              <div style="display:flex; align-items:center;">
                <span class="question-num-tag">${q.id}</span>
              </div>
              <button class="question-flag-action ${isFlagged ? "active" : ""}" data-qid="${q.id}">
                ${isFlagged ? "🚩 Flagged" : "⚐ Flag"}
              </button>
            </div>
            <div class="question-prompt-text">${q.prompt}</div>
            <div class="mcq-options-list">
              ${q.options.map(opt => `
                <label class="mcq-option-label ${val === opt.letter ? "checked" : ""}">
                  <input type="radio" name="q-${q.id}" value="${opt.letter}" style="display:none;" ${val === opt.letter ? "checked" : ""} ${state.isSubmitted ? "disabled" : ""}>
                  <span class="mcq-option-letter">${opt.letter}</span>
                  <span>${opt.text}</span>
                </label>
              `).join("")}
            </div>
            <div class="q-explanation-slot" id="explanation-slot-${q.id}"></div>
          </div>
        `;
      }).join("");
    } else if (group.type === "summary-options") {
      contentHtml = `
        ${group.title ? `<div class="group-title-heading">${group.title}</div>` : ""}
        <div class="phrase-bank-card">
          <div class="phrase-bank-title">List of phrases (A–J)</div>
          <div class="phrase-bank-grid">
            ${group.phraseBank.map(item => `
              <div class="phrase-chip">
                <span class="phrase-chip-letter">${item.letter}</span>
                <span>${item.text}</span>
              </div>
            `).join("")}
          </div>
        </div>
        ${group.questions.map(q => {
          const val = state.answers[q.id] || "";
          const isFlagged = state.flags.has(q.id);

          return `
            <div class="question-item ${val ? "is-answered" : ""} ${isFlagged ? "is-flagged" : ""}" id="q-card-${q.id}">
              <div class="question-header">
                <div style="display:flex; align-items:center;">
                  <span class="question-num-tag">${q.id}</span>
                </div>
                <button class="question-flag-action ${isFlagged ? "active" : ""}" data-qid="${q.id}">
                  ${isFlagged ? "🚩 Flagged" : "⚐ Flag"}
                </button>
              </div>
              <div class="blank-question-row">
                <div class="blank-prefix-suffix">
                  ${q.prefix ? `${q.prefix} ` : ""}
                  <div class="blank-input-wrap">
                    <select class="select-phrase-dropdown" data-qid="${q.id}" ${state.isSubmitted ? "disabled" : ""}>
                      <option value="">-- Select Phrase (A-J) --</option>
                      ${group.phraseBank.map(p => `
                        <option value="${p.letter}" ${val === p.letter ? "selected" : ""}>${p.letter} - ${p.text}</option>
                      `).join("")}
                    </select>
                  </div>
                  ${q.suffix ? ` ${q.suffix}` : ""}
                </div>
              </div>
              <div class="q-explanation-slot" id="explanation-slot-${q.id}"></div>
            </div>
          `;
        }).join("")}
      `;
    }

    return `
      <div class="question-group-card">
        <div class="group-instructions">${group.instructions}</div>
        ${group.rules ? `
          <ul class="group-rules-list">
            ${group.rules.map(r => `<li>• ${r}</li>`).join("")}
          </ul>
        ` : ""}
        ${contentHtml}
      </div>
    `;
  }

  // Bind input listeners
  function bindQuestionInputs() {
    // Radio buttons (TFNG, YNNG, Single MCQ)
    dom.questionsPane.querySelectorAll('input[type="radio"]').forEach(radio => {
      radio.addEventListener("change", (e) => {
        const qid = parseInt(e.target.name.replace("q-", ""), 10);
        const val = e.target.value;
        state.answers[qid] = val;

        // Update active class on labels
        const container = e.target.closest(".question-item");
        container.querySelectorAll("label").forEach(l => l.classList.remove("checked"));
        e.target.closest("label").classList.add("checked");
        container.classList.add("is-answered");

        onAnswerChanged(qid);
      });
    });

    // Text inputs (Fill in blank)
    dom.questionsPane.querySelectorAll(".blank-text-input").forEach(input => {
      input.addEventListener("input", (e) => {
        const qid = parseInt(e.target.dataset.qid, 10);
        const limit = parseInt(e.target.dataset.limit, 10);
        const val = e.target.value;
        state.answers[qid] = val;

        const words = val.trim().split(/\s+/).filter(Boolean).length;
        const badgeSlot = document.getElementById(`word-badge-${qid}`);
        if (badgeSlot) {
          if (!val.trim()) {
            badgeSlot.innerHTML = "";
          } else if (words <= limit) {
            badgeSlot.innerHTML = `<span class="blank-word-count-badge ok">${words} word</span>`;
          } else {
            badgeSlot.innerHTML = `<span class="blank-word-count-badge exceeded">${words} words (Limit: ${limit})</span>`;
          }
        }

        const container = document.getElementById(`q-card-${qid}`);
        if (container) {
          container.classList.toggle("is-answered", Boolean(val.trim()));
        }

        onAnswerChanged(qid);
      });
    });

    // Dropdowns (Paragraph matching & Phrase bank)
    dom.questionsPane.querySelectorAll(".select-paragraph-dropdown, .select-phrase-dropdown, .select-feature-dropdown, .select-heading-dropdown").forEach(select => {
      select.addEventListener("change", (e) => {
        const qid = parseInt(e.target.dataset.qid, 10);
        const val = e.target.value;
        state.answers[qid] = val;

        const container = document.getElementById(`q-card-${qid}`);
        if (container) {
          container.classList.toggle("is-answered", Boolean(val));
        }

        onAnswerChanged(qid);
      });
    });

    // Double MCQs (Choose TWO from A-E)
    dom.questionsPane.querySelectorAll(".mcq-option-label[data-pair]").forEach(label => {
      label.addEventListener("click", (e) => {
        if (state.isSubmitted) return;
        e.preventDefault();

        const pair = label.dataset.pair.split(",").map(n => parseInt(n, 10)); // e.g. [20, 21]
        const letter = label.dataset.letter;
        const currentAns = [state.answers[pair[0]], state.answers[pair[1]]].filter(Boolean);

        if (currentAns.includes(letter)) {
          // Deselect
          if (state.answers[pair[0]] === letter) state.answers[pair[0]] = "";
          if (state.answers[pair[1]] === letter) state.answers[pair[1]] = "";
        } else {
          // Select if under 2
          if (currentAns.length < 2) {
            if (!state.answers[pair[0]]) state.answers[pair[0]] = letter;
            else if (!state.answers[pair[1]]) state.answers[pair[1]] = letter;
          } else {
            // Already 2 selected: replace second
            state.answers[pair[1]] = letter;
          }
        }

        // Re-render this double-mcq block state
        const updatedAns = [state.answers[pair[0]], state.answers[pair[1]]].filter(Boolean);
        const box = document.getElementById(`q-pair-card-${pair.join("-")}`);
        if (box) {
          box.querySelectorAll(".mcq-option-label").forEach(l => {
            const isChecked = updatedAns.includes(l.dataset.letter);
            l.classList.toggle("checked", isChecked);
            const chk = l.querySelector("input[type='checkbox']");
            if (chk) chk.checked = isChecked;
          });

          const counter = document.getElementById(`double-counter-${pair.join("-")}`);
          if (counter) {
            counter.textContent = `${updatedAns.length} of 2 chosen`;
            counter.classList.toggle("ready", updatedAns.length === 2);
          }

          const tag0 = document.getElementById(`tag-${pair[0]}`);
          const tag1 = document.getElementById(`tag-${pair[1]}`);
          if (tag0) tag0.classList.toggle("is-answered", Boolean(state.answers[pair[0]]));
          if (tag1) tag1.classList.toggle("is-answered", Boolean(state.answers[pair[1]]));
        }

        onAnswerChanged(pair[0]);
        onAnswerChanged(pair[1]);
      });
    });

    // Flag button in question header
    dom.questionsPane.querySelectorAll(".question-flag-action").forEach(btn => {
      btn.addEventListener("click", () => {
        if (btn.dataset.qid) {
          toggleFlag(parseInt(btn.dataset.qid, 10));
        } else if (btn.dataset.pair) {
          const pair = btn.dataset.pair.split(",").map(n => parseInt(n, 10));
          const hasFlag = state.flags.has(pair[0]) || state.flags.has(pair[1]);
          if (hasFlag) {
            state.flags.delete(pair[0]);
            state.flags.delete(pair[1]);
          } else {
            state.flags.add(pair[0]);
            state.flags.add(pair[1]);
          }
          renderQuestions();
          updatePalette();
          saveState();
        }
      });
    });
  }

  function onAnswerChanged(qid) {
    updatePalette();
    updatePassageTabs();
    updateCounterInHeader();
    saveState();
  }

  function toggleFlag(qid) {
    if (state.flags.has(qid)) {
      state.flags.delete(qid);
    } else {
      state.flags.add(qid);
    }
    const card = document.getElementById(`q-card-${qid}`);
    if (card) card.classList.toggle("is-flagged", state.flags.has(qid));
    const btn = card ? card.querySelector(".question-flag-action") : null;
    if (btn) {
      btn.classList.toggle("active", state.flags.has(qid));
      btn.innerHTML = state.flags.has(qid) ? "🚩 Flagged" : "⚐ Flag";
    }
    updatePalette();
    updateNavButtons();
    saveState();
  }

  function updateCounterInHeader() {
    const passageQuestions = getQuestionsForPassage(state.currentPassageNum);
    const answeredCount = passageQuestions.filter(q => isQuestionAnswered(q.id)).length;
    const counterEl = document.getElementById("passage-progress-counter");
    if (counterEl) {
      counterEl.textContent = `${answeredCount} of ${passageQuestions.length} answered`;
    }
  }

  // Bottom Palette Matrix (1–40)
  function renderPalette() {
    dom.paletteMatrix.innerHTML = "";
    for (let qid = 1; qid <= 40; qid++) {
      const btn = document.createElement("button");
      btn.className = "palette-q-btn";
      btn.id = `palette-btn-${qid}`;
      btn.dataset.qid = qid;
      btn.textContent = qid;

      btn.addEventListener("click", () => {
        jumpToQuestion(qid);
      });

      dom.paletteMatrix.appendChild(btn);
    }
    updatePalette();
  }

  function updatePalette() {
    let totalAnswered = 0;
    for (let qid = 1; qid <= 40; qid++) {
      const btn = document.getElementById(`palette-btn-${qid}`);
      if (!btn) continue;

      const answered = isQuestionAnswered(qid);
      if (answered) totalAnswered++;

      btn.classList.toggle("is-answered", answered);
      btn.classList.toggle("is-flagged", state.flags.has(qid));
      btn.classList.toggle("is-active", qid === state.activeQuestionId);
    }

    if (dom.paletteStats) {
      dom.paletteStats.textContent = `${totalAnswered} of 40 completed`;
    }
  }

  function jumpToQuestion(qid) {
    state.activeQuestionId = qid;
    const targetPassageNum = getPassageNumberForQuestion(qid);

    if (state.currentPassageNum !== targetPassageNum) {
      switchPassage(targetPassageNum);
    }

    // Scroll question into view smoothly in questionsPane
    setTimeout(() => {
      const el = document.getElementById(`q-card-${qid}`) || document.getElementById(`q-pair-card-${getPairKeyForQuestion(qid)}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.style.transition = "box-shadow 0.3s ease";
        el.style.boxShadow = "0 0 0 3px var(--color-primary)";
        setTimeout(() => {
          el.style.boxShadow = "";
        }, 1500);
      }
      updatePalette();
      updateNavButtons();
    }, 100);
  }

  function updateNavButtons() {
    dom.btnPrev.disabled = state.activeQuestionId <= 1;
    dom.btnNext.disabled = state.activeQuestionId >= 40;
    dom.btnFlagToggle.classList.toggle("active", state.flags.has(state.activeQuestionId));
    dom.btnFlagToggle.innerHTML = state.flags.has(state.activeQuestionId) ? "🚩 Flagged" : "⚐ Flag for Review";
  }

  // Splitter Resizing Logic
  function initSplitter() {
    let isDragging = false;

    dom.splitDivider.addEventListener("mousedown", (e) => {
      isDragging = true;
      dom.splitDivider.classList.add("is-dragging");
      document.body.style.cursor = "col-resize";
      e.preventDefault();
    });

    window.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      const workbenchRect = dom.workbench.getBoundingClientRect();
      const clientX = e.clientX - workbenchRect.left;
      const totalWidth = workbenchRect.width;
      const percentage = Math.max(25, Math.min(75, (clientX / totalWidth) * 100));

      dom.passagePane.style.flex = `0 0 ${percentage}%`;
      dom.questionsPane.style.flex = `0 0 ${100 - percentage}%`;
    });

    window.addEventListener("mouseup", () => {
      if (isDragging) {
        isDragging = false;
        dom.splitDivider.classList.remove("is-dragging");
        document.body.style.cursor = "";
      }
    });
  }

  // Text Highlighter Engine
  function initHighlighter() {
    const passageContent = document.getElementById("passage-content-area");

    document.addEventListener("mouseup", (e) => {
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed || !selection.toString().trim()) {
        if (!e.target.closest("#highlighter-toolbar")) {
          dom.highlighterToolbar.style.display = "none";
        }
        return;
      }

      // Ensure selection is inside passage
      const range = selection.getRangeAt(0);
      const container = range.commonAncestorContainer;
      const passageEl = document.getElementById("passage-pane");

      if (passageEl && passageEl.contains(container)) {
        const rect = range.getBoundingClientRect();
        dom.highlighterToolbar.style.display = "flex";
        dom.highlighterToolbar.style.left = `${rect.left + rect.width / 2}px`;
        dom.highlighterToolbar.style.top = `${rect.top - 8}px`;
      } else {
        dom.highlighterToolbar.style.display = "none";
      }
    });

    // Color buttons
    dom.highlighterToolbar.querySelectorAll(".hl-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const color = btn.dataset.color;
        applyHighlight(color);
        dom.highlighterToolbar.style.display = "none";
      });
    });

    // Clear highlight button
    document.getElementById("hl-action-clear").addEventListener("click", () => {
      clearSelectionHighlight();
      dom.highlighterToolbar.style.display = "none";
    });
  }

  function applyHighlight(color) {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const selectedText = range.extractContents();
    const mark = document.createElement("mark");
    mark.className = "passage-highlight";
    mark.dataset.color = color;
    mark.appendChild(selectedText);
    range.insertNode(mark);
    selection.removeAllRanges();
  }

  function clearSelectionHighlight() {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;
    const range = selection.getRangeAt(0);
    const marks = range.commonAncestorContainer.parentElement.querySelectorAll("mark.passage-highlight");
    marks.forEach(m => {
      const parent = m.parentNode;
      while (m.firstChild) parent.insertBefore(m.firstChild, m);
      parent.removeChild(m);
    });
    selection.removeAllRanges();
  }

  // Timer Engine
  function initTimer() {
    updateTimerDisplay();
    state.timerInterval = setInterval(() => {
      if (state.timerRunning && !state.isSubmitted) {
        if (state.timerSeconds > 0) {
          state.timerSeconds--;
          updateTimerDisplay();
          if (state.timerSeconds % 30 === 0) saveState();
        } else {
          // Timer finished!
          clearInterval(state.timerInterval);
          alert("Time is up! The test will now be submitted automatically.");
          submitTest();
        }
      }
    }, 1000);

    dom.timerToggleBtn.addEventListener("click", () => {
      state.timerRunning = !state.timerRunning;
      dom.timerToggleBtn.textContent = state.timerRunning ? "⏸" : "▶";
      dom.timerToggleBtn.title = state.timerRunning ? "Pause Timer" : "Resume Timer";
    });
  }

  function updateTimerDisplay() {
    const mins = Math.floor(state.timerSeconds / 60);
    const secs = state.timerSeconds % 60;
    const formatted = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    dom.timerDisplay.textContent = formatted;

    dom.timerBox.classList.toggle("warning", state.timerSeconds <= 600 && state.timerSeconds > 300);
    dom.timerBox.classList.toggle("danger", state.timerSeconds <= 300);
  }

  // Theme & Font Adjuster
  function initThemeAndFont() {
    document.documentElement.dataset.theme = state.theme;

    document.getElementById("btn-theme-toggle").addEventListener("click", () => {
      const themes = ["light", "sepia", "dark"];
      const nextIndex = (themes.indexOf(state.theme) + 1) % themes.length;
      state.theme = themes[nextIndex];
      document.documentElement.dataset.theme = state.theme;
      saveState();
    });

    document.getElementById("btn-font-dec").addEventListener("click", () => {
      changeFontSize(-1);
    });
    document.getElementById("btn-font-inc").addEventListener("click", () => {
      changeFontSize(1);
    });
  }

  function changeFontSize(delta) {
    const sizes = ["0.95rem", "1.0625rem", "1.2rem"];
    let currentIdx = state.fontSize === "small" ? 0 : (state.fontSize === "large" ? 2 : 1);
    currentIdx = Math.max(0, Math.min(sizes.length - 1, currentIdx + delta));
    state.fontSize = currentIdx === 0 ? "small" : (currentIdx === 2 ? "large" : "normal");
    document.documentElement.style.setProperty("--passage-font-size", sizes[currentIdx]);
    saveState();
  }

  // Event bindings
  function bindEvents() {
    // Test selector dropdown
    if (dom.testSelector) {
      dom.testSelector.addEventListener("change", (e) => {
        switchTest(e.target.value);
      });
    }

    // Nav Prev / Next buttons
    dom.btnPrev.addEventListener("click", () => {
      if (state.activeQuestionId > 1) {
        jumpToQuestion(state.activeQuestionId - 1);
      }
    });

    dom.btnNext.addEventListener("click", () => {
      if (state.activeQuestionId < 40) {
        jumpToQuestion(state.activeQuestionId + 1);
      }
    });

    dom.btnFlagToggle.addEventListener("click", () => {
      toggleFlag(state.activeQuestionId);
    });

    // Submit button
    dom.btnSubmit.addEventListener("click", () => {
      confirmAndSubmit();
    });

    // Score Modal buttons
    dom.modalCloseBtn.addEventListener("click", () => {
      dom.scoreModal.style.display = "none";
    });
    dom.modalReviewBtn.addEventListener("click", () => {
      dom.scoreModal.style.display = "none";
      enterReviewMode();
    });
    dom.modalRetakeBtn.addEventListener("click", () => {
      if (confirm(`Are you sure you want to reset all answers and retake Test ${currentTestId}?`)) {
        resetTest();
      }
    });

    // Mobile View Toggle
    dom.mobileTogglePassage.addEventListener("click", () => {
      state.mobileActivePane = "passage";
      dom.workbench.dataset.mobileActive = "passage";
      dom.mobileTogglePassage.classList.add("active");
      dom.mobileToggleQuestions.classList.remove("active");
    });

    dom.mobileToggleQuestions.addEventListener("click", () => {
      state.mobileActivePane = "questions";
      dom.workbench.dataset.mobileActive = "questions";
      dom.mobileToggleQuestions.classList.add("active");
      dom.mobileTogglePassage.classList.remove("active");
    });
  }

  function updateUI() {
    updatePassageTabs();
    updatePalette();
    updateNavButtons();
    if (state.isSubmitted) {
      dom.btnSubmit.textContent = "📊 View Score & Review";
      dom.btnSubmit.style.backgroundColor = "var(--color-success)";
    }
  }

  // Submit and Grading Engine
  function confirmAndSubmit() {
    if (state.isSubmitted) {
      showScoreModal();
      return;
    }

    const answeredCount = Object.keys(state.answers).filter(k => Boolean(state.answers[k] && state.answers[k].trim())).length;
    const unanswered = 40 - answeredCount;

    let msg = `You have answered ${answeredCount} of 40 questions.`;
    if (unanswered > 0) {
      msg += `\n\nWarning: You have ${unanswered} unanswered question(s). Are you sure you want to submit?`;
    } else {
      msg += `\n\nSubmit test for official IELTS Band evaluation?`;
    }

    if (confirm(msg)) {
      submitTest();
    }
  }

  function submitTest() {
    state.isSubmitted = true;
    state.timerRunning = false;

    // Evaluate score
    const result = evaluateAllQuestions();
    state.scoreResult = result;
    saveState();

    updateUI();
    renderQuestions(); // Re-render to disable inputs and show answers
    showScoreModal();
  }

  function evaluateAllQuestions() {
    let rawScore = 0;
    const questionEvaluations = {};
    const passageScores = { 1: 0, 2: 0, 3: 0 };
    const passageTotals = {
      1: getQuestionsForPassage(1).length,
      2: getQuestionsForPassage(2).length,
      3: getQuestionsForPassage(3).length
    };

    // Get flat list of all 40 questions
    const allQuestions = getAllQuestions();

    allQuestions.forEach(q => {
      const userAns = (state.answers[q.id] || "").trim();
      let isCorrect = false;

      if (q.type === "tfng" || q.type === "ynng" || q.type === "match-para" || q.type === "mcq" || q.type === "summary-letter" || q.type === "match-feat" || q.type === "match-heading") {
        isCorrect = userAns.toUpperCase() === q.correctAnswer.toUpperCase();
      } else if (q.type === "blank") {
        const cleanUser = userAns.toLowerCase().replace(/[^a-z0-9]/g, "");
        const accepted = (q.acceptedAnswers || [q.correctAnswer]).map(a => a.toLowerCase().replace(/[^a-z0-9]/g, ""));
        isCorrect = accepted.includes(cleanUser);
      } else if (q.type === "double-mcq-item") {
        // Handled through pair logic
        const pair = q.pair;
        const correctLetters = q.correctPair.map(l => l.toUpperCase());
        const userChoice1 = (state.answers[pair[0]] || "").trim().toUpperCase();
        const userChoice2 = (state.answers[pair[1]] || "").trim().toUpperCase();

        const thisUserChoice = (state.answers[q.id] || "").trim().toUpperCase();
        // Correct if thisUserChoice is in correctLetters and user didn't pick duplicate
        if (correctLetters.includes(thisUserChoice)) {
          if (pair[0] === q.id) {
            isCorrect = true;
          } else {
            // Second item: correct if not same as first item and in list
            isCorrect = userChoice1 !== userChoice2;
          }
        }
      }

      if (isCorrect) {
        rawScore++;
        passageScores[q.passageNum]++;
      }

      questionEvaluations[q.id] = {
        id: q.id,
        userAnswer: userAns || "(Blank)",
        correctAnswer: q.correctAnswer || q.correctPair.join(" & "),
        isCorrect: isCorrect,
        explanation: q.explanation,
        evidenceQuote: q.evidenceQuote,
        targetParagraphId: q.targetParagraphId,
        passageNum: q.passageNum
      };
    });

    const testData = getTestData();
    const bandInfo = (testData && testData.calculateBandScore) ? testData.calculateBandScore(rawScore) : { band: "--", description: "", level: "" };

    return {
      rawScore: rawScore,
      totalQuestions: 40,
      bandScore: bandInfo.band,
      description: bandInfo.description,
      cefrLevel: bandInfo.level,
      passageScores: passageScores,
      passageTotals: passageTotals,
      evaluations: questionEvaluations
    };
  }

  function showScoreModal() {
    if (!state.scoreResult) return;
    const res = state.scoreResult;

    document.getElementById("modal-band-display").textContent = res.bandScore;
    document.getElementById("modal-band-desc").textContent = `${res.description} • CEFR ${res.cefrLevel}`;
    document.getElementById("modal-raw-score").textContent = `${res.rawScore} / 40`;
    document.getElementById("modal-p1-score").textContent = `${res.passageScores[1]} / ${res.passageTotals[1]}`;
    document.getElementById("modal-p2-score").textContent = `${res.passageScores[2]} / ${res.passageTotals[2]}`;
    document.getElementById("modal-p3-score").textContent = `${res.passageScores[3]} / ${res.passageTotals[3]}`;

    dom.scoreModal.style.display = "flex";
  }

  function enterReviewMode() {
    renderQuestions();
    updatePassageTabs();
    updatePalette();
  }

  function renderInlineExplanations() {
    if (!state.scoreResult) return;
    const evals = state.scoreResult.evaluations;

    Object.keys(evals).forEach(qid => {
      const ev = evals[qid];
      const slot = document.getElementById(`explanation-slot-${qid}`);
      if (!slot) return;

      slot.innerHTML = `
        <div class="explanation-card ${ev.isCorrect ? "correct" : "incorrect"}">
          <div class="explanation-badge-row">
            <span class="badge-status ${ev.isCorrect ? "correct" : "incorrect"}">
              ${ev.isCorrect ? "✓ Correct" : "✗ Incorrect"}
            </span>
            <span>Your answer: <strong>${escapeHtml(ev.userAnswer)}</strong> | Correct: <strong>${escapeHtml(ev.correctAnswer)}</strong></span>
          </div>
          ${ev.evidenceQuote ? `
            <div class="evidence-quote-box">
              “${escapeHtml(ev.evidenceQuote)}”
            </div>
          ` : ""}
          <div class="explanation-text-p">${ev.explanation}</div>
          ${ev.targetParagraphId ? `
            <button class="btn-locate-evidence" data-para="${ev.targetParagraphId}">
              🔍 Locate Evidence in Passage
            </button>
          ` : ""}
        </div>
      `;
    });

    // Bind Locate in Passage buttons
    dom.questionsPane.querySelectorAll(".btn-locate-evidence").forEach(btn => {
      btn.addEventListener("click", () => {
        const paraId = btn.dataset.para;
        locateParagraphInPassage(paraId);
      });
    });
  }

  function locateParagraphInPassage(paraId) {
    const paraEl = document.getElementById(`para-${paraId}`);
    if (paraEl) {
      paraEl.scrollIntoView({ behavior: "smooth", block: "center" });
      paraEl.classList.add("target-highlight");
      setTimeout(() => {
        paraEl.classList.remove("target-highlight");
      }, 3000);

      // On mobile, auto-switch to passage view
      if (window.innerWidth <= 860) {
        state.mobileActivePane = "passage";
        dom.workbench.dataset.mobileActive = "passage";
        dom.mobileTogglePassage.classList.add("active");
        dom.mobileToggleQuestions.classList.remove("active");
      }
    }
  }

  function resetTest() {
    localStorage.removeItem(getStorageKey());
    state.answers = {};
    state.flags.clear();
    const testData = getTestData();
    state.timerSeconds = (testData && testData.timeLimitMinutes ? testData.timeLimitMinutes : 60) * 60;
    state.timerRunning = true;
    state.isSubmitted = false;
    state.scoreResult = null;
    state.currentPassageNum = 1;
    state.activeQuestionId = 1;

    dom.scoreModal.style.display = "none";
    dom.btnSubmit.textContent = "Submit Test";
    dom.btnSubmit.style.backgroundColor = "";

    renderPassageTabs();
    renderPassage();
    renderQuestions();
    renderPalette();
    updateUI();
  }

  // Helpers
  function getQuestionsForPassage(passageNum) {
    const testData = getTestData();
    if (!testData || !testData.passages) return [];
    const p = testData.passages.find(pass => pass.number === passageNum);
    if (!p) return [];

    const list = [];
    p.questionGroups.forEach(g => {
      if (g.questions) {
        g.questions.forEach(q => list.push(q));
      } else if (g.pairIds) {
        list.push({ id: g.pairIds[0], passageNum: passageNum });
        list.push({ id: g.pairIds[1], passageNum: passageNum });
      }
    });
    return list;
  }

  function getAllQuestions() {
    const testData = getTestData();
    if (!testData || !testData.passages) return [];
    const list = [];
    testData.passages.forEach(p => {
      p.questionGroups.forEach(g => {
        if (g.questions) {
          g.questions.forEach(q => list.push(q));
        } else if (g.pairIds) {
          list.push({
            id: g.pairIds[0],
            passageNum: p.number,
            type: "double-mcq-item",
            pair: g.pairIds,
            correctPair: g.correctPair,
            explanation: g.explanation,
            evidenceQuote: g.evidenceQuote,
            targetParagraphId: g.targetParagraphId
          });
          list.push({
            id: g.pairIds[1],
            passageNum: p.number,
            type: "double-mcq-item",
            pair: g.pairIds,
            correctPair: g.correctPair,
            explanation: g.explanation,
            evidenceQuote: g.evidenceQuote,
            targetParagraphId: g.targetParagraphId
          });
        }
      });
    });
    return list;
  }

  function getPassageNumberForQuestion(qid) {
    const testData = getTestData();
    if (!testData || !testData.passages) return 1;
    for (const p of testData.passages) {
      const pQs = getQuestionsForPassage(p.number);
      if (pQs.some(q => q.id === qid)) return p.number;
    }
    return 1;
  }

  function getPairKeyForQuestion(qid) {
    if (qid === 20 || qid === 21) return "20-21";
    if (qid === 22 || qid === 23) return "22-23";
    return "";
  }

  function isQuestionAnswered(qid) {
    const val = state.answers[qid];
    return Boolean(val && val.trim());
  }

  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Run on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
