// Web Development Roadmap Data - Complete Full Stack Path
export const webdev = {
    cardTitle: "Web Development",
    roadmapTitle: "Full Stack Web Development - Complete Roadmap",
    icon: "💻",
    color: "#00FFA3",
    description: "Master full stack web development from absolute basics to production-ready applications. Cover HTML, CSS, JavaScript, React, Node.js, databases, and advanced concepts like WebSockets, testing, and scalable architectures.",
    sections: [
        // ============================================================================
        // BEGINNER LEVEL
        // ============================================================================
        {
            id: 1,
            title: "Foundations - HTML, CSS & Git",
            subtitle: "Beginner: The building blocks of the web",
            steps: [
                {
                    id: 1,
                    title: "HTML Fundamentals",
                    description: "Learn the structure of web pages with semantic HTML",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=kUMe1FH4aHM",
                    options: ["Document Structure", "Semantic Tags", "Forms", "Tables", "Accessibility"]
                },
                {
                    id: 2,
                    title: "CSS Fundamentals",
                    description: "Style your web pages with CSS",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=yfoY53QXEnI",
                    options: ["Selectors", "Box Model", "Flexbox", "Grid", "Responsive Design"]
                },
                {
                    id: 3,
                    title: "Bash Basics",
                    description: "Essential terminal commands for developers",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=I4EWvMFj37g",
                    options: ["cd, ls, pwd", "mkdir, touch", "vi/nano basics", "File navigation"]
                },
                {
                    id: 4,
                    title: "Git & GitHub",
                    description: "Version control for collaborative development",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=RGOj5yH7evk",
                    options: ["Git init, add, commit", "Branches", "Pull Requests", "GitHub workflows"]
                }
            ]
        },
        {
            id: 2,
            title: "JavaScript Fundamentals",
            subtitle: "Beginner: Programming the web",
            steps: [
                {
                    id: 5,
                    title: "JS Introduction & Single Threaded Nature",
                    description: "Understand how JavaScript works under the hood",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
                    options: ["Variables", "Data Types", "Operators", "Single Thread Execution"]
                },
                {
                    id: 6,
                    title: "Common JS Array Methods",
                    description: "Master essential JavaScript array methods",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=R8rmfD9Y5-c",
                    options: ["map()", "filter()", "reduce()", "Object.keys()", "forEach()"]
                },
                {
                    id: 7,
                    title: "Async JavaScript & Event Loop",
                    description: "Understand asynchronous programming in JS",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=8aGhZQkoFbQ",
                    options: ["Callbacks", "Callback Queue", "Event Loop", "setTimeout/setInterval"]
                },
                {
                    id: 8,
                    title: "Promises & Async/Await",
                    description: "Modern async patterns in JavaScript",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=DHvZLI7Db8E",
                    options: ["Creating Promises", "Promise.all()", "Promise.race()", "async/await"]
                }
            ]
        },
        {
            id: 3,
            title: "DOM Manipulation & Simple Frontend",
            subtitle: "Beginner: Building interactive web pages",
            steps: [
                {
                    id: 9,
                    title: "Intro to DOM & Tree Structure",
                    description: "Understand the Document Object Model",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=0ik6X4DJKCc",
                    options: ["DOM Tree", "Nodes", "Parent/Child relationships", "Document object"]
                },
                {
                    id: 10,
                    title: "Common DOM APIs",
                    description: "Select and manipulate HTML elements",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=y17RuWkWdn8",
                    options: ["getElementById", "querySelector", "innerHTML", "getAttribute/setAttribute"]
                },
                {
                    id: 11,
                    title: "Event Handlers",
                    description: "Handle user interactions on web pages",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=XF1_MlZ5l6M",
                    options: ["onClick", "addEventListener", "Event bubbling", "stopPropagation"]
                },
                {
                    id: 12,
                    title: "localStorage & Dynamic Frontends",
                    description: "Persist data and create dynamic UIs",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=k8yJCeuP6I8",
                    options: ["localStorage API", "JSON parse/stringify", "DOM Manipulation", "Dynamic rendering"]
                }
            ]
        },
        {
            id: 4,
            title: "🔨 Project: Todo App with DOM",
            subtitle: "Beginner Project: Apply your skills",
            steps: [
                {
                    id: 13,
                    title: "Build a Pure Frontend TODO App",
                    description: "Create a complete TODO application using DOM manipulation",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=Ttf3CEsEwMQ",
                    options: ["Add/Delete Tasks", "Mark Complete", "Filter Tasks", "localStorage Persistence"]
                }
            ]
        },
        {
            id: 5,
            title: "JavaScript Runtimes - Node.js & Beyond",
            subtitle: "Beginner: Running JS outside the browser",
            steps: [
                {
                    id: 14,
                    title: "What is a JS Runtime?",
                    description: "Understand JavaScript execution environments",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=ENrzD9HAZK4",
                    options: ["V8 Engine", "Node.js", "Bun", "Deno", "Cloudflare Workers"]
                },
                {
                    id: 15,
                    title: "Node.js Installation & Common APIs",
                    description: "Set up Node.js and learn core modules",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=TlB_eWDSMt4",
                    options: ["npm/npx", "fs module", "path module", "process object"]
                },
                {
                    id: 16,
                    title: "File System & HTTP APIs",
                    description: "Work with files and make HTTP requests",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
                    options: ["fs.readFile", "fs.writeFile", "fetch API", "axios vs fetch"]
                }
            ]
        },
        // ============================================================================
        // INTERMEDIATE LEVEL
        // ============================================================================
        {
            id: 6,
            title: "HTTP Servers & Express.js",
            subtitle: "Intermediate: Backend development begins",
            steps: [
                {
                    id: 17,
                    title: "What are HTTP Servers?",
                    description: "Understand client-server communication",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=iYM2zFP3Zn0",
                    options: ["HTTP Protocol", "Request/Response", "IPs & Domains", "Ports"]
                },
                {
                    id: 18,
                    title: "HTTP Methods, Routes & URLs",
                    description: "RESTful API design principles",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=SLwpqD8n3d0",
                    options: ["GET, POST, PUT, DELETE", "URL Parameters", "Query Strings", "Headers & Body"]
                },
                {
                    id: 19,
                    title: "Express.js Fundamentals",
                    description: "Build your first Express backend",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=Oe421EPjeBE",
                    options: ["Creating Routes", "Request/Response objects", "JSON responses", "Static files"]
                },
                {
                    id: 20,
                    title: "Middlewares in Express",
                    description: "Extend Express functionality with middlewares",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=lY6icfhap2o",
                    options: ["Built-in middlewares", "Custom middlewares", "Error handling", "Third-party middlewares"]
                },
                {
                    id: 21,
                    title: "Authentication with JWTs",
                    description: "Secure your APIs with JSON Web Tokens",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=mbsmsi7l3r4",
                    options: ["JWT basics", "Sign & Verify", "Protected routes", "Secret management"]
                }
            ]
        },
        {
            id: 7,
            title: "NoSQL Databases - MongoDB",
            subtitle: "Intermediate: Storing data the flexible way",
            steps: [
                {
                    id: 22,
                    title: "Intro to Databases",
                    description: "Why we need databases and how they work",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=W2Z7fbCLSTw",
                    options: ["What is a Database?", "CRUD Operations", "Data modeling basics"]
                },
                {
                    id: 23,
                    title: "SQL vs NoSQL",
                    description: "Choose the right database for your project",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=ZS_kXvOeQ5Y",
                    options: ["Structured vs Flexible", "When to use SQL", "When to use NoSQL"]
                },
                {
                    id: 24,
                    title: "MongoDB & Mongoose",
                    description: "Work with MongoDB using Mongoose ODM",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=DZBGEVgL2eE",
                    options: ["MongoDB Atlas", "Mongoose Schemas", "CRUD with Mongoose", "Validation"]
                },
                {
                    id: 25,
                    title: "Relationships & Aggregations",
                    description: "Advanced MongoDB patterns",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=ofme2o29ngU",
                    options: ["Embedding vs Referencing", "Populate", "Aggregation Pipeline"]
                }
            ]
        },
        {
            id: 8,
            title: "SQL Databases - PostgreSQL",
            subtitle: "Intermediate: Structured data with SQL",
            steps: [
                {
                    id: 26,
                    title: "PostgreSQL Introduction",
                    description: "Get started with PostgreSQL",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=qw--VYLpxG4",
                    options: ["Setting up Postgres", "psql CLI", "pgAdmin", "Cloud databases"]
                },
                {
                    id: 27,
                    title: "SQL Schemas & Tables",
                    description: "Design your database structure",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=HXV3zeQKqGY",
                    options: ["CREATE TABLE", "Data Types", "PRIMARY KEY", "FOREIGN KEY"]
                },
                {
                    id: 28,
                    title: "SQL Queries - CRUD",
                    description: "Master SQL query syntax",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=7S_tz1z_5bA",
                    options: ["SELECT", "INSERT", "UPDATE", "DELETE", "WHERE clauses"]
                },
                {
                    id: 29,
                    title: "Joins, Indexes & Transactions",
                    description: "Advanced SQL concepts",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=Yh4CrPHVBdE",
                    options: ["INNER/LEFT/RIGHT JOIN", "Indexes", "Transactions", "ACID properties"]
                }
            ]
        },
        {
            id: 9,
            title: "ORMs - Prisma & Drizzle",
            subtitle: "Intermediate: Type-safe database access",
            steps: [
                {
                    id: 30,
                    title: "Intro to ORMs",
                    description: "Why use an ORM over raw SQL?",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=3Pxj-4IrxXQ",
                    options: ["ORM benefits", "Type safety", "Migrations", "Popular ORMs"]
                },
                {
                    id: 31,
                    title: "Prisma Fundamentals",
                    description: "Modern database toolkit for Node.js",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=RebA5J-rlwg",
                    options: ["Schema definition", "Prisma Client", "CRUD operations", "Migrations"]
                },
                {
                    id: 32,
                    title: "Prisma Relationships & Transactions",
                    description: "Advanced Prisma patterns",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=E37-33M6Ypk",
                    options: ["One-to-Many", "Many-to-Many", "Transactions", "Nested writes"]
                }
            ]
        },
        {
            id: 10,
            title: "React Fundamentals",
            subtitle: "Intermediate: Modern frontend development",
            steps: [
                {
                    id: 33,
                    title: "Why Frontend Frameworks?",
                    description: "Understanding the need for React",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=s2skans2dP4",
                    options: ["DOM limitations", "Component model", "Declarative UI", "Virtual DOM"]
                },
                {
                    id: 34,
                    title: "React Components & JSX",
                    description: "Building blocks of React applications",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=bMknfKXIFA8",
                    options: ["Functional Components", "JSX syntax", "Props", "Component composition"]
                },
                {
                    id: 35,
                    title: "useState & useEffect",
                    description: "Managing state and side effects",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=O6P86uwfdR0",
                    options: ["useState hook", "useEffect hook", "Dependencies", "Cleanup functions"]
                },
                {
                    id: 36,
                    title: "React Router & Navigation",
                    description: "Client-side routing in React",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=Ul3y1LXxzdU",
                    options: ["Routes", "Link component", "useNavigate", "URL parameters"]
                },
                {
                    id: 37,
                    title: "Connecting Frontend to Backend",
                    description: "Full stack integration",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=0d7cIfiydAc",
                    options: ["fetch/axios", "useEffect for API calls", "Loading states", "Error handling"]
                }
            ]
        },
        {
            id: 11,
            title: "Advanced React Hooks & State Management",
            subtitle: "Intermediate: Scaling React applications",
            steps: [
                {
                    id: 38,
                    title: "useRef, useMemo & useCallback",
                    description: "Performance optimization hooks",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=LlvBzyy-558",
                    options: ["useRef for DOM access", "useMemo", "useCallback", "When to optimize"]
                },
                {
                    id: 39,
                    title: "Custom Hooks",
                    description: "Extract and reuse stateful logic",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=6ThXsUwLWvc",
                    options: ["Creating custom hooks", "useFetch", "useLocalStorage", "Best practices"]
                },
                {
                    id: 40,
                    title: "Context API & State Management",
                    description: "Global state without prop drilling",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=5LrDIWkK_Bc",
                    options: ["Context API", "useContext", "Recoil atoms", "Zustand"]
                }
            ]
        },
        {
            id: 12,
            title: "Styling React Apps",
            subtitle: "Intermediate: Beautiful UI development",
            steps: [
                {
                    id: 41,
                    title: "CSS in React & Component Libraries",
                    description: "Different approaches to styling",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=ouncVBiye_M",
                    options: ["CSS Modules", "Material UI", "Chakra UI"]
                },
                {
                    id: 42,
                    title: "Tailwind CSS",
                    description: "Utility-first CSS framework",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=UBOj6rqRUME",
                    options: ["Utility classes", "Responsive design", "Custom config", "Dark mode"]
                },
                {
                    id: 43,
                    title: "shadcn/ui",
                    description: "Re-usable components built with Radix UI and Tailwind CSS",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=7MKEOfSP2s4",
                    options: ["Component installation", "Theming", "Customization", "Best practices"]
                }
            ]
        },
        {
            id: 13,
            title: "TypeScript",
            subtitle: "Intermediate: Type-safe JavaScript",
            steps: [
                {
                    id: 44,
                    title: "TypeScript vs JavaScript",
                    description: "Why TypeScript and getting started",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=BCg4U1FzODs",
                    options: ["Why TS?", "Setup", "Compilation", "tsconfig"]
                },
                {
                    id: 45,
                    title: "Types & Interfaces",
                    description: "Core TypeScript concepts",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=d56mG7DezGs",
                    options: ["Basic types", "Interfaces", "Type aliases", "Union types"]
                },
                {
                    id: 46,
                    title: "Advanced TypeScript",
                    description: "Utility types and advanced patterns",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=dLPgQRbVquo",
                    options: ["Generics", "Partial", "Omit", "Pick", "Exclude"]
                }
            ]
        },
        {
            id: 14,
            title: "🔨 Projects: Gmail Clone & Excalidraw",
            subtitle: "Intermediate Projects: Real-world applications",
            steps: [
                {
                    id: 47,
                    title: "Build Gmail Clone (Frontend)",
                    description: "Complex UI with React",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=b7nrXjS6Dqs",
                    options: ["Email list UI", "Compose modal", "Sidebar navigation", "Search functionality"]
                },
                {
                    id: 48,
                    title: "Build Excalidraw Clone (Full Stack)",
                    description: "Real-time collaborative whiteboard",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=6aruWuTFIyM",
                    options: ["Canvas API", "Drawing tools", "Real-time sync", "Backend integration"]
                }
            ]
        },
        // ============================================================================
        // ADVANCED LEVEL
        // ============================================================================
        {
            id: 15,
            title: "Next.js - The React Framework",
            subtitle: "Advanced: Production-ready React",
            steps: [
                {
                    id: 49,
                    title: "Why Next.js & SSR vs CSR",
                    description: "Understanding server-side rendering",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=Sklc_fQBmcs",
                    options: ["SSR benefits", "SSG", "CSR vs SSR", "Hydration"]
                },
                {
                    id: 50,
                    title: "File-based Routing & API Routes",
                    description: "Next.js routing system",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=843nec-IvW0",
                    options: ["Pages router", "App router", "Dynamic routes", "API routes"]
                },
                {
                    id: 51,
                    title: "SSG, ISR & Data Fetching",
                    description: "Static generation and data strategies",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=1WmNXEVia8I",
                    options: ["getStaticProps", "getServerSideProps", "ISR", "Server Components"]
                },
                {
                    id: 52,
                    title: "NextAuth & Middlewares",
                    description: "Authentication and request handling",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=w2h54xz6Ndw",
                    options: ["NextAuth setup", "Providers", "Cookie auth", "Middlewares"]
                }
            ]
        },
        {
            id: 16,
            title: "Monorepos & Developer Tooling",
            subtitle: "Advanced: Scaling codebases",
            steps: [
                {
                    id: 53,
                    title: "Linting: ESLint & Prettier",
                    description: "Code quality and formatting",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=St1YSNoB36Y",
                    options: ["ESLint setup", "Prettier", "Rules configuration", "VS Code integration"]
                },
                {
                    id: 54,
                    title: "Pre-commit Hooks & Husky",
                    description: "Automate code quality checks",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=oWty0Nw1ydk",
                    options: ["Husky setup", "lint-staged", "Pre-commit scripts", "CI integration"]
                },
                {
                    id: 55,
                    title: "Monorepos & Turborepo",
                    description: "Managing multiple packages",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=YQLw5kJ1yrQ",
                    options: ["What is a monorepo", "Yarn workspaces", "Turborepo", "Caching & optimization"]
                }
            ]
        },
        {
            id: 17,
            title: "WebSockets & Real-time Communication",
            subtitle: "Advanced: Building real-time apps",
            steps: [
                {
                    id: 56,
                    title: "WebSockets vs HTTP",
                    description: "Understanding real-time communication",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=1BfCnjr_Vjg",
                    options: ["One-way vs Two-way", "WebSocket protocol", "Use cases", "vs polling"]
                },
                {
                    id: 57,
                    title: "Building a WebSocket Server",
                    description: "Server-side WebSocket implementation",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=ZKEqqIO7n-k",
                    options: ["ws library", "Socket.io", "Event handling", "Broadcasting"]
                },
                {
                    id: 58,
                    title: "WebRTC & SFUs",
                    description: "Video/audio communication",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=WmR9IMUD_CY",
                    options: ["UDP vs TCP", "WebRTC basics", "Peer connections", "SFUs & Mediasoup"]
                }
            ]
        },
        {
            id: 18,
            title: "🔨 Projects: Chat App & Chess Game",
            subtitle: "Advanced Projects: Real-time applications",
            steps: [
                {
                    id: 59,
                    title: "Build a Real-time Chat App",
                    description: "WebSocket-based messaging application",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=jD7FnbI76Hg",
                    options: ["Socket.io integration", "Chat rooms", "User presence", "Message history"]
                },
                {
                    id: 60,
                    title: "Build a Real-time Chess Game",
                    description: "Multiplayer game with WebSockets",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=Ep_fYNJuwGs",
                    options: ["Game state sync", "Move validation", "Matchmaking", "Real-time updates"]
                }
            ]
        },
        {
            id: 19,
            title: "Testing",
            subtitle: "Advanced: Quality assurance",
            steps: [
                {
                    id: 61,
                    title: "Why Testing & Unit Tests",
                    description: "Introduction to testing strategies",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=r9HdJ8P6GQI",
                    options: ["Testing pyramid", "Jest", "Unit tests", "Test coverage"]
                },
                {
                    id: 62,
                    title: "Integration & E2E Tests",
                    description: "Testing complete user flows",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=lhL6y_fCzAk",
                    options: ["Integration tests", "Playwright", "Cypress", "E2E strategies"]
                }
            ]
        },
        {
            id: 20,
            title: "Advanced Backend Architecture",
            subtitle: "Advanced: Scaling to production",
            steps: [
                {
                    id: 63,
                    title: "Message Queues & Pub/Sub",
                    description: "Asynchronous communication patterns",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=oUJbuFMyBDk",
                    options: ["Redis queues", "Kafka", "RabbitMQ", "Use cases"]
                },
                {
                    id: 64,
                    title: "Scaling Servers",
                    description: "Handling high traffic",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=FqD81PnXxCc",
                    options: ["Load balancers", "Horizontal scaling", "Caching strategies", "CDNs"]
                },
                {
                    id: 65,
                    title: "Security & Best Practices",
                    description: "Protecting your applications",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=F-sFp_AvHc8",
                    options: ["Rate limiting", "CAPTCHA", "DDoS protection", "Input validation"]
                }
            ]
        },
        {
            id: 21,
            title: "Additional Topics & Tools",
            subtitle: "Advanced: Expanding your toolkit",
            steps: [
                {
                    id: 66,
                    title: "Zod & API Validation",
                    description: "Runtime type validation",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=L6BE-U3oy80",
                    options: ["Zod schemas", "API validation", "Error messages", "Integration with TS"]
                },
                {
                    id: 67,
                    title: "OpenAPI & Auto-generated Clients",
                    description: "API documentation and tooling",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=6kwmW_p_Tig",
                    options: ["OpenAPI spec", "Swagger", "Client generation", "API testing"]
                },
                {
                    id: 68,
                    title: "Serverless & Edge Computing",
                    description: "Modern deployment architectures",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=W_VV2Fx32_Y",
                    options: ["AWS Lambda", "Vercel", "Cloudflare Workers", "Edge functions"]
                },
                {
                    id: 69,
                    title: "gRPC & Advanced Protocols",
                    description: "High-performance APIs",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=gnchfOojMk4",
                    options: ["gRPC basics", "Protocol buffers", "vs REST", "Use cases"]
                }
            ]
        },
        {
            id: 22,
            title: "🔨 Capstone Projects",
            subtitle: "Advanced Projects: Production-ready applications",
            steps: [
                {
                    id: 70,
                    title: "Build LeetCode/Codeforces Clone",
                    description: "Complete coding platform",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=GJBUCWj8R4Y",
                    options: ["Code execution", "Problem management", "User submissions", "Leaderboards"]
                },
                {
                    id: 71,
                    title: "Scale Your Real-time App",
                    description: "Production deployment and scaling",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=OU6xOM0SE4o",
                    options: ["Horizontal scaling", "Database sharding", "Caching", "Monitoring"]
                }
            ]
        },
        {
            id: 23,
            title: "Auxiliary Stacks & BaaS",
            subtitle: "Advanced: Backend as a Service",
            steps: [
                {
                    id: 72,
                    title: "Firebase",
                    description: "Google's Backend as a Service",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=q5J5ho7YUhA",
                    options: ["Firestore", "Authentication", "Hosting", "Cloud Functions"]
                },
                {
                    id: 73,
                    title: "Strapi & Headless CMS",
                    description: "Content management for developers",
                    completed: false,
                    link: "https://www.youtube.com/watch?v=6FnwAbd2SDY",
                    options: ["Strapi setup", "Content types", "REST/GraphQL API", "Admin panel"]
                }
            ]
        }
    ]
};
