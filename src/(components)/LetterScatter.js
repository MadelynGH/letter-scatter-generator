import { montserrat } from "@/../src/app/layout.js";

function Letter({ letter, pos }) {
    return (
        <span style={{
            display: "inlineBlock",
            position: "absolute",
            left: pos[0] + "px",
            top: pos[1] + "px",
            fontSize: "3em",
            fontWeight: "700"
        }}>{letter}</span>
    );
}

export default function LetterScatter({ numbers, word, color }) {
    return (
        <div style={{
            position: "relative",
            width: "50vw",
            height: "50vh",
            color: color
        }} className={montserrat.className}>
            {[...word].map((value, index) => {
                return <Letter letter={value} pos={[numbers[index * 2], numbers[index * 2 + 1]]} key={index} />;
            })}
        </div>
    );
}