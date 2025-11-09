# 🎓 BtechMap.in

BtechMap.in is a complete full-stack web platform designed to guide B.Tech students in India throughout their academic and career journey. It solves the common confusion students face like “What should I learn next?” and “Where can I find good resources?” by providing clear interactive roadmaps, curated YouTube resources, quizzes, progress tracking, and a leaderboard. The platform helps students plan their learning path effectively, track their growth, and stay motivated through gamified elements.

BtechMap.in includes interactive roadmaps for various domains like DSA, Web Development, GATE, AI & ML, Data Science, and Programming in Java or Python. Every roadmap contains structured topics with linked resources, and the user’s progress is saved persistently in a PostgreSQL database via a Go backend, so that their learning state is available on any device. The authentication system is built with Go, GORM, and JWT, allowing users to securely sign up with their college name and log in using encrypted credentials. Students can take quizzes after completing modules, earn badges for finishing roadmaps, and gain points that are reflected on a college-wise leaderboard. There is also a monthly internship board showcasing the latest internship openings from top companies and government organizations like DRDO, ISRO, and others.

The platform uses React.js for the frontend, Go (with Fiber framework) for the backend, PostgreSQL as the database, and GORM for ORM mapping between Go structs and database tables. JWT is used for secure, stateless authentication. The complete stack ensures a smooth, reliable, and scalable architecture for both learners and developers.

To set up the project locally, first clone the repository by running:  
`git clone https://github.com/abdulfarhath/btechmap.in.git` and then navigate to the backend folder using `cd btechmap.in/backend`. Install Go dependencies using `go mod tidy`. Start the PostgreSQL service with `sudo service postgresql start` and then open the PostgreSQL CLI using `sudo -u postgres psql`. Inside psql, create a database using `CREATE DATABASE btechmap;` and exit with `\q`. After that, run your migrations with `sudo -u postgres psql -d btechmap -f migrations/001_create_users_table.sql`. Once the database setup is done, run the Go server using `go run cmd/api/main.go`. The backend will start and listen at http://localhost:8080.

Now, for the frontend setup, open a new terminal window and navigate to the frontend directory using `cd ../frontend`. Install the required dependencies using `npm install` and start the development server using `npm run dev`. The React app will start and run on http://localhost:5173. You can now open the browser and interact with the full application where backend and frontend communicate seamlessly.

In summary, the entire workflow to get the project running locally is as follows:  
`git clone https://github.com/abdulfarhath/btechmap.in.git && cd btechmap.in/backend && go mod tidy && sudo service postgresql start && sudo -u postgres psql -c "CREATE DATABASE btechmap;" && sudo -u postgres psql -d btechmap -f migrations/001_create_users_table.sql && go run cmd/api/main.go`  
and in a new terminal:  
`cd ../frontend && npm install && npm run dev`.  

Future improvements include building an admin panel to manage internships dynamically, a notes feature allowing users to store their personal notes alongside each roadmap step, and profile customization where users can edit their college name and upload a profile picture.  

Developed by **Abdul Farhath Mohammad**, Full Stack Developer (MERN + Go).  
📧 Contact: [abdulfarhathmohd@gmail.com](mailto:abdulfarhathmohd@gmail.com)  
Licensed under the **MIT License**.
