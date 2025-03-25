'use client'
import { Montserrat } from "next/font/google";
import { useState, useEffect } from "react";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
  })

const SequenceMemoryGame = () => {
	const [gameStarted, setGameStarted] = useState(true);
	const [sequence, setSequence] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [level, setLevel] = useState(1);
	const [gameOver, setGameOver] = useState(false);
	const [isUserTurn, setIsUserTurn] = useState(false);
	const [displayOver, setDisplayOver] = useState(false);
	const [playerWon, setPlayerWon] = useState(false);
	const [squares, setSquares] = useState([
		{ id: 0, color: "#b9ddff" },
		{ id: 1, color: "#d7629a" },
		{ id: 2, color: "#fffcf0" },
		{ id: 3, color: "#71b0f5" },
	]);

	const winLevel = 6;

	useEffect(() => {
		if(gameStarted) {
			increaseSequence();
		}
	}, [gameStarted]);
	

	const increaseSequence = () => {
		setSequence((prevSeq) => {
			const lastTwo = prevSeq.slice(-2);
			let newNum;
			do {
				newNum = Math.floor(Math.random() * 4);
			} while (newNum === lastTwo[0] && newNum === lastTwo[1]);
	
			return [...prevSeq, newNum];
		});
	};


	const highlightSquare = (id) => {
        setSquares((prevSquares) =>
            prevSquares.map((sq) =>
                sq.id === id ? { ...sq, color: "#FFFF16" } : sq
            )
        );

        setTimeout(() => {
            setSquares((prevSquares) =>
                prevSquares.map((sq) =>
                    sq.id === id ? { ...sq, color: squares[id].color } : sq
                )
            );
        }, 1000);
    };
	

	const gameLevel = () => {
		let delay = 0;
		sequence.forEach((highlightedDiv) => {
			setTimeout(() => {
				highlightSquare(highlightedDiv);
			}, delay);
			
			delay+=1000;
		});

		let totalRuntime = (sequence.length*1000);
		setTimeout(() => {
			setDisplayOver(true);
		}, totalRuntime);
	}


	useEffect(() => {
		if (displayOver) {
			setIsUserTurn(true)
		}
	}, [displayOver])


	const squareClick = (id) => {
		if (displayOver === true && isUserTurn) {
			if (id === sequence[currentIndex]) {
				setCurrentIndex((prev) => prev + 1);

                if (currentIndex + 1 === sequence.length) {
                    setTimeout(() => {
						setDisplayOver(false);
                        setLevel((prev) => prev + 1);
                        setCurrentIndex(0);
                        increaseSequence();
                    }, 1000);
				}
			}
			else {
				setDisplayOver(false);
				setGameOver(true);
				setGameStarted(false);
				setIsUserTurn(false);
				setSequence([]);
				setCurrentIndex(0);
				setLevel(1);
			}
		}
	}

	const winAchieved = () => {
		setDisplayOver(false);
		setGameOver(true);
		setGameStarted(false);
		setIsUserTurn(false);
		setSequence([]);
		setCurrentIndex(0);
		setLevel(1);
		setPlayerWon(true);
	}

	function restartGame() {
		setGameStarted(true);
		setGameOver(false);
	}

	useEffect(() => {
		if (gameStarted && sequence.length > 0 && sequence.length < winLevel) {
            gameLevel();
        }
		if (sequence.length === winLevel) {
			winAchieved();
		}
    }, [sequence]);


	return (
		<div className={`${montserrat.className}`}
		style={{
			zIndex: 50, 
			position: 'relative',
			marginTop: "0.25rem",
			}}
		>

		<p style={{paddingBottom: "15px", fontSize: '36px', fontWeight: 600}}>
			{playerWon && gameOver ? "You Win!" : gameOver ? "Game Over" : `Level ${level}`}
		</p>

		<div
			style={{
				display: "grid",
				gridTemplateColumns: "repeat(2, 1fr)",
				gap: "20px",
				width: "100%",
			}}
		>
			{squares.map((square) => (
				<div
				key={square.id}
				onClick={() => squareClick(square.id)}
				style={{
					backgroundColor: square.color,
					padding: "40px",
					height: "10rem",
					width: "10rem",
					display: "flex",
					borderRadius: "20px",
					cursor: "pointer"
				}}>
				</div>
			))}
		</div>
		<div>
			{ !gameStarted ? (
				<button 
				onClick={() => restartGame()}
				style={{
					padding: "5px 22px",
					marginTop: "30px",
					fontSize: "30px", 
					backgroundColor: "#9347E8",
					color: "white", 
					cursor: "pointer",
					fontWeight: 600,
					letterSpacing: "1px",
					borderRadius: "40px",
					transition: "transform 0.5s ease-in-out"
				}}
				onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
				onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
				>
				Restart Game
			 	</button>
			) : (<></>)
				}
		</div>
	</div>
	);
};

export default SequenceMemoryGame;