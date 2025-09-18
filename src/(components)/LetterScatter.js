import { montserrat } from "@/../src/app/layout.js";

function Letter({ letter, pos }) {
    return (
        <span style={{
            display: "inlineBlock",
            position: "absolute",
            left: pos[0],
            top: pos[1],
            fontSize: "3em"
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
                return <Letter letter={value} pos={[numbers[index * 2 - 1], numbers[index * 2]]} key={index} />;
            })}
        </div>
    );
}