"use client"
import { useState } from "react";
import LetterScatter from "./LetterScatter.js";

function NumberInput({ index, number, updateNumber }) {
    return (
        <input type="range" value={number} onChange={e => updateNumber(index, e.target.value)} min={0} max={500} />
    );
}

export default function Main() {
    let [generatedScatter, updateGeneratedScatter] = useState(null);
    const [numbers, updateNumbers] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    function updateNumber(index, newValue) {
        let temp;
        temp = numbers.slice(0, numbers.length);
        temp[index] = newValue;
        updateNumbers(temp);
    }

    return (
        <>
            {numbers.map((value, index) => <NumberInput number={numbers[index]} updateNumber={updateNumber} index={index} key={index} />)}
            <LetterScatter numbers={numbers} word="laptop" color="#00b899" />
        </>
    );
}