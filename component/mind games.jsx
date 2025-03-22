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
						<button className="rounded-full" 
						style={{ 
							padding: "5px 17px", 
							fontSize: "32px", 
							marginTop: "40px",  
							backgroundColor: '#b9ddff',
							color: '#443534',
							fontWeight: '500',
							transition: "transform 0.3s ease-in-out",
						}}
						onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.10)")}
 						 onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
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

	const squares = [
		{ id: 0, color: "#9333ea" },
		{ id: 1, color: "#ec4899" },
		{ id: 2, color: "#3b82f6" },
		{ id: 3, color: "#55BB16" },
	  ];
	
	const startGame = () => {
		generateSequence();
		setCurrentIndex(0);
		setGameOver(false);
		setIsUserTurn(false);
	};

	const generateSequence = () => {
		const nextValue = Math.floor(Math.random()* 4);

		setSequence((prevSequence) => {
			const updatedSequence = [...prevSequence, nextValue];
			return updatedSequence;
		})
	};

	const gameLevel = () => {

		//i want to map value from sequence to div in grid hashmap
		//change background color of that div to #bbcacb 
		//loop for all values in sequence
		//then wait for user to click div that maps to first mapped div
		//if the click wrong one game over
		//if correct click next div
	}
	  
	const gameEnd = () => {
		setGameOver(true)
		setIsUserTurn(false);
	}

	const startDemonstration = async (newSequence) => {
		setIsUserTurn(false);
	  
		for (let i = 0; i < newSequence.length; i++) {
		  
		  await new Promise(resolve => setTimeout(resolve, 1000));
		}
	  
		setIsUserTurn(true);
	  };

	return (
		<div className={`${montserrat.className}`}
		style={{
			zIndex: 50, 
			position: 'relative',
			fontSize: '36px',
			marginTop: "7.5rem",
			minHeight: '100vh',
			fontWeight: 'bold'
			}}
		>
		<h2 >{gameOver ? "Game Over" : `Level ${level}`}</h2>

		<div
			style={{
				display: "grid",
				gridTemplateColumns: "repeat(2, 1fr)",
				gap: "16px",
				width: "100%",
			}}
		>
			{squares.map((square) => (
				<div
				key={square.id}
				style={{
					backgroundColor: `${square.color}`,
					padding: "40px",
					height: "160px",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					color: "white",
					fontSize: "20px",
					}}
				>
					square {square.id}
				</div>
			))}
			{/* <div
				style={{
				backgroundColor: "#9333ea",
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
				backgroundColor: "#ec4899",
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
				backgroundColor: "#3b82f6",
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
				backgroundColor: "#55BB16", 
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
			</div> */}
		</div>
	</div>
	);
};

export default MemoryGame;