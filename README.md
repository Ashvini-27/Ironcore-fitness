 IronCore Fitness 🏋️‍♂️

IronCore Fitness is a responsive web application designed to help users achieve their fitness goals. It features a comprehensive exercise database, health calculation tools, and a user-friendly interface built with React and Tailwind CSS.

🔗 **Live Demo:** [https://ironcore-fitness-inky.vercel.app](https://ironcore-fitness-inky.vercel.app)


## 🚀 Key Features

* **Exercise Library:** Browse and search over 1,000+ exercises targeted by muscle group, body part, or equipment.
* **Detailed Demonstrations:** View animated GIFs and details for every exercise to ensure proper form.
* **BMI Calculator:** A built-in tool to calculate Body Mass Index instantly.
* **Calorie Tracker:** Estimate daily calorie requirements based on activity level and goals (Maintenance, Bulking, Cutting).
* **Responsive Design:** Fully optimized for mobile, tablet, and desktop devices using Tailwind CSS.
* **Music Player:** Integrated audio player for workout motivation.


## 📂 Project Structure

Ironcore-fitness/
├── public/              # Static assets (favicons, manifest)
├── src/
│   ├── assets/          # Images, icons, and music files
│   │   ├── images/
│   │   └── music/
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── HeroBanner.jsx
│   │   ├── SearchExercises.jsx
│   │   ├── ExerciseCard.jsx
│   │   └── Footer.jsx
│   ├── pages/           # Main application pages
│   │   ├── Home.jsx
│   │   ├── ExerciseDetail.jsx
│   │   ├── BMIPage.jsx
│   │   └── CaloriePage.jsx
│   ├── utils/           # Helper functions (API fetching)
│   │   └── fetchData.js
│   ├── App.jsx          # Main App component & Routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles (Tailwind directives)
├── .env                 # Environment variables (API Keys)
├── index.html           # HTML entry point
├── package.json         # Project dependencies
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.js       # Vite configuration

🛠️ Tech Stack
Frontend: React.js (Vite)

Styling: Tailwind CSS

Routing: React Router DOM

API: RapidAPI (ExerciseDB)

State Management: React Hooks (useState, useEffect)
