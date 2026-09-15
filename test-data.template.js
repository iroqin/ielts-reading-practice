/**
 * IELTS Reading Practice - Template Data Schema
 * 
 * To adapt this website for any IELTS Reading test:
 * 1. Duplicate this file as `test-data.js`
 * 2. Fill in the title, passages (1, 2, 3), paragraphs, questions, and answers
 * 3. Refresh index.html in your browser!
 */

const IELTS_TEST_DATA = {
  id: "ielts-reading-test-template",
  title: "IELTS Academic Reading Test [Number/Title]",
  timeLimitMinutes: 60,

  passages: [
    {
      id: "passage-1",
      number: 1,
      title: "Title of Passage 1",
      subtitle: "Optional subtitle or topic summary",
      paragraphs: [
        {
          id: "p1-1",
          label: "1", // Use numbers "1", "2" or letters "A", "B"
          text: "Full paragraph text goes here..."
        },
        {
          id: "p1-2",
          label: "2",
          text: "Second paragraph text..."
        }
      ],
      questionGroups: [
        // QUESTION TYPE 1: TRUE / FALSE / NOT GIVEN
        {
          id: "group-1",
          instructions: "Do the following statements agree with the information given in reading passage 1? In boxes 1–7 on your answer sheet, choose TRUE, FALSE, or NOT GIVEN.",
          type: "true-false-notgiven",
          rules: [
            "TRUE - if the statement agrees with the information",
            "FALSE - if the statement contradicts the information",
            "NOT GIVEN - if there is no information on this"
          ],
          questions: [
            {
              id: 1,
              passageNum: 1,
              type: "tfng",
              prompt: "Question prompt text...",
              options: ["TRUE", "FALSE", "NOT GIVEN"],
              correctAnswer: "TRUE",
              targetParagraphId: "p1-1",
              evidenceQuote: "Relevant quote from paragraph 1",
              explanation: "Why this answer is correct..."
            }
          ]
        },

        // QUESTION TYPE 2: NOTES / SUMMARY FILL-IN-THE-BLANK
        {
          id: "group-2",
          instructions: "Complete the notes below. Choose ONE WORD ONLY from the passage for each answer.",
          type: "fill-blank",
          title: "Notes Heading",
          questions: [
            {
              id: 8,
              passageNum: 1,
              type: "blank",
              prefix: "Text before the blank",
              suffix: "text after the blank.",
              placeholder: "ONE WORD ONLY",
              wordLimit: 1,
              correctAnswer: "example",
              acceptedAnswers: ["example", "examples"],
              targetParagraphId: "p1-2",
              evidenceQuote: "Quote showing the answer",
              explanation: "Explanation..."
            }
          ]
        }
      ]
    },

    {
      id: "passage-2",
      number: 2,
      title: "Title of Passage 2",
      subtitle: "",
      paragraphs: [
        {
          id: "p2-A",
          label: "A",
          text: "Paragraph A content..."
        }
      ],
      questionGroups: [
        // QUESTION TYPE 3: MATCHING PARAGRAPHS (A-G)
        {
          id: "group-3",
          instructions: "Reading Passage 2 has paragraphs A–G. Which paragraph contains the following information?",
          type: "matching-paragraphs",
          questions: [
            {
              id: 14,
              passageNum: 2,
              type: "match-para",
              prompt: "Information description...",
              options: ["A", "B", "C", "D", "E", "F", "G"],
              correctAnswer: "A",
              targetParagraphId: "p2-A",
              evidenceQuote: "Quote...",
              explanation: "Explanation..."
            }
          ]
        },

        // QUESTION TYPE 4: CHOOSE TWO FROM A-E (Double Multiple Choice)
        {
          id: "group-4",
          instructions: "Questions 20 and 21: Choose TWO letters, A–E.",
          type: "multi-choice-double",
          leadQuestion: "Which TWO of the following statements are made by the writer?",
          pairIds: [20, 21],
          choices: [
            { letter: "A", text: "Option A" },
            { letter: "B", text: "Option B" },
            { letter: "C", text: "Option C" },
            { letter: "D", text: "Option D" },
            { letter: "E", text: "Option E" }
          ],
          correctPair: ["B", "D"],
          targetParagraphId: "p2-A",
          evidenceQuote: "Quote...",
          explanation: "Explanation..."
        }
      ]
    },

    {
      id: "passage-3",
      number: 3,
      title: "Title of Passage 3",
      subtitle: "",
      paragraphs: [
        {
          id: "p3-1",
          label: "1",
          text: "Passage 3 content..."
        }
      ],
      questionGroups: [
        // QUESTION TYPE 5: MULTIPLE CHOICE (A, B, C, D)
        {
          id: "group-7",
          instructions: "Questions 27–30: Choose the correct letter, A, B, C or D.",
          type: "multiple-choice",
          questions: [
            {
              id: 27,
              passageNum: 3,
              type: "mcq",
              prompt: "What does the writer say about...",
              options: [
                { letter: "A", text: "Choice A" },
                { letter: "B", text: "Choice B" },
                { letter: "C", text: "Choice C" },
                { letter: "D", text: "Choice D" }
              ],
              correctAnswer: "A",
              targetParagraphId: "p3-1",
              evidenceQuote: "Quote...",
              explanation: "Explanation..."
            }
          ]
        },

        // QUESTION TYPE 6: SUMMARY WITH PHRASE BANK (A-J)
        {
          id: "group-8",
          instructions: "Questions 31–36: Complete the summary using the list of phrases, A–J, below.",
          type: "summary-options",
          title: "Summary Title",
          phraseBank: [
            { letter: "A", text: "phrase 1" },
            { letter: "B", text: "phrase 2" },
            { letter: "C", text: "phrase 3" }
          ],
          questions: [
            {
              id: 31,
              passageNum: 3,
              type: "summary-letter",
              prefix: "Sentence text before blank",
              suffix: "sentence text after blank.",
              correctAnswer: "B",
              targetParagraphId: "p3-1",
              explanation: "Explanation..."
            }
          ]
        },

        // QUESTION TYPE 7: YES / NO / NOT GIVEN
        {
          id: "group-9",
          instructions: "Questions 37–40: Do the following statements agree with the claims of the writer? Choose YES, NO, or NOT GIVEN.",
          type: "yes-no-notgiven",
          rules: [
            "YES - if the statement agrees with the claims of the writer",
            "NO - if the statement contradicts the claims of the writer",
            "NOT GIVEN - if it is impossible to say what the writer thinks about this"
          ],
          questions: [
            {
              id: 37,
              passageNum: 3,
              type: "ynng",
              prompt: "Statement...",
              options: ["YES", "NO", "NOT GIVEN"],
              correctAnswer: "YES",
              targetParagraphId: "p3-1",
              explanation: "Explanation..."
            }
          ]
        }
      ]
    }
  ],

  // Official IELTS Academic Reading 9-Band Scale
  calculateBandScore: function(rawScore) {
    if (rawScore >= 39) return { band: "9.0", description: "Expert User", level: "C2" };
    if (rawScore >= 37) return { band: "8.5", description: "Very Good User (High)", level: "C2" };
    if (rawScore >= 35) return { band: "8.0", description: "Very Good User", level: "C1" };
    if (rawScore >= 33) return { band: "7.5", description: "Good User (High)", level: "C1" };
    if (rawScore >= 30) return { band: "7.0", description: "Good User", level: "B2" };
    if (rawScore >= 27) return { band: "6.5", description: "Competent User (High)", level: "B2" };
    if (rawScore >= 23) return { band: "6.0", description: "Competent User", level: "B2" };
    if (rawScore >= 19) return { band: "5.5", description: "Modest User (High)", level: "B1" };
    if (rawScore >= 15) return { band: "5.0", description: "Modest User", level: "B1" };
    if (rawScore >= 13) return { band: "4.5", description: "Limited User (High)", level: "B1" };
    if (rawScore >= 10) return { band: "4.0", description: "Limited User", level: "A2" };
    if (rawScore >= 8)  return { band: "3.5", description: "Extremely Limited User (High)", level: "A2" };
    if (rawScore >= 6)  return { band: "3.0", description: "Extremely Limited User", level: "A1" };
    if (rawScore >= 4)  return { band: "2.5", description: "Intermittent User", level: "A1" };
    return { band: "2.0", description: "Non User", level: "A0" };
  }
};
