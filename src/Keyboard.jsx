export default function Keyboard(props) {
    const styles = {
        backgroundColor: props.keyboardColor(props.letter),
        disabled: true
    }
    
    return (
        <button
            style={styles}
            key={props.letter}
            onClick={props.addGuessedLetter}
            disabled={props.gameLost}
            aria-disabled={props.aria-disabled}
            aria-label={`Letter ${props.letter}`}
        >
            {props.letter.toUpperCase()}
        </button>
    )
}