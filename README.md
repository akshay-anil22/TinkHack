# TinkHack - Official Hackathon Landing Page


This is the  responsive landing page for **TinkHack**, the flagship 36-hour hackathon by TinkerHub MEC. It's designed to inform, excite, and drive registrations for the event, showcasing all key information in a modern, single-page layout.

**Live Demo:** [**https://tinkhack-mec.netlify.app/**](https://tinkhack-mec.netlify.app/) ---

## ✨ Features

- **Fully Responsive Design:** A mobile-first approach ensures a seamless experience on all devices, from phones to desktops.
- **Component-Based Architecture:** Built with React, every section of the page is a reusable component.
- **Smooth Scrolling Navigation:** A sticky navbar that allows for smooth, animated scrolling to different sections.
- **Dynamic On-Scroll Animations:** Elements elegantly fade and slide into view as the user scrolls, powered by Framer Motion.
- **Live Countdown Timer:** Builds excitement by counting down to the event's start time.
- **Modern Styling:** Styled with Tailwind CSS for a clean, utility-first, and highly customizable design.

---

## 🛠️ Tech Stack

- **Framework:** [React.js](https://reactjs.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scrolling:** [React Scroll](https://github.com/fisshy/react-scroll)
- **Countdown:** [React Countdown](https://github.com/ndresx/react-countdown)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment:** [Netlify](https://www.netlify.com/)

---



## \#\# 🚀 Installation

Follow these steps one-by-one in your terminal to set up the project locally.

### 1\. **Clone the Repository**

Download the project files from GitHub to your local machine. Remember to replace the placeholder with your actual repository URL.

```sh
git clone https://github.com/your-username/tinkhack-landing-page.git
```

### 2\. **Navigate into the Project Directory**

Move your terminal's location into the folder that was just created.

```sh
cd tinkhack-landing-page
```

### 3\. **Install Dependencies**

This command reads the `package.json` file and downloads all the necessary libraries (like React and Tailwind CSS) that the project needs to run.

```sh
npm install
```

### 4\. **Run the Development Server**

Start the local server. This makes the website available in your browser and will automatically update it as you make code changes.

```sh
npm run dev
```

After this, you can view the live site at **`http://localhost:5173`**.



### 📂 Project Structure



```
/
├── public/               # Static assets
├── src/
│   ├── assets/           # Images, logos, etc.
│   ├── components/       # Reusable React components
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Overview.jsx
│   │   ├── Sponsors.jsx
│   │   └── Timeline.jsx
│   ├── App.jsx           # Main application component
│   ├── index.css         # Main stylesheet with Tailwind directives
│   └── main.jsx          # Entry point of the React application
├── .gitignore
├── index.html            # Main HTML template
├── package.json
├── README.md             # This file
└── vite.config.js
```
   


 
