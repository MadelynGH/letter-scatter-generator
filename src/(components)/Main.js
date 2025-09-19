"use client"
import { useState } from "react";
import LetterScatter from "./LetterScatter.js";
import { montserrat } from "@/app/layout.js";

function NumberInput({ index, number, updateNumber }) {
    return (
        <input type="range" value={number} onChange={e => updateNumber(index, e.target.value)} min={0} max={500} />
    );
}

function InputsAndScatter({ word, numbers, updateNumber }) {
    function returnZeros(num) {
        let zeros = [];
        for (let i = 0; i < num; i++) {
            zeros.push(0);
        }
        return zeros
    }

    return (
        <>
            {returnZeros(word.length * 2).map((value, index) => <NumberInput number={numbers[index]} updateNumber={updateNumber} index={index} key={index} />)}
            <LetterScatter numbers={numbers} word={word} color="#00b899" />
        </>
    );
}

export default function Main() {
    const [numbers, updateNumbers] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [word, updateWord] = useState("");
    const [wordSubmitted, updateWordSubmitted] = useState(false);
    
    function updateNumber(index, newValue) {
        let temp;
        temp = numbers.slice(0, numbers.length);
        temp[index] = newValue;
        updateNumbers(temp);
    }

    return (
        <>
            {wordSubmitted ? <p>{word}</p> : <input type="text" value={word} onChange={e => updateWord(e.target.value)}  className={montserrat.className} />}
            <button onClick={() => updateWordSubmitted(true)} className={montserrat.className} style={{
                display: wordSubmitted ? "none" : "block"
            }}>Use Word</button>
            {wordSubmitted ? <InputsAndScatter word={word} numbers={numbers} updateNumber={updateNumber} /> : null}
        </>
    );
}