// ============================================================================
// BTECHMAP - ULTRA DETAILED BEGINNER ROADMAPS 2025
// ============================================================================
// Complete Beginners Edition - Step-by-Step Granular Learning Path
// Every topic broken down from ABSOLUTE BASICS
// ============================================================================

const rawRoadmapsData = {
    academics: {
        cardTitle: "Academic Excellence",
        roadmapTitle: "B.Tech Academic Success Roadmap",
        icon: "🎓",
        color: "#FF6B6B",
        description: "Master your B.Tech curriculum with strategic planning. From semester preparation to exam techniques, project work to CGPA improvement strategies.",
        sections: [
            {
                id: 1,
                title: "Semester Planning & Time Management",
                subtitle: "Start strong, finish stronger",
                steps: [
                    {
                        id: 1,
                        title: "First Week Strategy",
                        description: "Set yourself up for success from day one",
                        completed: false,
                        hasResource: true,
                        options: ["Syllabus Analysis", "Resource Collection", "Study Group Formation"]
                    },
                    {
                        id: 2,
                        title: "Weekly Study Schedule",
                        description: "Create a sustainable study routine",
                        completed: false,
                        hasResource: true,
                        options: ["Time Blocking", "Priority Management", "Break Planning"]
                    },
                    {
                        id: 3,
                        title: "Note-Taking Techniques",
                        description: "Effective note-taking for better retention",
                        completed: false,
                        hasResource: true,
                        options: ["Cornell Method", "Mind Mapping", "Digital Tools"]
                    }
                ]
            },
            {
                id: 2,
                title: "Core Subject Mastery",
                subtitle: "Deep understanding of fundamentals",
                steps: [
                    {
                        id: 4,
                        title: "Mathematics Foundation",
                        description: "Calculus, Linear Algebra, Probability",
                        completed: false,
                        hasResource: true,
                        options: ["Practice Problems", "Previous Papers", "Online Resources"]
                    },
                    {
                        id: 5,
                        title: "Programming Subjects",
                        description: "C, C++, Java, Python courses",
                        completed: false,
                        hasResource: true,
                        options: ["Lab Practice", "Mini Projects", "Coding Assignments"]
                    },
                    {
                        id: 6,
                        title: "Theory Subjects",
                        description: "OS, DBMS, Networks, Compiler Design",
                        completed: false,
                        hasResource: true,
                        options: ["Concept Maps", "Question Banks", "Study Materials"]
                    }
                ]
            },
            {
                id: 3,
                title: "Exam Preparation Strategy",
                subtitle: "Score high with smart preparation",
                steps: [
                    {
                        id: 7,
                        title: "Mid-Term Preparation",
                        description: "2-week preparation strategy",
                        completed: false,
                        hasResource: true,
                        options: ["Revision Notes", "Mock Tests", "Doubt Clearing"]
                    },
                    {
                        id: 8,
                        title: "End-Term Preparation",
                        description: "4-week comprehensive preparation",
                        completed: false,
                        hasResource: true,
                        options: ["Previous Year Papers", "Important Topics", "Time Management"]
                    },
                    {
                        id: 9,
                        title: "Last Minute Revision",
                        description: "Final 48 hours strategy",
                        completed: false,
                        hasResource: true,
                        options: ["Formula Sheets", "Quick Revision", "Stay Calm"]
                    }
                ]
            }
        ]
    },

    gate: {
        cardTitle: "GATE Preparation",
        roadmapTitle: "GATE CSE Complete Preparation Roadmap",
        icon: "🎯",
        color: "#4ECDC4",
        description: "Comprehensive GATE preparation strategy for Computer Science. From basics to advanced topics, with practice strategies and exam techniques.",
        sections: [
            {
                id: 1,
                title: "Phase 1: Foundation Building (Months 1-3)",
                subtitle: "Strengthen your basics",
                steps: [
                    {
                        id: 1,
                        title: "Programming & DSA Basics",
                        description: "C programming and basic data structures",
                        completed: false,
                        hasResource: true,
                        options: ["Arrays", "Linked Lists", "Stacks & Queues"]
                    },
                    {
                        id: 2,
                        title: "Digital Logic",
                        description: "Boolean algebra, combinational circuits",
                        completed: false,
                        hasResource: true,
                        options: ["Number Systems", "Gates", "K-Maps"]
                    },
                    {
                        id: 3,
                        title: "Engineering Mathematics",
                        description: "Discrete math, probability, linear algebra",
                        completed: false,
                        hasResource: true,
                        options: ["Sets & Relations", "Graphs", "Probability"]
                    }
                ]
            },
            {
                id: 2,
                title: "Phase 2: Core Subjects (Months 4-6)",
                subtitle: "Master the important topics",
                steps: [
                    {
                        id: 4,
                        title: "Operating Systems",
                        description: "Processes, memory management, file systems",
                        completed: false,
                        hasResource: true,
                        options: ["Process Scheduling", "Deadlocks", "Virtual Memory"]
                    },
                    {
                        id: 5,
                        title: "Database Management",
                        description: "SQL, normalization, transactions",
                        completed: false,
                        hasResource: true,
                        options: ["ER Diagrams", "SQL Queries", "Normalization"]
                    },
                    {
                        id: 6,
                        title: "Computer Networks",
                        description: "OSI model, TCP/IP, protocols",
                        completed: false,
                        hasResource: true,
                        options: ["Layers", "Routing", "Transport Layer"]
                    },
                    {
                        id: 7,
                        title: "Algorithms",
                        description: "Sorting, searching, graph algorithms",
                        completed: false,
                        hasResource: true,
                        options: ["Greedy", "DP", "Graph Algorithms"]
                    }
                ]
            },
            {
                id: 3,
                title: "Phase 3: Practice & Revision (Months 7-9)",
                subtitle: "Mock tests and problem solving",
                steps: [
                    {
                        id: 8,
                        title: "Previous Year Papers",
                        description: "Solve last 15 years GATE papers",
                        completed: false,
                        hasResource: true,
                        options: ["Topic-wise", "Year-wise", "Analysis"]
                    },
                    {
                        id: 9,
                        title: "Full Mock Tests",
                        description: "Simulate exam conditions",
                        completed: false,
                        hasResource: true,
                        options: ["Weekly Tests", "Performance Analysis", "Time Management"]
                    },
                    {
                        id: 10,
                        title: "Formula Revision",
                        description: "Quick revision sheets for all subjects",
                        completed: false,
                        hasResource: true,
                        options: ["Short Notes", "Important Formulas", "Quick Tips"]
                    }
                ]
            }
        ]
    },

    dsa: {
        cardTitle: "DSA & Programming Basics",
        roadmapTitle: "Data Structures & Algorithms - Complete Beginners Roadmap",
        icon: "🧠",
        color: "#B24BF3",
        description: "Start from ABSOLUTE ZERO and master programming fundamentals, data structures, and algorithms. Every single concept explained in simple terms with examples.",
        sections: [
            {
                id: 1,
                title: "Phase 0: Programming Basics (Week 1-2)",
                subtitle: "Learn the foundation before coding",
                steps: [
                    {
                        id: 1,
                        title: "What is Programming?",
                        description: "Understand what programming is and why we need it",
                        completed: false,
                        hasResource: true,
                        options: ["Computer Programs", "How Computers Work", "Algorithms"]
                    },
                    {
                        id: 2,
                        title: "Choose Your First Language",
                        description: "Pick one language to start your journey",
                        completed: false,
                        hasResource: true,
                        options: ["Python", "Java", "C++", "JavaScript"]
                    },
                    {
                        id: 3,
                        title: "Setup Development Environment",
                        description: "Install tools to start coding",
                        completed: false,
                        hasResource: true,
                        options: ["Install IDE", "First Program", "Run Code"]
                    }
                ]
            },
            {
                id: 2,
                title: "Phase 1: Variables & Data Types (Week 3-4)",
                subtitle: "The building blocks of programming",
                steps: [
                    {
                        id: 4,
                        title: "Understanding Variables",
                        description: "Learn what variables are and how to use them",
                        completed: false,
                        hasResource: true,
                        options: ["Variable Naming", "Creating Variables", "Changing Values"]
                    },
                    {
                        id: 5,
                        title: "Data Types",
                        description: "Integers, floats, strings, and booleans",
                        completed: false,
                        hasResource: true,
                        options: ["Integer", "Float", "String", "Boolean"]
                    }
                ]
            },
            {
                id: 3,
                title: "Phase 2: Input & Output (Week 5)",
                subtitle: "Communicating with users",
                steps: [
                    {
                        id: 6,
                        title: "Printing Output",
                        description: "Show results on the screen",
                        completed: false,
                        hasResource: true,
                        options: ["Basic Print", "Format Strings", "Multiple Values"]
                    },
                    {
                        id: 7,
                        title: "Taking Input",
                        description: "Read data that users type",
                        completed: false,
                        hasResource: true,
                        options: ["Text Input", "Number Input", "Type Conversion"]
                    }
                ]
            },
            {
                id: 4,
                title: "Phase 3: Operators (Week 6)",
                subtitle: "Performing calculations and comparisons",
                steps: [
                    {
                        id: 8,
                        title: "Arithmetic Operators",
                        description: "Addition, subtraction, multiplication, division",
                        completed: false,
                        hasResource: true,
                        options: ["+", "-", "*", "/", "%", "**"]
                    },
                    {
                        id: 9,
                        title: "Comparison Operators",
                        description: "Compare values and get True or False",
                        completed: false,
                        hasResource: true,
                        options: ["==", "!=", ">", "<", ">=", "<="]
                    }
                ]
            },
            {
                id: 5,
                title: "Phase 4: Control Flow (Week 7-8)",
                subtitle: "Making decisions in your code",
                steps: [
                    {
                        id: 10,
                        title: "If Statements",
                        description: "Execute code based on conditions",
                        completed: false,
                        hasResource: true,
                        options: ["if", "if-else", "if-elif-else", "Nested if"]
                    }
                ]
            },
            {
                id: 6,
                title: "Phase 5: Loops (Week 9-10)",
                subtitle: "Repeating code multiple times",
                steps: [
                    {
                        id: 11,
                        title: "For Loop",
                        description: "Repeat a fixed number of times",
                        completed: false,
                        hasResource: true,
                        options: ["range()", "List iteration", "Step values"]
                    },
                    {
                        id: 12,
                        title: "While Loop",
                        description: "Repeat until condition is false",
                        completed: false,
                        hasResource: true,
                        options: ["Basic while", "break", "continue"]
                    }
                ]
            },
            {
                id: 7,
                title: "Phase 6: Arrays & Lists (Week 11-12)",
                subtitle: "Storing multiple values",
                steps: [
                    {
                        id: 13,
                        title: "Understanding Lists",
                        description: "Store multiple values in one variable",
                        completed: false,
                        hasResource: true,
                        options: ["Creating Lists", "Indexing", "Modifying", "Adding", "Removing"]
                    },
                    {
                        id: 14,
                        title: "List Operations",
                        description: "Useful operations with lists",
                        completed: false,
                        hasResource: true,
                        options: ["len()", "sort()", "count()", "index()"]
                    }
                ]
            },
            {
                id: 8,
                title: "Phase 7: Strings (Week 13)",
                subtitle: "Working with text",
                steps: [
                    {
                        id: 15,
                        title: "Understanding Strings",
                        description: "Strings are sequences of characters",
                        completed: false,
                        hasResource: true,
                        options: ["Indexing", "Slicing", "Methods", "Concatenation"]
                    }
                ]
            },
            {
                id: 9,
                title: "Phase 8: Functions (Week 14-15)",
                subtitle: "Reusable blocks of code",
                steps: [
                    {
                        id: 16,
                        title: "Understanding Functions",
                        description: "Write code once, use it many times",
                        completed: false,
                        hasResource: true,
                        options: ["Define Function", "Parameters", "Return Values", "Default Values"]
                    }
                ]
            }
        ]
    },

    webdev: {
        cardTitle: "Web Development",
        roadmapTitle: "Web Development for Complete Beginners",
        icon: "💻",
        color: "#00FFA3",
        description: "Learn to build websites from scratch. Start with HTML basics, then CSS for styling, then JavaScript for interactivity.",
        sections: [
            {
                id: 1,
                title: "Phase 1: HTML Basics (Week 1-3)",
                subtitle: "The structure of websites",
                steps: [
                    {
                        id: 1,
                        title: "Understanding HTML",
                        description: "The foundation of all websites",
                        completed: false,
                        hasResource: true,
                        options: ["What is HTML?", "HTML Tags", "Document Structure"]
                    },
                    {
                        id: 2,
                        title: "Common HTML Tags",
                        description: "Tags you'll use most frequently",
                        completed: false,
                        hasResource: true,
                        options: ["Headings", "Paragraphs", "Links", "Images", "Lists"]
                    },
                    {
                        id: 3,
                        title: "HTML Forms",
                        description: "Create interactive forms",
                        completed: false,
                        hasResource: true,
                        options: ["Input Fields", "Buttons", "Dropdowns", "Checkboxes"]
                    }
                ]
            },
            {
                id: 2,
                title: "Phase 2: CSS Basics (Week 4-6)",
                subtitle: "Making websites look beautiful",
                steps: [
                    {
                        id: 4,
                        title: "Understanding CSS",
                        description: "The styling language for websites",
                        completed: false,
                        hasResource: true,
                        options: ["CSS Syntax", "Selectors", "Properties"]
                    },
                    {
                        id: 5,
                        title: "CSS Properties",
                        description: "Style your HTML elements",
                        completed: false,
                        hasResource: true,
                        options: ["Colors", "Fonts", "Spacing", "Borders", "Backgrounds"]
                    },
                    {
                        id: 6,
                        title: "CSS Layout",
                        description: "Position elements on the page",
                        completed: false,
                        hasResource: true,
                        options: ["Flexbox", "Grid", "Positioning"]
                    }
                ]
            },
            {
                id: 3,
                title: "Phase 3: JavaScript Basics (Week 7-10)",
                subtitle: "Adding interactivity",
                steps: [
                    {
                        id: 7,
                        title: "JavaScript Fundamentals",
                        description: "Learn programming with JavaScript",
                        completed: false,
                        hasResource: true,
                        options: ["Variables", "Functions", "Events"]
                    },
                    {
                        id: 8,
                        title: "DOM Manipulation",
                        description: "Change HTML with JavaScript",
                        completed: false,
                        hasResource: true,
                        options: ["Select Elements", "Change Content", "Add Classes"]
                    },
                    {
                        id: 9,
                        title: "Build Your First Project",
                        description: "Create a simple interactive website",
                        completed: false,
                        hasResource: true,
                        options: ["To-Do List", "Calculator", "Quiz App"]
                    }
                ]
            }
        ]
    },

    aiml: {
        cardTitle: "AI & Machine Learning",
        roadmapTitle: "AI & ML Fundamentals for Beginners",
        icon: "🤖",
        color: "#FF6B9D",
        description: "Start your journey in Artificial Intelligence and Machine Learning. Learn Python, statistics, and build your first ML models.",
        sections: [
            {
                id: 1,
                title: "Phase 1: Python for ML (Week 1-3)",
                subtitle: "Programming foundation",
                steps: [
                    {
                        id: 1,
                        title: "Python Basics",
                        description: "Learn Python programming",
                        completed: false,
                        hasResource: true,
                        options: ["Variables", "Loops", "Functions", "Lists"]
                    },
                    {
                        id: 2,
                        title: "NumPy Fundamentals",
                        description: "Arrays and numerical computing",
                        completed: false,
                        hasResource: true,
                        options: ["Arrays", "Operations", "Broadcasting"]
                    },
                    {
                        id: 3,
                        title: "Pandas for Data",
                        description: "Data manipulation and analysis",
                        completed: false,
                        hasResource: true,
                        options: ["DataFrames", "Reading Data", "Data Cleaning"]
                    }
                ]
            },
            {
                id: 2,
                title: "Phase 2: Mathematics for ML (Week 4-6)",
                subtitle: "Essential math concepts",
                steps: [
                    {
                        id: 4,
                        title: "Statistics Basics",
                        description: "Mean, median, standard deviation",
                        completed: false,
                        hasResource: true,
                        options: ["Descriptive Stats", "Probability", "Distributions"]
                    },
                    {
                        id: 5,
                        title: "Linear Algebra",
                        description: "Vectors and matrices",
                        completed: false,
                        hasResource: true,
                        options: ["Vectors", "Matrices", "Operations"]
                    }
                ]
            },
            {
                id: 3,
                title: "Phase 3: Machine Learning Basics (Week 7-12)",
                subtitle: "Your first ML models",
                steps: [
                    {
                        id: 6,
                        title: "Supervised Learning",
                        description: "Learn from labeled data",
                        completed: false,
                        hasResource: true,
                        options: ["Linear Regression", "Classification", "Decision Trees"]
                    },
                    {
                        id: 7,
                        title: "Model Evaluation",
                        description: "Measure model performance",
                        completed: false,
                        hasResource: true,
                        options: ["Accuracy", "Precision", "Recall", "F1 Score"]
                    },
                    {
                        id: 8,
                        title: "Your First ML Project",
                        description: "Build and deploy a model",
                        completed: false,
                        hasResource: true,
                        options: ["House Price Prediction", "Iris Classification", "Spam Detection"]
                    }
                ]
            }
        ]
    },

    datascience: {
        cardTitle: "Data Science",
        roadmapTitle: "Data Science Complete Beginner Path",
        icon: "📊",
        color: "#FFA500",
        description: "Learn data analysis, visualization, and statistical thinking. From Excel to Python, become a data-driven decision maker.",
        sections: [
            {
                id: 1,
                title: "Phase 1: Data Analysis Basics (Week 1-4)",
                subtitle: "Understanding data",
                steps: [
                    {
                        id: 1,
                        title: "Excel for Data Analysis",
                        description: "Master spreadsheets and formulas",
                        completed: false,
                        hasResource: true,
                        options: ["Formulas", "Pivot Tables", "Charts", "Data Cleaning"]
                    },
                    {
                        id: 2,
                        title: "SQL Fundamentals",
                        description: "Query databases effectively",
                        completed: false,
                        hasResource: true,
                        options: ["SELECT", "WHERE", "JOIN", "GROUP BY"]
                    },
                    {
                        id: 3,
                        title: "Statistics Foundation",
                        description: "Statistical thinking and methods",
                        completed: false,
                        hasResource: true,
                        options: ["Mean/Median", "Correlation", "Hypothesis Testing"]
                    }
                ]
            },
            {
                id: 2,
                title: "Phase 2: Python for Data Science (Week 5-8)",
                subtitle: "Programming for analysis",
                steps: [
                    {
                        id: 4,
                        title: "Python Basics",
                        description: "Learn Python programming",
                        completed: false,
                        hasResource: true,
                        options: ["Variables", "Functions", "Libraries"]
                    },
                    {
                        id: 5,
                        title: "Pandas & NumPy",
                        description: "Data manipulation libraries",
                        completed: false,
                        hasResource: true,
                        options: ["DataFrames", "Operations", "Aggregations"]
                    },
                    {
                        id: 6,
                        title: "Data Visualization",
                        description: "Create meaningful charts",
                        completed: false,
                        hasResource: true,
                        options: ["Matplotlib", "Seaborn", "Plotly"]
                    }
                ]
            },
            {
                id: 3,
                title: "Phase 3: Real Projects (Week 9-12)",
                subtitle: "Apply your skills",
                steps: [
                    {
                        id: 7,
                        title: "Exploratory Data Analysis",
                        description: "Analyze real datasets",
                        completed: false,
                        hasResource: true,
                        options: ["Data Cleaning", "Insights", "Visualization"]
                    },
                    {
                        id: 8,
                        title: "Dashboard Creation",
                        description: "Build interactive dashboards",
                        completed: false,
                        hasResource: true,
                        options: ["Tableau", "Power BI", "Streamlit"]
                    },
                    {
                        id: 9,
                        title: "Capstone Project",
                        description: "Complete end-to-end project",
                        completed: false,
                        hasResource: true,
                        options: ["Sales Analysis", "Customer Segmentation", "Trend Analysis"]
                    }
                ]
            }
        ]
    },

    java: {
        cardTitle: "Java Programming",
        roadmapTitle: "Java from Basics to Advanced",
        icon: "☕",
        color: "#E07A5F",
        description: "Master Java programming from scratch. Learn OOP concepts, build applications, and prepare for enterprise development.",
        sections: [
            {
                id: 1,
                title: "Phase 1: Java Basics (Week 1-3)",
                subtitle: "Getting started with Java",
                steps: [
                    {
                        id: 1,
                        title: "Setup & First Program",
                        description: "Install JDK and write Hello World",
                        completed: false,
                        hasResource: true,
                        options: ["Install JDK", "Setup IDE", "First Program"]
                    },
                    {
                        id: 2,
                        title: "Variables & Data Types",
                        description: "Primitive types and operators",
                        completed: false,
                        hasResource: true,
                        options: ["int", "double", "String", "boolean"]
                    },
                    {
                        id: 3,
                        title: "Control Flow",
                        description: "If-else, loops, switch",
                        completed: false,
                        hasResource: true,
                        options: ["if-else", "for loop", "while loop", "switch"]
                    }
                ]
            },
            {
                id: 2,
                title: "Phase 2: Object-Oriented Programming (Week 4-6)",
                subtitle: "Master OOP concepts",
                steps: [
                    {
                        id: 4,
                        title: "Classes & Objects",
                        description: "Create your own classes",
                        completed: false,
                        hasResource: true,
                        options: ["Class Definition", "Objects", "Methods", "Constructors"]
                    },
                    {
                        id: 5,
                        title: "Inheritance",
                        description: "Reuse code with inheritance",
                        completed: false,
                        hasResource: true,
                        options: ["Extends", "Super", "Method Overriding"]
                    },
                    {
                        id: 6,
                        title: "Polymorphism & Abstraction",
                        description: "Advanced OOP concepts",
                        completed: false,
                        hasResource: true,
                        options: ["Interfaces", "Abstract Classes", "Polymorphism"]
                    }
                ]
            },
            {
                id: 3,
                title: "Phase 3: Collections & Projects (Week 7-10)",
                subtitle: "Build real applications",
                steps: [
                    {
                        id: 7,
                        title: "Collections Framework",
                        description: "ArrayList, HashMap, HashSet",
                        completed: false,
                        hasResource: true,
                        options: ["List", "Set", "Map", "Queue"]
                    },
                    {
                        id: 8,
                        title: "Exception Handling",
                        description: "Handle errors gracefully",
                        completed: false,
                        hasResource: true,
                        options: ["try-catch", "throw", "finally"]
                    },
                    {
                        id: 9,
                        title: "Build Projects",
                        description: "Create real-world applications",
                        completed: false,
                        hasResource: true,
                        options: ["Library System", "Bank Application", "Student Management"]
                    }
                ]
            }
        ]
    },

    python: {
        cardTitle: "Python Programming",
        roadmapTitle: "Python - From Beginner to Professional",
        icon: "🐍",
        color: "#3776AB",
        description: "Learn Python programming from absolute basics to advanced concepts. Build projects, automate tasks, and prepare for data science or web development.",
        sections: [
            {
                id: 1,
                title: "Phase 1: Python Fundamentals (Week 1-3)",
                subtitle: "Start your Python journey",
                steps: [
                    {
                        id: 1,
                        title: "Setup & Basics",
                        description: "Install Python and write your first program",
                        completed: false,
                        hasResource: true,
                        options: ["Install Python", "Variables", "Print", "Input"]
                    },
                    {
                        id: 2,
                        title: "Data Types",
                        description: "Numbers, strings, booleans",
                        completed: false,
                        hasResource: true,
                        options: ["int", "float", "str", "bool"]
                    },
                    {
                        id: 3,
                        title: "Control Flow",
                        description: "If-else and loops",
                        completed: false,
                        hasResource: true,
                        options: ["if-else", "for loop", "while loop"]
                    }
                ]
            },
            {
                id: 2,
                title: "Phase 2: Data Structures (Week 4-6)",
                subtitle: "Lists, dictionaries, and more",
                steps: [
                    {
                        id: 4,
                        title: "Lists & Tuples",
                        description: "Store multiple values",
                        completed: false,
                        hasResource: true,
                        options: ["Lists", "Tuples", "List Methods", "Slicing"]
                    },
                    {
                        id: 5,
                        title: "Dictionaries & Sets",
                        description: "Key-value pairs and unique values",
                        completed: false,
                        hasResource: true,
                        options: ["Dictionaries", "Sets", "Methods"]
                    },
                    {
                        id: 6,
                        title: "Functions",
                        description: "Reusable code blocks",
                        completed: false,
                        hasResource: true,
                        options: ["Define Functions", "Parameters", "Return", "Lambda"]
                    }
                ]
            },
            {
                id: 3,
                title: "Phase 3: Advanced Concepts (Week 7-10)",
                subtitle: "OOP and file handling",
                steps: [
                    {
                        id: 7,
                        title: "Object-Oriented Programming",
                        description: "Classes and objects",
                        completed: false,
                        hasResource: true,
                        options: ["Classes", "Objects", "Inheritance", "Methods"]
                    },
                    {
                        id: 8,
                        title: "File Handling",
                        description: "Read and write files",
                        completed: false,
                        hasResource: true,
                        options: ["Open Files", "Read", "Write", "CSV Files"]
                    },
                    {
                        id: 9,
                        title: "Projects",
                        description: "Build real applications",
                        completed: false,
                        hasResource: true,
                        options: ["Calculator", "To-Do App", "Web Scraper", "Automation"]
                    }
                ]
            }
        ]
    }
};

// Create a safe accessor that returns a default placeholder for missing keys
const initialRoadmapsData = new Proxy(rawRoadmapsData, {
    get(target, prop, receiver) {
        if (typeof prop === 'symbol') {
            return Reflect.get(target, prop, receiver);
        }
        if (prop in target) {
            return Reflect.get(target, prop, receiver);
            }
        return {
            cardTitle: "Coming Soon",
            roadmapTitle: "Coming Soon",
            icon: "📘",
            color: "#9CA3AF",
            description: "Content will be added soon.",
            sections: []
        };
    }
});

// Export the ultra detailed data
export { initialRoadmapsData };