'use client'
import { Lexend_Zetta } from "next/font/google";
import Image from "next/image";
import { useState, useEffect } from "react";

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
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <Image src="/icon.svg" width={0} height={0} style={{ position: 'absolute', width: "10%", paddingTop: "5%", marginTop: '10%', right: '87%' }} alt="icon" />
      <Image src="/memory_box.svg" width={0} height={0} style={{ position: 'absolute', width: "35%", paddingTop: "40%", marginTop: '9%', right: '23%' }} alt="box" />
      <Image src="/headddd 1.svg" width={0} height={0} style={{ position: 'absolute', width: "20%", paddingTop: "5%", marginTop: '-4%', right: '80%', top: '50%' }} alt="head" />
      {["rect1", "rect2", "rect3", "rect4"].map((rect, index) => (
        <Image key={index} onClick={() => handleImageClick(index)} src={`/${rect}.svg`} width={0} height={0} 
          style={{ 
            position: 'absolute', 
            width: highlightedIndex === index ? "18%" : "15%", 
            paddingTop: "5%", 
            marginTop: '5px', 
            right: index % 2 === 0 ? '41%' : '25%', 
            top: index < 2 ? '15%' : '45%',
            transition: 'width 0.3s ease-in-out'
          }} 
          alt={`rect${index + 1}`} />
      ))}
    </div>
  );
};

export default MemoryGame;

// showLevel();