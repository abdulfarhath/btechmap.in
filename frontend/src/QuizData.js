// src/QuizData.js

// ============================================================================
// BTECHMAP - SECTION QUIZ DATA
// ============================================================================
// Structure:
// {
//   [roadmapKey]: {
//     [sectionId]: [
//       { question: "...", options: ["...", "..."], correctAnswer: 0 },
//       ...
//     ]
//   }
// }
// ============================================================================

export const sectionQuizData = {
  // --- Web Development Questions ---
  webdev: {
    // Section 1: HTML Basics
    1: [
      {
        question: "What does HTML stand for?",
        options: [
          "HyperText Markup Language",
          "Hyperlinks and Text Markup Language",
          "Home Tool Markup Language",
          "Hyper-linking Texting Machine Language",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which HTML tag is used to define an internal style sheet?",
        options: ["<css>", "<script>", "<style>", "<link>"],
        correctAnswer: 2,
      },
      {
        question: "What is the correct HTML element for inserting a line break?",
        options: ["<lb>", "<break>", "<br>", "<line>"],
        correctAnswer: 2,
      },
    ],
    // Section 2: CSS Basics
    2: [
      {
        question: "What does CSS stand for?",
        options: [
          "Creative Style Sheets",
          "Cascading Style Sheets",
          "Computer Style Sheets",
          "Colorful Style Sheets",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Which property is used to change the background color of an element?",
        options: ["color", "bgcolor", "background-color", "background"],
        correctAnswer: 2,
      },
    ],
    // Section 3: JavaScript Basics
    3: [
      {
        question:
          "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "let", "const", "All of the above"],
        correctAnswer: 3,
      },
      {
        question: "How do you select an HTML element with the id 'demo'?",
        options: [
          "document.getElement('demo')",
          "document.getElementById('demo')",
          "document.select('#demo')",
          "getElement('#demo')",
        ],
        correctAnswer: 1,
      },
    ],
  },
  // --- DSA Questions ---
  dsa: {
    // Section 1: Programming Basics
    1: [
      {
        question: "What is an algorithm?",
        options: [
          "A programming language",
          "A set of rules or steps to solve a problem",
          "A data structure",
          "A type of computer",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which of these is NOT a programming language?",
        options: ["Python", "Java", "HTML", "C++"],
        correctAnswer: 2,
      },
    ],
    // Add more questions for other DSA sections...
  },
  // Add more roadmaps like 'academics', 'gate', etc.
};

// ============================================================================
// BTECHMAP - FINAL QUIZ DATA (FOR BADGES)
// ============================================================================
// Structure:
// {
//   [roadmapKey]: [
//     { question: "...", options: ["...", "..."], correctAnswer: 0 },
//     ...
//   ]
// }
// ============================================================================

export const finalQuizData = {
  // --- Web Development Final Quiz ---
  webdev: [
    {
      question:
        "What is the correct order of HTML, CSS, and JavaScript in web development?",
      options: [
        "Structure (CSS), Style (HTML), Interactivity (JS)",
        "Structure (HTML), Style (CSS), Interactivity (JS)",
        "Structure (JS), Style (CSS), Interactivity (HTML)",
        "Structure (HTML), Style (JS), Interactivity (CSS)",
      ],
      correctAnswer: 1,
    },
    {
      question: "Which CSS property is used for element layout?",
      options: ["color", "font-size", "flexbox", "text-align"],
      correctAnswer: 2,
    },
    {
      question: "What is the DOM in JavaScript?",
      options: [
        "Data Object Model",
        "Document Object Model",
        "Display Object Management",
        "Digital Ordinance Map",
      ],
      correctAnswer: 1,
    },
    {
      question:
        "Which tag is used to link an external JavaScript file?",
      options: [
        "<script src='...'>",
        "<javascript href='...'>",
        "<link rel='script' href='...'>",
        "<js src='...'>",
      ],
      correctAnswer: 0,
    },
    {
      question: "What is the 'box model' in CSS?",
      options: [
        "A model for 3D boxes",
        "A box for storing CSS files",
        "A layout model for JavaScript",
        "The model that describes element layout as Content, Padding, Border, and Margin",
      ],
      correctAnswer: 3,
    },
  ],
  // --- DSA Final Quiz ---
  dsa: [
    {
      question: "What is a 'Data Structure'?",
      options: [
        "A way to organize and store data",
        "A programming language",
        "A type of algorithm",
        "A computer's file system",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which data structure operates on a 'First-In, First-Out' (FIFO) basis?",
      options: ["Stack", "Array", "Queue", "Tree"],
      correctAnswer: 2,
    },
    {
      question: "Which data structure operates on a 'Last-In, First-Out' (LIFO) basis?",
      options: ["Queue", "Stack", "Linked List", "Graph"],
      correctAnswer: 1,
    },
  ],
  // Add final quizzes for other roadmaps...
};