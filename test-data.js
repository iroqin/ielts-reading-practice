// IELTS Reading Test 292 - Complete Test Data & Explanations

const IELTS_TEST_DATA = {
  id: "ielts-reading-test-292",
  title: "IELTS Academic Reading Test 292",
  timeLimitMinutes: 60,
  passages: [
    {
      id: "passage-1",
      number: 1,
      title: "How tennis rackets have changed",
      subtitle: "The evolution and customization of modern tennis rackets",
      paragraphs: [
        {
          id: "p1-1",
          label: "1",
          text: "In 2016, the British professional tennis player Andy Murray was ranked as the world’s number one. It was an incredible achievement by any standard – made even more remarkable by the fact that he did this during a period considered to be one of the strongest in the sport’s history, competing against the likes of Rafael Nadal, Roger Federer and Novak Djokovic, to name just a few. Yet five years previously, he had been regarded as a talented outsider who entered but never won the major tournaments."
        },
        {
          id: "p1-2",
          label: "2",
          text: "Of the changes that account for this transformation, one was visible and widely publicised: in 2011, Murray invited former number one player Ivan Lendl onto his coaching team – a valuable addition that had a visible impact on the player’s playing style. Another change was so subtle as to pass more or less unnoticed. Like many players, Murray has long preferred a racket that consists of two types of string: one for the mains (verticals) and another for the crosses (horizontals). While he continued to use natural string in the crosses, in 2012 he switched to a synthetic string for the mains. A small change, perhaps, but its importance should not be underestimated."
        },
        {
          id: "p1-3",
          label: "3",
          text: "The modification that Murray made is just one of a number of options available to players looking to tweak their rackets in order to improve their games. ‘Touring professionals have their rackets customised to their specific needs,’ says Cohn Triplow, a UK-based professional racket stringer. ‘It’s a highly important part of performance maximisation.’ Consequently, the specific rackets used by the world’s elite are not actually readily available to the public; rather, each racket is individually made to suit the player who uses it. Take the US professional tennis players Mike and Bob Bryan, for example: ‘We’re very particular with our racket specifications,’ they say. ‘All our rackets are sent from our manufacturer to Tampa, Florida, where our frames go through a thorough customisation process.’ They explain how they have adjusted not only racket length, but even experimented with different kinds of paint. The rackets they use now weigh more than the average model and also have a denser string pattern (i.e. more crosses and mains)."
        },
        {
          id: "p1-4",
          label: "4",
          text: "The primary reason for these modifications is simple: as the line between winning and losing becomes thinner and thinner, even these slight changes become more and more important. As a result, players and their teams are becoming increasingly creative with the modifications to their rackets as they look to maximise their competitive advantage."
        },
        {
          id: "p1-5",
          label: "5",
          text: "Racket modifications mainly date back to the 1970s, when the amateur German tennis player Werner Fischer started playing with the so-called spaghetti-strung racket. It created a string bed that generated so much topspin that it was quickly banned by the International Tennis Federation. However, within a decade or two, racket modification became a regularity. Today it is, in many ways, an aspect of the game that is equal in significance to nutrition or training."
        },
        {
          id: "p1-6",
          label: "6",
          text: "Modifications can be divided into two categories: those to the string bed and those to the racket frame. The former is far more common than the latter: the choice of the strings and the tension with which they are installed is something that nearly all professional players experiment with. They will continually change it depending on various factors including the court surface, climatic conditions, and game styles. Some will even change it depending on how they feel at the time."
        },
        {
          id: "p1-7",
          label: "7",
          text: "At one time, all tennis rackets were strung with natural gut made from the outer layer of sheep or cow intestines. This all changed in the early 1990s with the development of synthetic strings that were cheaper and more durable. They are made from three materials: nylon (relatively durable and affordable), Kevlar (too stiff to be used alone) or co-polyester (polyester combined with additives that enhance its performance). Even so, many professional players continue to use a ‘hybrid set-up’, where a combination of both synthetic and natural strings are used."
        },
        {
          id: "p1-8",
          label: "8",
          text: "Of the synthetics, co-polyester is by far the most widely used. It’s a perfect fit for the style of tennis now played, where players tend to battle it out from the back of the court rather than coming to the net. Studies indicate that the average spin from a co-polyester string is 25% greater than that from natural string or other synthetics. In a sense, the development of co-polyester strings has revolutionised the game."
        },
        {
          id: "p1-9",
          label: "9",
          text: "However, many players go beyond these basic adjustments to the strings and make changes to the racket frame itself. For example, much of the serving power of US professional player Pete Sampras was attributed to the addition of four to five lead weights onto his rackets, and today many professionals have the weight adjusted during the manufacturing process."
        },
        {
          id: "p1-10",
          label: "10",
          text: "Other changes to the frame involve the handle. Players have individual preferences for the shape of the handle and some will have the handle of one racket moulded onto the frame of a different racket. Other players make different changes. The professional Portuguese player Goncalo Oliveira replaced the original grips of his rackets with something thinner because they had previously felt uncomfortable to hold."
        },
        {
          id: "p1-11",
          label: "11",
          text: "Racket customisation and modification have pushed the standards of the game to greater levels that few could have anticipated in the days of natural strings and heavy, wooden frames, and it’s exciting to see what further developments there will be in the future."
        }
      ],
      questionGroups: [
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
              prompt: "People had expected Andy Murray to become the world’s top tennis player for at least five years before 2016.",
              options: ["TRUE", "FALSE", "NOT GIVEN"],
              correctAnswer: "FALSE",
              targetParagraphId: "p1-1",
              evidenceQuote: "five years previously, he had been regarded as a talented outsider who entered but never won the major tournaments.",
              explanation: "Paragraph 1 states that five years earlier Murray was regarded as an outsider who never won majors, which directly contradicts the claim that people expected him to become world number one."
            },
            {
              id: 2,
              passageNum: 1,
              type: "tfng",
              prompt: "The change that Andy Murray made to his rackets attracted a lot of attention.",
              options: ["TRUE", "FALSE", "NOT GIVEN"],
              correctAnswer: "FALSE",
              targetParagraphId: "p1-2",
              evidenceQuote: "Another change was so subtle as to pass more or less unnoticed... switched to a synthetic string for the mains.",
              explanation: "Paragraph 2 explicitly states that the string change was so subtle that it passed 'more or less unnoticed', contradicting the idea that it attracted a lot of attention."
            },
            {
              id: 3,
              passageNum: 1,
              type: "tfng",
              prompt: "Most of the world’s top players take a professional racket stringer on tour with them.",
              options: ["TRUE", "FALSE", "NOT GIVEN"],
              correctAnswer: "NOT GIVEN",
              targetParagraphId: "p1-3",
              evidenceQuote: "‘Touring professionals have their rackets customised to their specific needs,’ says Cohn Triplow, a UK-based professional racket stringer.",
              explanation: "The passage quotes a professional racket stringer saying rackets are customised, but nowhere does it mention whether players take a stringer on tour with them."
            },
            {
              id: 4,
              passageNum: 1,
              type: "tfng",
              prompt: "Mike and Bob Bryan use rackets that are light in comparison to the majority of rackets.",
              options: ["TRUE", "FALSE", "NOT GIVEN"],
              correctAnswer: "FALSE",
              targetParagraphId: "p1-3",
              evidenceQuote: "The rackets they use now weigh more than the average model and also have a denser string pattern",
              explanation: "Paragraph 3 reveals their rackets 'weigh more than the average model', meaning they are heavier, not lighter."
            },
            {
              id: 5,
              passageNum: 1,
              type: "tfng",
              prompt: "Werner Fischer played with a spaghetti-strung racket that he designed himself.",
              options: ["TRUE", "FALSE", "NOT GIVEN"],
              correctAnswer: "NOT GIVEN",
              targetParagraphId: "p1-5",
              evidenceQuote: "when the amateur German tennis player Werner Fischer started playing with the so-called spaghetti-strung racket.",
              explanation: "Paragraph 5 says Werner Fischer started playing with the spaghetti-strung racket, but does not state whether he designed it himself."
            },
            {
              id: 6,
              passageNum: 1,
              type: "tfng",
              prompt: "The weather can affect how professional players adjust the strings on their rackets.",
              options: ["TRUE", "FALSE", "NOT GIVEN"],
              correctAnswer: "TRUE",
              targetParagraphId: "p1-6",
              evidenceQuote: "They will continually change it depending on various factors including the court surface, climatic conditions, and game styles.",
              explanation: "'Climatic conditions' in Paragraph 6 is synonymous with weather."
            },
            {
              id: 7,
              passageNum: 1,
              type: "tfng",
              prompt: "It was believed that the change Pete Sampras made to his rackets contributed to his strong serve.",
              options: ["TRUE", "FALSE", "NOT GIVEN"],
              correctAnswer: "TRUE",
              targetParagraphId: "p1-9",
              evidenceQuote: "much of the serving power of US professional player Pete Sampras was attributed to the addition of four to five lead weights onto his rackets",
              explanation: "'Serving power' matches 'strong serve', and 'was attributed to' matches 'was believed that... contributed'."
            }
          ]
        },
        {
          id: "group-2",
          instructions: "Complete the notes below. Choose ONE WORD ONLY from the passage for each answer. Write your answers in boxes 8–13 on your answer sheet.",
          type: "fill-blank",
          title: "The tennis racket and how it has changed",
          questions: [
            {
              id: 8,
              passageNum: 1,
              type: "blank",
              prefix: "Mike and Bob Bryan made changes to the types of",
              suffix: "used on their racket frames.",
              placeholder: "ONE WORD ONLY",
              wordLimit: 1,
              correctAnswer: "paint",
              acceptedAnswers: ["paint", "paints"],
              targetParagraphId: "p1-3",
              evidenceQuote: "adjusted not only racket length, but even experimented with different kinds of paint",
              explanation: "'Different kinds of' is synonymous with 'types of', so the answer is paint."
            },
            {
              id: 9,
              passageNum: 1,
              type: "blank",
              prefix: "Players were not allowed to use the spaghetti-strung racket because of the amount of",
              suffix: "it created.",
              placeholder: "ONE WORD ONLY",
              wordLimit: 1,
              correctAnswer: "topspin",
              acceptedAnswers: ["topspin"],
              targetParagraphId: "p1-5",
              evidenceQuote: "string bed that generated so much topspin that it was quickly banned by the International Tennis Federation",
              explanation: "'Generated' means created, 'banned' means not allowed to use. The answer is topspin."
            },
            {
              id: 10,
              passageNum: 1,
              type: "blank",
              prefix: "Changes to rackets can be regarded as being as important as players’ diets or the",
              suffix: "they do.",
              placeholder: "ONE WORD ONLY",
              wordLimit: 1,
              correctAnswer: "training",
              acceptedAnswers: ["training"],
              targetParagraphId: "p1-5",
              evidenceQuote: "an aspect of the game that is equal in significance to nutrition or training.",
              explanation: "'Equal in significance' means as important as; 'nutrition' corresponds to diets; thus 'training' completes the comparison."
            },
            {
              id: 11,
              passageNum: 1,
              type: "blank",
              prefix: "All rackets used to have natural strings made from the",
              suffix: "of animals.",
              placeholder: "ONE WORD ONLY",
              wordLimit: 1,
              correctAnswer: "intestines",
              acceptedAnswers: ["intestines", "gut"],
              targetParagraphId: "p1-7",
              evidenceQuote: "all tennis rackets were strung with natural gut made from the outer layer of sheep or cow intestines.",
              explanation: "Sheep and cows are animals. Strings were made from their intestines (or natural gut)."
            },
            {
              id: 12,
              passageNum: 1,
              type: "blank",
              prefix: "Pete Sampras had metal",
              suffix: "put into the frames of his rackets.",
              placeholder: "ONE WORD ONLY",
              wordLimit: 1,
              correctAnswer: "weights",
              acceptedAnswers: ["weights", "weight"],
              targetParagraphId: "p1-9",
              evidenceQuote: "attributed to the addition of four to five lead weights onto his rackets",
              explanation: "Lead is a metal, and Sampras added lead weights to his rackets."
            },
            {
              id: 13,
              passageNum: 1,
              type: "blank",
              prefix: "Goncalo Oliveira changed the",
              suffix: "on his racket handles.",
              placeholder: "ONE WORD ONLY",
              wordLimit: 1,
              correctAnswer: "grips",
              acceptedAnswers: ["grips", "grip"],
              targetParagraphId: "p1-10",
              evidenceQuote: "Goncalo Oliveira replaced the original grips of his rackets with something thinner",
              explanation: "'Replaced' corresponds to 'changed', and 'original grips' is on the handles."
            }
          ]
        }
      ]
    },
    {
      id: "passage-2",
      number: 2,
      title: "The pirates of the ancient Mediterranean",
      subtitle: "In the first and second millennia BCE, pirates sailed around the Mediterranean, attacking ships and avoiding pursuers",
      paragraphs: [
        {
          id: "p2-A",
          label: "A",
          text: "When one mentions pirates, an image springs to most people’s minds of a crew of misfits, daredevils and adventurers in command of a tall sailing ship in the Caribbean Sea. Yet from the first to the third millennium BCE, thousands of years before these swashbucklers began spreading fear across the Caribbean, pirates prowled the Mediterranean, raiding merchant ships and threatening vital trade routes. However, despite all efforts and the might of various ancient states, piracy could not be stopped. The situation remained unchanged for thousands of years. Only when the pirates directly threatened the interests of ancient Rome did the Roman Republic organise a massive fleet to eliminate piracy. Under the command of the Roman general Pompey, Rome eradicated piracy, transforming the Mediterranean into ‘Mare Nostrum’ (Our Sea)."
        },
        {
          id: "p2-B",
          label: "B",
          text: "Although piracy in the Mediterranean is first recorded in ancient Egypt during the reign of Pharaoh Amenhotep III (c. 1390–1353 BCE), it is reasonable to assume it predated this powerful civilisation. This is partly due to the great importance the Mediterranean held at this time, and partly due to its geography. While the Mediterranean region is predominantly fertile, some parts are rugged and hilly, even mountainous. In ancient times, the inhabitants of these areas relied heavily on marine resources, including fish and salt. Most had their own boats, possessed good seafaring skills, and unsurpassed knowledge of the local coastline and sailing routes. Thus, it is not surprising that during hardships, these men turned to piracy. Geography itself further benefited the pirates, with the numerous coves along the coast providing places for them to hide their boats and strike undetected. Before the invention of ocean-going caravels in the 15th century, ships could not easily cross long distances over open water. Thus, in the ancient world most were restricted to a few well-known navigable routes that followed the coastline. Caught in a trap, a slow merchant ship laden with goods had no other option but to surrender. In addition, knowledge of the local area helped the pirates to avoid retaliation once a state fleet arrived."
        },
        {
          id: "p2-C",
          label: "C",
          text: "One should also add that it was not unknown in the first and second millennia BCE for governments to resort to pirates’ services, especially during wartime, employing their skills and numbers against their opponents. A pirate fleet would serve in the first wave of attack, preparing the way for the navy. Some of the regions were known for providing safe harbours to pirates, who, in return, boosted the local economy."
        },
        {
          id: "p2-D",
          label: "D",
          text: "The first known record of a named group of Mediterranean pirates, made during the rule of ancient Egyptian Pharaoh Akhenaten (c. 1353–1336 BCE), was in the Amarna Letters. These were extracts of diplomatic correspondence between the pharaoh and his allies, and covered many pressing issues, including piracy. It seems the pharaoh was troubled by two distinct pirate groups, the Lukka and the Sherden. Despite the Egyptian fleet’s best efforts, the pirates continued to cause substantial disruption to regional commerce. In the letters, the king of Alashiya (modern Cyprus) rejected Akhenaten’s claims of a connection with the Lukka (based in modern-day Turkey). The king assured Akhenaten he was prepared to punish any of his subjects involved in piracy."
        },
        {
          id: "p2-E",
          label: "E",
          text: "The ancient Greek world’s experience of piracy was different from that of Egyptian rulers. While Egypt’s power was land-based, the ancient Greeks relied on the Mediterranean in almost all aspects of life, from trade to warfare. Interestingly, in his works the Iliad and the Odyssey, the ancient Greek writer Homer not only condones, but praises the lifestyle and actions of pirates. The opinion remained unchanged in the following centuries. The ancient Greek historian Thucydides, for instance, glorified pirates’ daring attacks on ships or even cities. For Greeks, piracy was a part of everyday life. Even high-ranking members of the state were not beyond engaging in such activities. According to the Greek orator Demosthenes, in 355 BCE, Athenian ambassadors made a detour from their official travel to capture a ship sailing from Egypt, taking the wealth found onboard for themselves! The Greeks’ liberal approach towards piracy does not mean they always tolerated it, but attempts to curtail piracy were hampered by the large number of pirates operating in the Mediterranean."
        },
        {
          id: "p2-F",
          label: "F",
          text: "The rising power of ancient Rome required the Roman Republic to deal with piracy in the Mediterranean. While piracy was a serious issue for the Republic, Rome profited greatly from its existence. Pirate raids provided a steady source of slaves, essential for Rome’s agriculture and mining industries. But this arrangement could work only while the pirates left Roman interests alone. Pirate attacks on grain ships, which were essential to Roman citizens, led to angry voices in the Senate, demanding punishment of the culprits. Rome, however, did nothing, further encouraging piracy. By the 1st century BCE, emboldened pirates kidnapped prominent Roman dignitaries, asking for a large ransom to be paid. Their most famous hostage was none other than Julius Caesar, captured in 75 BCE."
        },
        {
          id: "p2-G",
          label: "G",
          text: "By now, Rome was well aware that pirates had outlived their usefulness. The time had come for concerted action. In 67 BCE, a new law granted Pompey vast funds to combat the Mediterranean menace. Taking personal command, Pompey divided the entire Mediterranean into 13 districts, assigning a fleet and commander to each. After cleansing one district of pirates, the fleet would join another in the next district. The process continued until the entire Mediterranean was free of pirates. Although thousands of pirates died at the hands of Pompey’s troops, as a long-term solution to the problem, many more were offered land in fertile areas located far from the sea. Instead of a maritime menace, Rome got productive farmers that further boosted its economy."
        }
      ],
      questionGroups: [
        {
          id: "group-3",
          instructions: "Reading Passage 2 has seven paragraphs, A–G. Which paragraph contains the following information? Write the correct letter, A–G, in boxes 14–19 on your answer sheet. NB You may use any letter more than once.",
          type: "matching-paragraphs",
          questions: [
            {
              id: 14,
              passageNum: 2,
              type: "match-para",
              prompt: "a reference to a denial of involvement in piracy",
              options: ["A", "B", "C", "D", "E", "F", "G"],
              correctAnswer: "D",
              targetParagraphId: "p2-D",
              evidenceQuote: "the king of Alashiya (modern Cyprus) rejected Akhenaten’s claims of a connection with the Lukka",
              explanation: "In paragraph D, the king of Alashiya rejected claims of any connection with pirate groups (denial of involvement)."
            },
            {
              id: 15,
              passageNum: 2,
              type: "match-para",
              prompt: "details of how a campaign to eradicate piracy was carried out",
              options: ["A", "B", "C", "D", "E", "F", "G"],
              correctAnswer: "G",
              targetParagraphId: "p2-G",
              evidenceQuote: "Pompey divided the entire Mediterranean into 13 districts, assigning a fleet and commander to each... until the entire Mediterranean was free of pirates.",
              explanation: "Paragraph G provides step-by-step details of Pompey's military campaign."
            },
            {
              id: 16,
              passageNum: 2,
              type: "match-para",
              prompt: "a mention of the circumstances in which states in the ancient world would make use of pirates",
              options: ["A", "B", "C", "D", "E", "F", "G"],
              correctAnswer: "C",
              targetParagraphId: "p2-C",
              evidenceQuote: "governments to resort to pirates’ services, especially during wartime, employing their skills and numbers against their opponents.",
              explanation: "Paragraph C notes that ancient governments employed pirates during wartime."
            },
            {
              id: 17,
              passageNum: 2,
              type: "match-para",
              prompt: "a reference to how people today commonly view pirates",
              options: ["A", "B", "C", "D", "E", "F", "G"],
              correctAnswer: "A",
              targetParagraphId: "p2-A",
              evidenceQuote: "an image springs to most people’s minds of a crew of misfits, daredevils and adventurers in command of a tall sailing ship in the Caribbean Sea.",
              explanation: "Paragraph A describes the modern, common perception of pirates as Caribbean swashbucklers."
            },
            {
              id: 18,
              passageNum: 2,
              type: "match-para",
              prompt: "an explanation of how some people were encouraged not to return to piracy",
              options: ["A", "B", "C", "D", "E", "F", "G"],
              correctAnswer: "G",
              targetParagraphId: "p2-G",
              evidenceQuote: "as a long-term solution to the problem, many more were offered land in fertile areas located far from the sea. Instead of a maritime menace, Rome got productive farmers",
              explanation: "Paragraph G explains that pirates were given fertile farming land away from the sea so they would not return to piracy."
            },
            {
              id: 19,
              passageNum: 2,
              type: "match-para",
              prompt: "a mention of the need for many sailing vessels to stay relatively close to land",
              options: ["A", "B", "C", "D", "E", "F", "G"],
              correctAnswer: "B",
              targetParagraphId: "p2-B",
              evidenceQuote: "Before the invention of ocean-going caravels in the 15th century, ships could not easily cross long distances over open water. Thus, in the ancient world most were restricted to a few well-known navigable routes that followed the coastline.",
              explanation: "Paragraph B explains that ancient ships had to stay close to the coastline."
            }
          ]
        },
        {
          id: "group-4",
          instructions: "Questions 20 and 21: Choose TWO letters, A–E. Write the correct letters in boxes 20 and 21 on your answer sheet.",
          type: "multi-choice-double",
          leadQuestion: "Which TWO of the following statements does the writer make about inhabitants of the Mediterranean region in the ancient world?",
          pairIds: [20, 21],
          choices: [
            { letter: "A", text: "They often used stolen vessels to carry out pirate attacks." },
            { letter: "B", text: "They managed to escape capture by the authorities because they knew the area so well." },
            { letter: "C", text: "They paid for information about the routes merchant ships would take." },
            { letter: "D", text: "They depended more on the sea for their livelihood than on farming." },
            { letter: "E", text: "They stored many of the goods taken in pirate attacks in coves along the coastline." }
          ],
          correctPair: ["B", "D"],
          targetParagraphId: "p2-B",
          evidenceQuote: "the inhabitants of these areas relied heavily on marine resources, including fish and salt... knowledge of the local area helped the pirates to avoid retaliation once a state fleet arrived.",
          explanation: "In paragraph B, reliance on marine resources (fish and salt) rather than rugged land reflects Option D, and knowledge of the area enabling them to avoid retaliation matches Option B."
        },
        {
          id: "group-5",
          instructions: "Questions 22 and 23: Choose TWO letters, A–E. Write the correct letters in boxes 22 and 23 on your answer sheet.",
          type: "multi-choice-double",
          leadQuestion: "Which TWO of the following statements does the writer make about piracy and ancient Greece?",
          pairIds: [22, 23],
          choices: [
            { letter: "A", text: "The state estimated that very few people were involved in piracy." },
            { letter: "B", text: "Attitudes towards piracy changed shortly after the Iliad and the Odyssey were written." },
            { letter: "C", text: "Important officials were known to occasionally take part in piracy." },
            { letter: "D", text: "Every citizen regarded pirate attacks on cities as unacceptable." },
            { letter: "E", text: "A favourable view of piracy is evident in certain ancient Greek texts." }
          ],
          correctPair: ["C", "E"],
          targetParagraphId: "p2-E",
          evidenceQuote: "in his works the Iliad and the Odyssey, the ancient Greek writer Homer not only condones, but praises the lifestyle... Athenian ambassadors made a detour from their official travel to capture a ship... taking the wealth found onboard for themselves!",
          explanation: "In paragraph E, Homer's praises show a favourable view in ancient texts (Option E), and Athenian ambassadors capturing a ship confirms important officials took part in piracy (Option C)."
        },
        {
          id: "group-6",
          instructions: "Complete the summary below. Choose ONE WORD ONLY from the passage for each answer. Write your answers in boxes 24–26 on your answer sheet.",
          type: "fill-blank",
          title: "Ancient Rome and piracy",
          questions: [
            {
              id: 24,
              passageNum: 2,
              type: "blank",
              prefix: "Piracy was an issue ancient Rome had to deal with, but it also brought some benefits for Rome. For example, pirates supplied slaves that were important for Rome’s industries. However, attacks on vessels transporting",
              suffix: "to Rome resulted in calls for",
              placeholder: "ONE WORD ONLY",
              wordLimit: 1,
              correctAnswer: "grain",
              acceptedAnswers: ["grain"],
              targetParagraphId: "p2-F",
              evidenceQuote: "Pirate attacks on grain ships, which were essential to Roman citizens",
              explanation: "Paragraph F mentions attacks on 'grain ships' (vessels transporting grain)."
            },
            {
              id: 25,
              passageNum: 2,
              type: "blank",
              prefix: "resulted in calls for",
              suffix: "for the pirates responsible.",
              placeholder: "ONE WORD ONLY",
              wordLimit: 1,
              correctAnswer: "punishment",
              acceptedAnswers: ["punishment"],
              targetParagraphId: "p2-F",
              evidenceQuote: "led to angry voices in the Senate, demanding punishment of the culprits",
              explanation: "'Demanding' matches 'calls for'; 'culprits' are the pirates responsible. The answer is punishment."
            },
            {
              id: 26,
              passageNum: 2,
              type: "blank",
              prefix: "Nevertheless, piracy continued, with some pirates demanding a",
              suffix: "for the return of the Roman officials they captured.",
              placeholder: "ONE WORD ONLY",
              wordLimit: 1,
              correctAnswer: "ransom",
              acceptedAnswers: ["ransom"],
              targetParagraphId: "p2-F",
              evidenceQuote: "kidnapped prominent Roman dignitaries, asking for a large ransom to be paid",
              explanation: "Asking for = demanding; dignitaries = Roman officials; ransom is the required payment."
            }
          ]
        }
      ]
    },
    {
      id: "passage-3",
      number: 3,
      title: "The persistence and peril of misinformation",
      subtitle: "Brian Southwell looks at how human brains verify information and discusses some of the challenges of battling widespread falsehoods",
      paragraphs: [
        {
          id: "p3-1",
          label: "1",
          text: "Misinformation – both deliberately promoted and accidentally shared – is perhaps an inevitable part of the world in which we live, but it is not a new problem. People likely have lied to one another for roughly as long as verbal communication has existed. Deceiving others can offer an apparent opportunity to gain strategic advantage, to motivate others to action, or even to protect interpersonal bonds. Moreover, people inadvertently have been sharing inaccurate information with one another for thousands of years."
        },
        {
          id: "p3-2",
          label: "2",
          text: "However, we currently live in an era in which technology enables information to reach large audiences distributed across the globe, and thus the potential for immediate and widespread effects from misinformation now looms larger than in the past. Yet the means to correct misinformation might, over time, be found in those same patterns of mass communication and of the facilitated spread of information."
        },
        {
          id: "p3-3",
          label: "3",
          text: "The main worry regarding misinformation is its potential to unduly influence attitudes and behavior, leading people to think and act differently than they would if they were correctly informed, as suggested by the research teams of Stephan Lewandowsky of the University of Bristol and Elizabeth Marsh of Duke University, among others. In other words, we worry that misinformation might lead people to hold misperceptions (or false beliefs) and that these misperceptions, especially when they occur among large groups of people, may have detrimental, downstream consequences for health, social harmony, and the political climate."
        },
        {
          id: "p3-4",
          label: "4",
          text: "At least three observations related to misinformation in the contemporary mass-media environment warrant the attention of researchers, policy makers, and really everyone who watches television, listens to the radio, or reads information online. First of all, people who encounter misinformation tend to believe it, at least initially. Secondly, electronic and print media often do not block many types of misinformation before it appears in content available to large audiences. Thirdly, countering misinformation once it has enjoyed wide exposure can be a resource-intensive effort."
        },
        {
          id: "p3-5",
          label: "5",
          text: "Knowing what happens when people initially encounter misinformation holds tremendous importance for estimating the potential for subsequent problems. Although it is fairly routine for individuals to come across information that is false, the question of exactly how – and when – we mentally label information as true or false has garnered philosophical debate. The dilemma is neatly summarized by a contrast between how the 17th-century philosophers René Descartes and Baruch Spinoza described human information engagement, with conflicting predictions that only recently have been empirically tested in robust ways. Descartes argued that a person only accepts or rejects information after considering its truth or falsehood; Spinoza argued that people accept all encountered information (or misinformation) by default and then subsequently verify or reject it through a separate cognitive process. In recent decades, empirical evidence from the research teams of Erik Asp of the University of Chicago and Daniel Gilbert at Harvard University, among others, has supported Spinoza’s account: people appear to encode all new information as if it were true, even if only momentarily, and later tag the information as being either true or false, a pattern that seems consistent with the observation that mental resources for skepticism physically reside in a different part of the brain than the resources used in perceiving and encoding."
        },
        {
          id: "p3-6",
          label: "6",
          text: "What about our second observation that misinformation often can appear in electronic or print media without being preemptively blocked? In support of this, one might consider the nature of regulatory structures in the United States: regulatory agencies here tend to focus on post hoc detection of broadcast information. Organizations such as the Food and Drug Administration (FDA) offer considerable monitoring and notification functions, but these roles typically do not involve preemptive censoring. The FDA oversees direct-to-consumer prescription drug advertising, for example, and has developed mechanisms such as the ‘Bad Ad’ program, through which people can report advertising in apparent violation of FDA guidelines on drug risks. Such programs, although laudable and useful, do not keep false advertising off the airwaves. In addition, even misinformation that is successfully corrected can continue to affect attitudes."
        },
        {
          id: "p3-7",
          label: "7",
          text: "This leads us to our third observation: a campaign to correct misinformation, even if rhetorically compelling, requires resources and planning to accomplish necessary reach and frequency. For corrective campaigns to be persuasive, audiences need to be able to comprehend them, which requires either effort to frame messages in ways that are accessible or effort to educate and sensitize audiences to the possibility of misinformation. That some audiences might be unaware of the potential for misinformation also suggests the utility of media literacy efforts as early as elementary school. Even with journalists and scholars pointing to the phenomenon of ‘fake news’, people do not distinguish between demonstrably false stories and those based in fact when scanning and processing written information."
        },
        {
          id: "p3-8",
          label: "8",
          text: "We live at a time when widespread misinformation is common. Yet at this time many people also are passionately developing potential solutions and remedies. The journey forward undoubtedly will be a long and arduous one. Future remedies will require not only continued theoretical consideration but also the development and maintenance of consistent monitoring tools and a recognition among fellow members of society that claims which find prominence in the media that are insufficiently based in scientific consensus and social reality should be countered. Misinformation arises as a result of human fallibility and human information needs. To overcome the worst effects of the phenomenon, we will need coordinated efforts over time, rather than any singular one-time panacea we could hope to offer."
        }
      ],
      questionGroups: [
        {
          id: "group-7",
          instructions: "Questions 27–30: Choose the correct letter, A, B, C or D. Write the correct letter in boxes 27–30 on your answer sheet.",
          type: "multiple-choice",
          questions: [
            {
              id: 27,
              passageNum: 3,
              type: "mcq",
              prompt: "What point does the writer make about misinformation in the first paragraph?",
              options: [
                { letter: "A", text: "Misinformation is a relatively recent phenomenon." },
                { letter: "B", text: "Some people find it easy to identify misinformation." },
                { letter: "C", text: "Misinformation changes as it is passed from one person to another." },
                { letter: "D", text: "There may be a number of reasons for the spread of misinformation." }
              ],
              correctAnswer: "D",
              targetParagraphId: "p3-1",
              evidenceQuote: "Deceiving others can offer an apparent opportunity to gain strategic advantage, to motivate others to action, or even to protect interpersonal bonds. Moreover, people inadvertently have been sharing inaccurate information...",
              explanation: "Paragraph 1 lists diverse motivations and causes (strategic advantage, motivation, protecting bonds, accidental sharing), matching Option D."
            },
            {
              id: 28,
              passageNum: 3,
              type: "mcq",
              prompt: "What does the writer say about the role of technology?",
              options: [
                { letter: "A", text: "It may at some point provide us with a solution to misinformation." },
                { letter: "B", text: "It could fundamentally alter the way in which people regard information." },
                { letter: "C", text: "It has changed the way in which organisations use misinformation." },
                { letter: "D", text: "It has made it easier for people to check whether information is accurate." }
              ],
              correctAnswer: "A",
              targetParagraphId: "p3-2",
              evidenceQuote: "Yet the means to correct misinformation might, over time, be found in those same patterns of mass communication and of the facilitated spread of information.",
              explanation: "Technology enables widespread mass communication, and the writer notes that 'means to correct misinformation might, over time, be found' therein, matching Option A."
            },
            {
              id: 29,
              passageNum: 3,
              type: "mcq",
              prompt: "What is the writer doing in the fourth paragraph?",
              options: [
                { letter: "A", text: "comparing the different opinions people have of misinformation" },
                { letter: "B", text: "explaining how the effects of misinformation have changed over time" },
                { letter: "C", text: "outlining which issues connected with misinformation are significant today" },
                { letter: "D", text: "describing the attitude of policy makers towards misinformation in the media" }
              ],
              correctAnswer: "C",
              targetParagraphId: "p3-4",
              evidenceQuote: "At least three observations related to misinformation in the contemporary mass-media environment warrant the attention of researchers, policy makers...",
              explanation: "The paragraph outlines three key observations/issues that warrant attention in today's contemporary environment."
            },
            {
              id: 30,
              passageNum: 3,
              type: "mcq",
              prompt: "What point does the writer make about regulation in the USA?",
              options: [
                { letter: "A", text: "The guidelines issued by the FDA need to be simplified." },
                { letter: "B", text: "Regulation does not affect people’s opinions of new prescription drugs." },
                { letter: "C", text: "The USA has more regulatory bodies than most other countries." },
                { letter: "D", text: "Regulation fails to prevent misinformation from appearing in the media." }
              ],
              correctAnswer: "D",
              targetParagraphId: "p3-6",
              evidenceQuote: "regulatory agencies here tend to focus on post hoc detection of broadcast information... do not keep false advertising off the airwaves.",
              explanation: "Because regulation focuses on post hoc detection and lacks preemptive censoring, it fails to keep misinformation off the airwaves."
            }
          ]
        },
        {
          id: "group-8",
          instructions: "Questions 31–36: Complete the summary using the list of phrases, A–J, below. Write the correct letter, A–J, in boxes 31–36 on your answer sheet.",
          type: "summary-options",
          title: "What happens when people encounter misinformation?",
          phraseBank: [
            { letter: "A", text: "constant conflict" },
            { letter: "B", text: "additional evidence" },
            { letter: "C", text: "different locations" },
            { letter: "D", text: "experimental subjects" },
            { letter: "E", text: "short period" },
            { letter: "F", text: "extreme distrust" },
            { letter: "G", text: "frequent exposure" },
            { letter: "H", text: "mental operation" },
            { letter: "I", text: "dubious reason" },
            { letter: "J", text: "different ideas" }
          ],
          questions: [
            {
              id: 31,
              passageNum: 3,
              type: "summary-letter",
              prefix: "Although people have",
              suffix: "to misinformation, there is debate about precisely how and when we label something as true or untrue.",
              correctAnswer: "G",
              targetParagraphId: "p3-5",
              evidenceQuote: "Although it is fairly routine for individuals to come across information that is false",
              explanation: "'Fairly routine to come across' equates to frequent exposure (G)."
            },
            {
              id: 32,
              passageNum: 3,
              type: "summary-letter",
              prefix: "The philosophers Descartes and Spinoza had",
              suffix: "about how people engage with information.",
              correctAnswer: "J",
              targetParagraphId: "p3-5",
              evidenceQuote: "with conflicting predictions that only recently have been empirically tested",
              explanation: "'Conflicting predictions' equates to different ideas (J)."
            },
            {
              id: 33,
              passageNum: 3,
              type: "summary-letter",
              prefix: "Moreover, Spinoza believed that a distinct",
              suffix: "is involved in these stages.",
              correctAnswer: "H",
              targetParagraphId: "p3-5",
              evidenceQuote: "subsequently verify or reject it through a separate cognitive process.",
              explanation: "'Separate cognitive process' corresponds to distinct mental operation (H)."
            },
            {
              id: 34,
              passageNum: 3,
              type: "summary-letter",
              prefix: "Recent research has provided",
              suffix: "for Spinoza’s theory",
              correctAnswer: "B",
              targetParagraphId: "p3-5",
              evidenceQuote: "empirical evidence from the research teams... has supported Spinoza’s account",
              explanation: "Empirical evidence supporting Spinoza's account equates to additional evidence (B)."
            },
            {
              id: 35,
              passageNum: 3,
              type: "summary-letter",
              prefix: "and it would appear that people accept all encountered information as if it were true, even if this is for an extremely",
              suffix: "and do not label the information as true or false until later.",
              correctAnswer: "E",
              targetParagraphId: "p3-5",
              evidenceQuote: "encode all new information as if it were true, even if only momentarily",
              explanation: "'Momentarily' equates to an extremely short period (E)."
            },
            {
              id: 36,
              passageNum: 3,
              type: "summary-letter",
              prefix: "This is consistent with the fact that the resources for scepticism and the resources for perceiving and encoding are in",
              suffix: "in the brain.",
              correctAnswer: "C",
              targetParagraphId: "p3-5",
              evidenceQuote: "mental resources for skepticism physically reside in a different part of the brain than the resources used in perceiving and encoding.",
              explanation: "'Different part of the brain' equates to different locations (C)."
            }
          ]
        },
        {
          id: "group-9",
          instructions: "Questions 37–40: Do the following statements agree with the claims of the writer in Reading Passage 3? In boxes 37–40 on your answer sheet, choose YES, NO, or NOT GIVEN.",
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
              prompt: "Campaigns designed to correct misinformation will fail to achieve their purpose if people are unable to understand them.",
              options: ["YES", "NO", "NOT GIVEN"],
              correctAnswer: "YES",
              targetParagraphId: "p3-7",
              evidenceQuote: "For corrective campaigns to be persuasive, audiences need to be able to comprehend them",
              explanation: "'Comprehend' means understand; if audiences cannot comprehend, campaigns cannot be persuasive or achieve their purpose. Agrees with the writer (YES)."
            },
            {
              id: 38,
              passageNum: 3,
              type: "ynng",
              prompt: "Attempts to teach elementary school students about misinformation have been opposed.",
              options: ["YES", "NO", "NOT GIVEN"],
              correctAnswer: "NOT GIVEN",
              targetParagraphId: "p3-7",
              evidenceQuote: "suggests the utility of media literacy efforts as early as elementary school.",
              explanation: "Paragraph 7 suggests the utility of media literacy in elementary school, but nowhere does it mention whether anyone has opposed such attempts (NOT GIVEN)."
            },
            {
              id: 39,
              passageNum: 3,
              type: "ynng",
              prompt: "It may be possible to overcome the problem of misinformation in a relatively short period.",
              options: ["YES", "NO", "NOT GIVEN"],
              correctAnswer: "NO",
              targetParagraphId: "p3-8",
              evidenceQuote: "The journey forward undoubtedly will be a long and arduous one... we will need coordinated efforts over time, rather than any singular one-time panacea",
              explanation: "The text says the journey will be long and arduous and needs efforts over time, contradicting 'in a relatively short period' (NO)."
            },
            {
              id: 40,
              passageNum: 3,
              type: "ynng",
              prompt: "The need to keep up with new information is hugely exaggerated in today’s world.",
              options: ["YES", "NO", "NOT GIVEN"],
              correctAnswer: "NOT GIVEN",
              targetParagraphId: "p3-8",
              evidenceQuote: "Misinformation arises as a result of human fallibility and human information needs.",
              explanation: "The passage mentions human information needs, but never states that the need to keep up is hugely exaggerated (NOT GIVEN)."
            }
          ]
        }
      ]
    }
  ],

  // IELTS Academic Reading Band Score Table (out of 40)
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

if (typeof window !== "undefined") {
  window.IELTS_TEST_292_DATA = IELTS_TEST_DATA;
}
