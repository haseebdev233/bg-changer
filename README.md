Background Changer

A simple and interactive Background Color Changer built with React.js and Tailwind CSS. This app allows users to dynamically change the background color of the page with smooth transitions and a responsive design.

Features

Change background color with a single click

Option to select from random or predefined colors

Smooth animations and transitions using Tailwind CSS

Fully responsive design for all devices

Beginner-friendly project to learn React + Tailwind CSS

Technologies Used

React.js – Component-based UI

Tailwind CSS – Utility-first styling and animations

JavaScript (ES6+)

HTML5 & CSS3

Installation & Usage

Clone the repository

git clone https://github.com/haseebdev233/bg-changer.git


Navigate into the project folder

cd bg-changer


Install dependencies

npm install


Start the development server

npm run dev

How It Works

Run the app in your browser.

Click the button or select a color option.

The background will change instantly with a smooth Tailwind transition.

Folder Structure (React + Tailwind Example)
bg-changer/
│── public/
│── src/
│   ├── components/
│   │   └── BgChanger.jsx
│   ├── App.js
│   ├── index.css  # Tailwind CSS imports
│   └── main.jsx
│── tailwind.config.js
│── postcss.config.js
│── package.json
│── README.md

Tailwind CSS Setup (already included)

In case someone wants to set up Tailwind from scratch:

Install Tailwind CSS

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


Add paths in tailwind.config.js:

content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],


Import Tailwind in src/index.css:

@tailwind base;
@tailwind components;
@tailwind utilities;

Author

Haseeb Dev
Full Stack Developer

GitHub: https://github.com/haseebdev233

LinkedIn: www.linkedin.com/in/haseeb-dev-137671381
