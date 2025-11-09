# 🎓 BtechMap.in

**BtechMap.in** is a full-stack web platform that helps **B.Tech students** plan their learning and career journey with clarity.  
It answers: *“What should I learn next?”* and *“Where can I find the best resources?”*

---

### 🚀 What It Does
- 🗺️ Interactive roadmaps for DSA, Web Dev, GATE, AI/ML, Data Science, Java, and Python  
- 📚 Each roadmap step links to quality YouTube resources  
- ✅ Progress auto-saved in PostgreSQL (accessible on any device)  
- 🔐 Secure signup/login with JWT (college-based user auth)  
- 🏆 Quizzes, badges, and a college-wise leaderboard  
- 💼 Internship board featuring DRDO, ISRO, and top companies  

---

### ⚙️ Tech Stack
- **Frontend:** React.js  
- **Backend:** Go (Fiber Framework)  
- **Database:** PostgreSQL  
- **ORM:** GORM  
- **Auth:** JWT  

---

### 🛠️ Setup Guide (Quick Start)
- Clone the repo → `git clone https://github.com/abdulfarhath/btechmap.in.git`  
- Go to backend → `cd btechmap.in/backend`  
- Install Go deps → `go mod tidy`  
- Start PostgreSQL → `sudo service postgresql start`  
- Create DB → `sudo -u postgres psql -c "CREATE DATABASE btechmap;"`  
- Run migrations → `sudo -u postgres psql -d btechmap -f migrations/001_create_users_table.sql`  
- Start backend → `go run cmd/api/main.go` → (runs on **http://localhost:8080**)  
- Open new terminal → `cd ../frontend`  
- Install frontend deps → `npm install`  
- Run frontend → `npm run dev` → (opens **http://localhost:5173**)  

---

### 🔁 Full Setup Command (All in One)
```bash
git clone https://github.com/abdulfarhath/btechmap.in.git && cd btechmap.in/backend && go mod tidy && sudo service postgresql start && sudo -u postgres psql -c "CREATE DATABASE btechmap;" && sudo -u postgres psql -d btechmap -f migrations/001_create_users_table.sql && go run cmd/api/main.go
