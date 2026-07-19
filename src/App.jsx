import { useState } from "react"
import Keyboard from "./Keyboard"
import Banner from "./Banner"
import { words } from "./words"
import { languages } from "./languages"
import  { clsx } from "clsx"
import Confetti from "react-confetti"

export default function AssemblyEndgame() {
    const [currentWord, setCurrentWord] = useState(words[Math.floor(Math.random() * words.length)])
    const [guessedLetters, setGuessedLetters] = useState([])
    const [windowSize] = useState({
        width: typeof window !== "undefined" ? window.innerWidth : 400,
        height: typeof window !== "undefined" ? window.innerHeight : 400,
    })

    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const gameWin = currentWord.split("").every(letter => guessedLetters.includes(letter))
    const gameLost = guessedLetters.filter(letter => !currentWord.includes(letter)).length >= 9
    const gameOn = !gameWin && !gameLost
    const remainingAttempts = 9 - guessedLetters.filter(letter => !currentWord.includes(letter)).length

    function resetGame() {
        setCurrentWord(words[Math.floor(Math.random() * words.length)])
        setGuessedLetters([])
    }

    function addGuessedLetter(letter) {
        setGuessedLetters(prevLetters =>
            prevLetters.includes(letter) ?
                prevLetters :
                [...prevLetters, letter]
        )
    }

    function keyboardColor(letter) {
        if (currentWord.includes(letter) && guessedLetters.includes(letter)) {
            return "#10A95B"
        } else if (!currentWord.includes(letter) && guessedLetters.includes(letter)) {
            return "#E2680F"
        }
        else {
            return "#d5d0d0"
        }
    }

    const languageElements = languages.map((lang, index) => {
        const wrongGuesses = 9 - remainingAttempts
        const condition = wrongGuesses > index

        const styles = {
            backgroundColor: condition ? "#333333" : lang.backgroundColor,
            color: condition ? "#3b3b3b" : lang.color,
            position: "relative"
        }
        
        return (
            <span
                className="chip"
                style={styles}
                key={lang.name}
            >
                {lang.name}
                {condition && <span className="skull-icon">💀</span>}
            </span>
        )
    })

    const letterElements = currentWord.split("").map((letter, index) => {
        const shouldRevealLetter = gameLost || guessedLetters.includes(letter)
        const letterClassName = clsx(
            gameLost && !guessedLetters.includes(letter) && "missed-letter"
        )
        return (
            <span key={index} className={letterClassName}>
                {shouldRevealLetter ? letter.toUpperCase() : ""}
            </span>
        )
    })

    const keyboardElements = alphabet.split("").map(letter => (
        <Keyboard
            letter={letter}
            addGuessedLetter={() => addGuessedLetter(letter)}
            keyboardColor={() => keyboardColor(letter)}
            gameLost={!gameOn || gameLost}
            ariaDisabled={guessedLetters.includes(letter)}
        />
    ))

    return (
        <main>
            {gameWin && (
                <Confetti 
                    width={windowSize.width} 
                    height={windowSize.height}
                    style={{ position: "fixed", top: 0, left: 0, zIndex: 100 }} 
                />
            )}
            <header>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word within 9 attempts to keep the
                programming world safe!</p>
            </header>
            <Banner gameWin={gameWin} 
                gameLost={gameLost} 
                gameOn={gameOn} 
                remainingAttempts={remainingAttempts}
                languages={languages}
                currentWord={currentWord} />
            <section className="language-chips-container">
                <section className="language-chips">
                    {languageElements}
                </section>
            </section>
            <section className="word">
                {letterElements}
            </section>
            <section className="keyboard">
                {keyboardElements}
            </section>
            <button className="new-game" onClick={resetGame}>
                New Game
            </button>
        </main>
    )
}
