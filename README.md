# Assembly: Endgame 🎮

An interactive word-guessing game built with React. The concept is a programming-themed spin on the classic Hangman game. Players must guess a secret tech-related word letter-by-letter within 9 attempts to protect the programming world!

---

## 🚀 Features

* **Dynamic Word Generation:** Pulls random words from a customized vocabulary file on game load and reset.
* **Visual Strike Tracking:** Real-time visual tracking of language chips representing your remaining attempts.
* **Interactive Virtual Keyboard:** Accessible key buttons that alter color state dynamically to indicate right (green) or wrong (orange) choices.
* **Game Status Banner:** Alerts users gracefully when they win, lose, or keep guessing.
* **Celebration Effects:** Triggers a fullscreen confetti drop (`react-confetti`) the moment a player successfully completes a word.

---

## 🛠️ Tech Stack

* **Frontend Library:** React (Functional Components, Hooks)
* **Styling:** Custom CSS (Flexbox layout)
* **Libraries:** `react-confetti` (for the win screen)
* **Build Tool:** Create React App (Webpack configuration)

---

## 📂 Project Structure

```text
assembly-endgame/
├── public/
│   └── index.html
|   └── index.css
├── src/
│   ├── App.jsx              # Main Game Component & Core Logic
│   ├── Banner.jsx           # Win/Loss notification banner
│   ├── Keyboard.jsx         # Individual key component
│   ├── languages.js         # Configuration data for the language chips
│   ├── words.js             # List of secret game words
│   |__ index.jsx            # Application entry point
│ 
├── package.json
└── README.md
```

## ⚙️ Setup and Installation

Follow these steps to set up and run the project locally on your machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

### Steps

1. **Clone the Repository**
```bash
git clone https://github.com/pakbungdesu/assembly-endgame.git
cd assembly-endgame

```


2. **Install Dependencies**
Install the required project dependencies using npm:
```bash
npm install --legacy-peer-deps

```


*(Note: The `--legacy-peer-deps` flag ensures smooth installations between dependencies across different runtime environments.)*
3. **Start the Local Server**
Run the development environment:
```bash
npm start

```


4. **Play the Game!**
Open your browser and navigate to `http://localhost:3000`.

---

## 🕹️ How to Play

1. Review the empty dashes representing the hidden programming word.
2. Click on the letters on the virtual keyboard to make a guess.
3. **Correct letters** reveal their placement in the hidden word block and highlight the keyboard key in **Green**.
4. **Incorrect letters** burn up a programming language barrier chip and highlight the keyboard key in **Orange**.
5. Save the ecosystem before your 9 fallback languages run out!
