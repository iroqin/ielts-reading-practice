# 📚 IELTS Computer-Delivered Reading Practice & Interactive Template

An authentic, responsive, computer-delivered IELTS Academic Reading practice website and reusable framework.

Built with clean, modern web standards (**zero build tools, zero dependencies, offline-ready**).

---

## 🚀 Quick Start

Simply open [`index.html`](index.html) in any modern browser (Google Chrome, Microsoft Edge, Firefox, Safari).

---

## 🔄 How to Convert Any Reading Test to This Web App

Whenever you encounter a website or PDF with reading passages and questions, you can convert it into this interactive app in 3 simple steps:

### Step 1: Open `test-data.js`
All passage texts, questions, options, answer keys, and explanations are decoupled from the UI inside `test-data.js`.
(A clean schema reference is provided in [`test-data.template.js`](test-data.template.js)).

### Step 2: Paste your Passages & Questions
Update the `passages` array:
- `title` & `subtitle`: Test title and passage headings.
- `paragraphs`: Array of `{ id: "p1-1", label: "A", text: "..." }`.
- `questionGroups`: Supports all standard IELTS reading question formats:
  - **True / False / Not Given** (`type: "true-false-notgiven"`)
  - **Yes / No / Not Given** (`type: "yes-no-notgiven"`)
  - **Notes / Summary / Sentence Completion** (`type: "fill-blank"`)
  - **Paragraph Information Matching** (`type: "matching-paragraphs"`)
  - **Multiple Choice (A, B, C, D)** (`type: "multiple-choice"`)
  - **Choose TWO letters (A–E)** (`type: "multi-choice-double"`)
  - **Summary with Phrase Bank (A–J)** (`type: "summary-options"`)

### Step 3: Refresh `index.html`
Your new test will instantly render with the full computer-delivered interface, live timer, bottom question matrix (1–40), text highlighter, auto-grading, and evidence explanations!

---

## ✨ Built-in Features

- **Split-Screen Dual Pane**: Draggable resizer dividing passage and questions.
- **60-Minute Official Timer**: Count-down with pause/resume and warning alerts (10m amber, 5m pulsing red).
- **Question Palette (1–40)**: Shows answered, unanswered, and flagged questions (🚩) with one-click jumping.
- **Text Highlighter Tool**: Select any text in the reading passage to highlight in yellow, green, pink, or blue.
- **Theme & Font Customizer**: Light, Sepia (warm paper), and Dark modes with font size adjusters (`A-` / `A+`).
- **Instant Band Score Calculator**: Real-time scoring out of 40 mapped to the official IELTS Academic Band (2.0 to 9.0) and CEFR levels.
- **Evidence-Based Review Mode**: Shows correct vs. user answers, detailed rationale, and a **"Locate Evidence in Passage"** button that automatically scrolls to and highlights the target paragraph.
- **Auto-Save**: State and answers persist in `localStorage` in real time.
- **Mobile Responsive**: Clean tab switcher between Passage and Questions on mobile screens.

---

## 📄 Tests Included

### 🎯 IELTS Reading Test 291
- **Passage 1**: *A new stage in the study and teaching of history* (Questions 1–14: Paragraph Information Matching, Yes / No / Not Given)
- **Passage 2**: *Answers Underground: Burying greenhouse gases to slow global warming* (Questions 15–27: Matching People & Organisations, Paragraph Information Matching, True / False / Not Given)
- **Passage 3**: *Science and the Stradivarius: Uncovering the secret of quality* (Questions 28–40: List of Headings Matching, True / False / Not Given)
- Complete with official answer keys, paragraph evidence locators, and detailed explanations.

### 🎾 IELTS Reading Test 292
- **Passage 1**: *How tennis rackets have changed* (Questions 1–13: True / False / Not Given, Summary Fill-in-the-blank)
- **Passage 2**: *The pirates of the ancient Mediterranean* (Questions 14–26: Paragraph Information Matching, Choose Two Letters A–E, Sentence Completion)
- **Passage 3**: *The persistence and peril of misinformation* (Questions 27–40: Multiple Choice, Summary with Phrase Bank, Yes / No / Not Given)
- Complete with official answers, accepted spelling variants, and sentence-by-sentence explanations.

### 🏭 IELTS Reading Test 293
- **Passage 1**: *The Industrial Revolution in Britain* (Questions 1–13: Notes Completion, True / False / Not Given)
- **Passage 2**: *Athletes and stress* (Questions 14–26: Paragraph Information Matching, Sentence Completion, Choose Two Letters A–E)
- **Passage 3**: *An inquiry into the existence of the gifted child* (Questions 27–40: Summary with Phrase Bank, Yes / No / Not Given, Multiple Choice)
- Complete with official answers, accepted spelling variants, and sentence-by-sentence explanations.


