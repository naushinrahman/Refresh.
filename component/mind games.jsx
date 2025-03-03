'use client'
import { Lexend_Zetta } from "next/font/google";
import Image from "next/image";
import { useState, useEffect } from "react";
import { i } from "../app/mindGame/page";
let puzzleAnswers = [];
let currentIndex = 0, level = 1, gameOver = false;

// Generate unique puzzle sequence
for (let i = 0; i < 10; i++) {
  let randomNum;
  do { randomNum = Math.floor(Math.random() * 4); } while (i > 0 && randomNum === puzzleAnswers[i - 1]);
  puzzleAnswers.push(randomNum);
}
console.log(puzzleAnswers);

// const showLevel = () => alert(`Level ${level}`);

const handleButtonClick = (buttonValue) => {
  if (gameOver || buttonValue !== puzzleAnswers[currentIndex]) {
    alert("Incorrect, you lost");
    gameOver = true;
    return;
}
alert("Correct");
if (++currentIndex === level) {
  if (level < 10) {
    alert(`You completed level ${level}! Moving to level ${++level}`);
    currentIndex = 0;
    gameOver = false;
    startDemonstration();
  } else {
    alert("You completed the game!");
    gameOver = true;
  }
}
};

const MemoryGame = () => {
const [highlightedIndex, setHighlightedIndex] = useState(null);
const [isUserTurn, setIsUserTurn] = useState(false);
}

const handleImageClick = (index) => {
  if (isUserTurn) handleButtonClick(index);
};

const startDemonstration = async () => {
  setIsUserTurn(false);
  for (let i = 0; i < level; i++) {
    setHighlightedIndex(puzzleAnswers[i]);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setHighlightedIndex(null);
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  setIsUserTurn(true);

  useEffect(() => {
    startDemonstration();
  }, [])
};

export default MemoryGame;