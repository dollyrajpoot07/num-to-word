'use client';
import React, { useState } from 'react';
import styles from './wordsToNumber.module.css';
import { wordsToNumberLogic } from './wordsToNumberLogic';
import { numberToWordsLogic } from './numberToWordsLogic';

export default function WordToNumber() {
    const [inputWord, setInputWord] = useState('');
    const [inputNum, setInputNum] = useState('');
    const [outputWord, setOutputWord] = useState('');
    const [outputNum, setOutputNum] = useState('');

    const handleWordConvert = () => {
        if (!inputWord.trim()) {
            setOutputWord("❌ Please enter a number in words.");
            return;
        }
        const result = wordsToNumberLogic(inputWord);
        setOutputWord(result.toLocaleString());
    }

    const handleNumberConvert = () => {
        if (!inputNum.trim()) {
            setOutputNum("❌ Please enter a number");
            return;
        }
        const result = numberToWordsLogic(inputNum);
        setOutputNum(result.toLocaleString());
    }
    return (
        <>
        <div className={styles.container}>
            <h2>Word to Number Converter</h2>
            <input
                type="text"
                row={3}
                placeholder="Enter number in words"
                value={inputWord}
                onChange={(e) => setInputWord(e.target.value)}
                className={styles.input}
            />
            <button onClick={handleWordConvert} className={styles.button}>Convert</button>
            {outputWord && <div className={styles.output}>Output: {outputWord}</div>}
        </div>

         <div className={styles.container}>
            <h2>Number to Words Converter</h2>
            <input
                type="text"
                row={3}
                placeholder="Enter number"
                value={inputNum}
                onChange={(e) => setInputNum(e.target.value)}
                className={styles.input}
            />
            <button onClick={handleNumberConvert} className={styles.button}>Convert</button>
            {outputNum && <div className={styles.output}>Output: {outputNum}</div>}
        </div>
        </>
    )
}