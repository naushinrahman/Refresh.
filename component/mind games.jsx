'use client'
import { Montserrat } from "next/font/google";
import { useState, useEffect } from "react";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
  })

const MemoryGame = () => {
	const [gameStarted, setGameStarted] = useState(false);
	
	return (
		<div>
			{!gameStarted ? (
				<div className="absolute z-10 w-[30%]" style={{ right: "35%", top: "7.5rem" }}>
					<div className="flex flex-col items-center text-center font-bold">
						<h1 className="text-4xl font-bold">Memory Game Instructions</h1>
						<p style={{ fontSize: '26px', marginTop: "20px" }}>1. Memorize the order of squares as they light up</p>
						<p style={{ fontSize: '26px', marginTop: "15px" }}>2. Click the squares in the correct sequence</p>
						<p style={{ fontSize: '26px', marginTop: "15px" }}>3. Complete all 10 levels to win!</p>
						<button className="rounded-full duration-300 hover:scale-125" 
						style={{ 
							padding: "5px 17px", 
							fontSize: "32px", 
							marginTop: "40px",  
							backgroundColor: '#b9ddff',
							color: '#443534',
							fontWeight: '500',
						}}
						onClick={() => setGameStarted(true)}>
							Start game
						</button>
					</div>
				</div>
			) : (
				<GameBoard />
			)}
		</div>
	  );
  };

const GameBoard = () => {
	const [sequence, setSequence] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [level, setLevel] = useState(1);
	const [gameOver, setGameOver] = useState(false);
	const [isUserTurn, setIsUserTurn] = useState(false);

	
	const startGame = () => {
		const newSequence = [Math.floor(Math.random() * 4)];
		setSequence(newSequence);
		setCurrentIndex(0);
		setLevel(1);
		setGameOver(false);
		setIsUserTurn(false);
		startDemonstration(newSequence);
	};

	const gameEnd = () => {
		setGameOver(true)
	}

	const startDemonstration = async (newSequence) => {
		setIsUserTurn(false);
	  
		for (let i = 0; i < newSequence.length; i++) {
		  console.log(`Card ${newSequence[i]} grows`); 
		  await new Promise(resolve => setTimeout(resolve, 1000));
		}
	  
		setIsUserTurn(true);
	  };

	return (
		<>
		<div className={`${montserrat.className}`}
		style={{
			zIndex: 50, 
			position: 'relative',
			fontSize: '26px',
			marginTop: "7.5rem",
			minHeight: '100vh',
			}}>
		  <h2 >{gameOver ? "Game Over" : `Level ${level}`}</h2>

		  <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "16px",
    width: "100%",
  }}
>
  <div
    style={{
      backgroundColor: "#9333ea", // Purple-600
      padding: "40px",
      height: "160px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: "20px",
    }}
  >
    Square 1
  </div>
  <div
    style={{
      backgroundColor: "#ec4899", // Pink-500
      padding: "40px",
      height: "160px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: "20px",
    }}
  >
    Square 2
  </div>
  <div
    style={{
      backgroundColor: "#3b82f6", // Blue-500
      padding: "40px",
      height: "160px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: "20px",
    }}
  >
    Square 3
  </div>
  <div
    style={{
      backgroundColor: "#84cc16", // Lime-500
      padding: "40px",
      height: "160px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: "20px",
    }}
  >
    Square 4
  </div>
</div>


		</div>
		</>
	  );
};

export default MemoryGame;