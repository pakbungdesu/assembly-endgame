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
        >
            {props.letter.toUpperCase()}
        </button>
    )
}