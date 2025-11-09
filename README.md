BtechMap.in
BtechMap.in is a one-stop platform designed to guide B.Tech students in India through their academic and career journey. It provides clear roadmaps, curated resources, and progress tracking to help students learn effectively, get certified, and find opportunities.

This project was built to solve a common problem: students are often lost, not knowing what to learn, in what order, or where to find reliable resources. BtechMap provides a single, structured path from first-year fundamentals to landing your first internship.

✨ Key Features
🗺️ Interactive Career Roadmaps: Detailed, step-by-step roadmaps for various domains, including:

Academic Excellence

GATE Preparation

Data Structures & Algorithms (DSA)

Web Development

AI & Machine Learning

Data Science

Java & Python Programming

📚 Curated Resources: Every single step in a roadmap is linked to a high-quality, free YouTube resource, so students can learn immediately.

✅ Persistent Progress Tracking: Uses a Go backend and PostgreSQL database to save user progress. Checkboxes, quiz scores, and badges are saved to your account and available on any device.

🏆 Gamified Learning & Leaderboard:

Section Quizzes: Test your knowledge at the end of each module.

Final Challenges: Pass a final exam after completing all steps to earn a "Badge" for that roadmap.

College-wise Leaderboard: A live, filterable leaderboard ranks users based on their scores (earned from steps, quizzes, and badges), fostering healthy competition.

🚀 Monthly Internship Board: A dedicated page with the latest internship openings from top companies and government organizations (like DRDO, ISRO), sorted by month.

🔐 Secure User Authentication: Full-featured user signup (with college name for the leaderboard) and login system using JWT for secure sessions.

🛠️ Tech Stack
This project is a modern, full-stack application.

Frontend: React.js

Backend: Go (using the Gofiber framework)

Database: PostgreSQL

Go Libraries: GORM (for database ORM), JWT (for auth)

Frontend Libraries: lucide-react (for icons)

🚀 Getting Started
To run this project locally, you will need Go, Node.js, and PostgreSQL installed.

1. Backend Server (Go)
Bash

# Navigate to the backend directory
cd btechmap-backend

# Install dependencies
go mod tidy

# Create a .env file (or set environment variables) for:
# DATABASE_DSN="host=localhost user=youruser password=yourpass dbname=btechmap port=5432"
# JWT_SECRET="your-super-secret-key"

# Run the server
go run main.go
The backend server will start on http://localhost:8080.

2. Frontend Client (React)
Bash

# In a new terminal, navigate to the frontend directory
cd btechmap-frontend

# Install dependencies
npm install

# Run the development server
npm run dev
The React app will start on http://localhost:5173.
