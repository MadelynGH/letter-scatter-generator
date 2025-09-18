"use client"
import { useState } from "react";
import LetterScatter from "./LetterScatter.js";

function NumberInput({index, number, updateNumber}) {
    return (
        <input type="number" value={number} onChange={e => updateNumber(index, e.target.value)} />
    );
}

export default function Main() {
    const [numbers, updateNumbers] = useState([]);

    function updateNumber(index, newValue) {
        let temp;
        temp = numbers.slice(0, numbers.length);
        temp[index] = newValue;
        updateNumbers(temp);
    }

    return (
        <>
            {/* // <LetterScatter numbers={[18, 36, 220, 110, 100, 350, 500, 300, 200, 400, 450, 250]} word="laptop" color="#00b899" /> */}
            <LetterScatter numbers={numbers} word="laptop" color="#00b899" />
            <NumberInput number={numbers[0]} updateNumber={updateNumber} index={0} />
            <h1>{numbers}</h1>
        </>
    );
}