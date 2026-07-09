export default function Banner(props) {
    const styles = {
        backgroundColor: props.gameWin ? "#10A95B" : "#E2680F",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#F9F4DA",
        borderRadius: "4px",
        padding: "24px",
        marginBlock: "20px",
        textAlign: "center"
    }

    const langIndex = 9 - props.remainingAttempts - 1

    if (props.gameWin) {
        return (
            <section className="banner" style={styles}>
                <h2 style={{ margin: "0 0 8px 0", fontSize: "1.5rem" }}>You win!</h2>
                <p style={{ margin: 0, fontSize: "1rem" }}>Well done. You did it! ✨</p>
            </section>
        )
    }

    if (props.gameLost) {
        return (
            <section className="banner" style={styles}>
                <h2 style={{ margin: "0 0 8px 0", fontSize: "1.5rem" }}>Game over!</h2>
                <p style={{ margin: 0, fontSize: "1rem" }}>You lose! The word is {props.currentWord} 😭</p>
            </section>
        )
    }

    if (props.gameOn){
        return (
            <section className="banner" style={styles}>
                <h2 style={{ margin: "0 0 8px 0", fontSize: "1.5rem" }}>
                    {langIndex >= 0 ? "You can't save " + props.languages[langIndex].name : "Keep guessing"}!
                </h2>
                <p style={{ margin: 0, fontSize: "1rem" }}>You have {props.remainingAttempts} attempts left.</p>
            </section>
        )
    }
}