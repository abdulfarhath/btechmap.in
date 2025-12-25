export const hackathonData = [
    {
        title: "TIER 1: MAJOR CORPORATE HACKATHONS",
        period: "January - May 2026",
        description: "High-stakes competitions with massive prize pools and direct PPO/Internship opportunities.",
        color: "from-blue-600 to-indigo-600",
        events: [
            {
                id: "ms-imagine-cup",
                name: "Microsoft Imagine Cup 2026",
                organizer: "Microsoft (Global)",
                dates: "Sept 2025 – May 2026",
                deadline: "Jan 9, 2026",
                prize: "$100,000 USD + Azure Credits",
                type: "Global",
                internship: true,
                ppo: false,
                eligibility: "Students 18+, teams up to 4",
                link: "https://imaginecup.microsoft.com",
                tags: ["AI", "Cloud", "Open Source", "Global"],
                description: "Global visibility, direct mentorship from Microsoft engineers, and free Azure credits."
            },
            {
                id: "hackwithinfy",
                name: "HackWithInfy (Infosys)",
                organizer: "Infosys",
                dates: "April – August 2026",
                prize: "₹5.5 Lakhs (Total)",
                type: "India",
                internship: false,
                ppo: true,
                eligibility: "Graduating 2026–2027",
                link: "https://www.infosys.com/careers/hackwithinfy",
                tags: ["PPO", "Coding", "India"],
                description: "Largest off-campus hiring for Infosys. Round 1 in March. Top 100 go to Grand Finale."
            },
            {
                id: "gs-india",
                name: "Goldman Sachs India Hackathon",
                organizer: "Goldman Sachs",
                dates: "April – May 2026",
                prize: "Cash + Internship Opportunities",
                type: "India",
                internship: true,
                ppo: false,
                eligibility: "Graduating Dec 2026 – May 2027",
                link: "https://www.goldmansachs.com/careers/students/",
                tags: ["FinTech", "Quant", "CS"],
                description: "Direct finance sector pipeline with strong salary benchmarks for winners."
            },
            {
                id: "sih-2026",
                name: "Smart India Hackathon (SIH) 2026",
                organizer: "MoE & AICTE",
                dates: "March – April 2026 (Finale)",
                prize: "₹50+ Lakhs (Total)",
                type: "India (Nationwide)",
                internship: true,
                ppo: false,
                eligibility: "All disciplines, Team size 6 (Min 1 female)",
                link: "https://www.sih.gov.in",
                tags: ["Government", "Innovation", "Nationwide"],
                description: "India's largest innovation platform. Government problem statements. Internal college rounds in Feb-March."
            }
        ]
    },
    {
        title: "TIER 2: COMPANY-SPONSORED HACKATHONS",
        period: "June - September 2026",
        description: "Corporate challenges focused on hiring and solving industry-specific problems.",
        color: "from-purple-600 to-pink-600",
        events: [
            {
                id: "walmart-sparkathon",
                name: "Walmart Sparkathon 2026",
                organizer: "Walmart Global Tech",
                dates: "June – September 2026",
                prize: "₹2,90,000 (Winner)",
                type: "India",
                internship: true,
                ppo: true,
                eligibility: "Graduating 2026–2027 (3rd/4th Year)",
                link: "https://walmart.converge.tech/sparkathon",
                tags: ["Retail Tech", "Supply Chain", "High Stipend"],
                description: "₹1L/month stipend for interns. Focus on supply chain and emerging tech."
            },
            {
                id: "flipkart-grid",
                name: "Flipkart GRID 7.0",
                organizer: "Flipkart",
                dates: "Q2-Q3 2026 (TBA)",
                prize: "₹1+ Crore (Pool)",
                type: "India",
                internship: true,
                ppo: true,
                eligibility: "Batches 2026-2029",
                link: "https://mycareernet.in/flipkart-grid",
                tags: ["E-commerce", "SDE Hiring", "Flagship"],
                description: "Largest e-commerce hackathon. SDE 1 roles post-competition."
            },
            {
                id: "jpmc-cfg",
                name: "JPMorgan Chase Code for Good",
                organizer: "JPMorgan Chase",
                dates: "October – November 2026",
                prize: "$3,000+ per team",
                type: "Global",
                internship: true,
                ppo: true,
                eligibility: "Developers of all levels",
                link: "https://careers.jpmorgan.com/code-for-good",
                tags: ["Social Impact", "FinTech", "Global"],
                description: "Social impact focus. Strong internship pipeline."
            }
        ]
    },
    {
        title: "TIER 3: ACADEMIC & COLLEGE HACKATHONS",
        period: "January - March 2026",
        description: "Competitive events hosted by top institutions and incubators.",
        color: "from-amber-500 to-orange-500",
        events: [
            {
                id: "innovators-2026",
                name: "Innovators Hackathon 2026",
                organizer: "AIC T-Hub + NMIET",
                dates: "Jan 22–23, 2026",
                prize: "₹90,000 (Pool)",
                type: "India (On-site Pune)",
                internship: true,
                ppo: false,
                eligibility: "Students & Early Startups",
                link: "https://t-hub.co/innovators-hackathon-2026",
                tags: ["Incubation", "Robotics", "Startups"],
                description: "On-site 48hr hackathon. Prototyping support and T-Hub lab access."
            },
            {
                id: "eraksha-2026",
                name: "eRaksha Hackathon (Defence-AI)",
                organizer: "eDC IIT Delhi + CyberPeace",
                dates: "Jan 16–18, 2026",
                prize: "₹15+ Lakhs (Est.)",
                type: "India (On-site Delhi)",
                internship: false,
                ppo: false,
                eligibility: "Open",
                link: "https://www.cyberchallenge.in/eraksha",
                tags: ["Defence", "Cybersecurity", "AI"],
                description: "Focus on Defence AI, Deepfake detection, and IoT Security."
            },
            {
                id: "techelons-2026",
                name: "TECHELONS 2026",
                organizer: "PRPCEM Coding Club",
                dates: "Jan 19, 2026",
                prize: "₹2,05,000",
                type: "India (On-site Hyderabad)",
                internship: false,
                ppo: false,
                eligibility: "Students",
                link: "https://coding-club-prpcem.pages.dev/hackathon/hackathon26-main",
                tags: ["IoT", "Automation", "Low Cost"],
                description: "12-hour hackathon on Automation & Optimization."
            }
        ]
    },
    {
        title: "TIER 4: SPECIALIZED & GLOBAL",
        period: "February - December 2026",
        description: "Niche domains like Blockchain, Web3, and Luxury Tech.",
        color: "from-emerald-500 to-teal-500",
        events: [
            {
                id: "ethdenver-2026",
                name: "ETHDenver 2026",
                organizer: "Ethereum Foundation",
                dates: "Feb 18, 2026",
                prize: "Varies",
                type: "Global (On-site)",
                internship: false,
                ppo: false,
                eligibility: "Open",
                link: "https://www.ethdenver.com",
                tags: ["Web3", "Blockchain", "DeFi"],
                description: "Crypto/Web3 career launcher with VC presence."
            },
            {
                id: "mega-hack-2026",
                name: "MEGA Hackathon 2026",
                organizer: "MEGA League",
                dates: "Feb 28 – Mar 1, 2026",
                prize: "₹5-10 Lakhs (Est.)",
                type: "Global (Virtual)",
                internship: false,
                ppo: false,
                eligibility: "Students 18+",
                link: "https://devpost.com/hackathons?organization=MegaHackathonLeague",
                tags: ["Virtual", "Beginner Friendly"],
                description: "48-hour virtual event. Good for beginners."
            },
            {
                id: "loreal-brandstorm",
                name: "L'Oréal Brandstorm 2026",
                organizer: "L'Oréal Luxe",
                dates: "Ongoing 2026",
                prize: "Internship at Paris HQ",
                type: "Global",
                internship: true,
                ppo: false,
                eligibility: "Ages 18-30",
                link: "https://unstop.com/o/Q0FSGNq",
                tags: ["Luxury Tech", "Paris", "Innovation"],
                description: "Pitch at Paris HQ. 'Craft the Future of Luxury Fragrance'."
            },
            {
                id: "techfiesta-2026",
                name: "TechFiesta 2026",
                organizer: "PICT Pune",
                dates: "Q1 2026",
                prize: "₹3.5+ Lakhs",
                type: "India (On-site)",
                internship: true,
                ppo: false,
                eligibility: "All students",
                link: "https://techfiesta.pict.edu",
                tags: ["Reputed", "Pune"],
                description: "Long-standing reputation with internship opportunities."
            }
        ]
    },
    {
        title: "TIER 5: RECRUITMENT FOCUSED",
        period: "Various 2026",
        description: "Hackathons specifically designed for hiring freshers.",
        color: "from-cyan-600 to-blue-700",
        events: [
            {
                id: "juspay-hiring",
                name: "Juspay Hiring Challenge 2026",
                organizer: "Juspay",
                dates: "Feb–July 2026",
                prize: "₹40k/mo Internship + PPO",
                type: "India (Bangalore)",
                internship: true,
                ppo: true,
                eligibility: "2026 Grads Only",
                link: "https://unstop.com/juspay-hiring-challenge",
                tags: ["Hiring", "FinTech", "Bangalore"],
                description: "Highest stipend among startups. Fast PPO pipeline. DSA focused."
            },
            {
                id: "adobe-india",
                name: "Adobe India Hackathon",
                organizer: "Adobe",
                dates: "July–Sept 2026",
                prize: "MacBook Air + Internship",
                type: "India",
                internship: true,
                ppo: true,
                eligibility: "Batches 2026-2029",
                link: "https://unstop.com/hackathons/adobe-india",
                tags: ["MAANG", "PPI", "Prizes"],
                description: "Top 50 get PPI. Winners get MacBook Air."
            },
            {
                id: "kyndryl-finnovate",
                name: "Kyndryl Finnovate 2026",
                organizer: "Kyndryl",
                dates: "June–July 2026",
                prize: "Cash + PoC",
                type: "India",
                internship: true,
                ppo: false,
                eligibility: "Open",
                link: "https://xathon.mettl.com/finnovate",
                tags: ["FinTech", "Banking"],
                description: "Fast-track to pilots and banking sector visibility."
            }
        ]
    },
    {
        title: "TIER 6 & 7: DIVERSE & EMERGING",
        period: "2026",
        description: "Women-focused events and other emerging opportunities.",
        color: "from-rose-500 to-pink-500",
        events: [
            {
                id: "coderhers-walmart",
                name: "CoderHers by Walmart",
                organizer: "Walmart",
                dates: "2026 (TBA)",
                prize: "Internships + Cash",
                type: "India (Women Only)",
                internship: true,
                ppo: true,
                eligibility: "Women 2026-2027 Grads",
                link: "https://walmart.converge.tech",
                tags: ["Women Only", "High Stipend"],
                description: "Women-focused edition of Sparkathon with same benefits."
            },
            {
                id: "she-plus-plus",
                name: "She++ by Uber",
                organizer: "Uber",
                dates: "2026 (TBA)",
                prize: "Cash + Internship",
                type: "Global (Women Focused)",
                internship: true,
                ppo: false,
                eligibility: "Women",
                link: "https://www.uber.com/careers/she++",
                tags: ["Women Focused", "Global"],
                description: "Uber's initiative for women in tech."
            },
            {
                id: "hacknitr",
                name: "HackNITR 7.0",
                organizer: "NIT Rourkela",
                dates: "Jan 3-5, 2026",
                prize: "TBA",
                type: "India (On-site)",
                internship: false,
                ppo: false,
                eligibility: "Open",
                link: "https://devfolio.co",
                tags: ["College", "Large Scale"],
                description: "One of the largest college hackathons in East India."
            },
            {
                id: "github-copilot",
                name: "GitHub Copilot Hackathon",
                organizer: "GitHub",
                dates: "Multiple 2026",
                prize: "Global Visibility",
                type: "Global",
                internship: false,
                ppo: false,
                eligibility: "All Developers",
                link: "https://github.com/events/hackathons",
                tags: ["AI", "Coding"],
                description: "Multiple events throughout the year showcasing AI coding."
            },
            {
                id: "shopify-build",
                name: "Shopify Build Challenge",
                organizer: "Shopify",
                dates: "Rolling 2026",
                prize: "Cash + Credits",
                type: "Global",
                internship: false,
                ppo: false,
                eligibility: "All Developers",
                link: "https://www.shopify.com/build",
                tags: ["E-commerce", "App Dev"],
                description: "Rolling submissions for app developers."
            }
        ]
    }
];
