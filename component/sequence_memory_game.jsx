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
	const [playerWon, setPlayerWon] = useState(false);
	const [activeSquare, setActiveSquare] = useState(null);
	const squares = [
        { id: 0, color: "#b9ddff" },
        { id: 1, color: "#d7629a" },
        { id: 2, color: "#fffcf0" },
        { id: 3, color: "#71b0f5" },
    ];
	const winLevel = 6;
	
	useEffect(() => {
        if (gameStarted) {
            startNewLevel();
        }
    }, [gameStarted]);

    const startNewLevel = () => {
        setIsUserTurn(false);
        setTimeout(() => {
            addToSequence();
        }, 1000);
    };

    const addToSequence = () => {
        setSequence((prev) => {
            const newNum = Math.floor(Math.random() * 4);
            return [...prev, newNum];
        });
    };

    useEffect(() => {
		if (sequence.length === winLevel) {
			setPlayerWon(true);
			setGameOver(true);
			setGameStarted(false);
		}

        if (sequence.length > 0 && sequence.length < winLevel) {
            playSequence();
        }
    }, [sequence]);

    const playSequence = () => {
        let delay = 0;
        sequence.forEach((num, i) => {
            setTimeout(() => {
                setActiveSquare(num);
                setTimeout(() => setActiveSquare(null), 500);
            }, delay);
            delay += 1000;
        });
        setTimeout(() => setIsUserTurn(true), delay);
    };

    const handleSquareClick = (id) => {
        if (!isUserTurn || gameOver) return;

        if (id === sequence[currentIndex]) {
            setCurrentIndex((prev) => prev + 1);
            if (currentIndex + 1 === sequence.length) {
				setCurrentIndex(0);
				startNewLevel();
				if (!gameOver) {
					setLevel((prev) => prev + 1);
				}
            }
        } else {
            setGameOver(true);
            setGameStarted(false);
            setSequence([]);
        }
    };

    const restartGame = () => {
        setGameStarted(true);
        setGameOver(false);
        setPlayerWon(false);
        setSequence([]);
        setCurrentIndex(0);
        setLevel(1);
    };


	return (
		<div className={`${montserrat.className}`}
		style={{
			zIndex: 50, 
			position: 'relative',
			}}
		>

		<p style={{paddingBottom: "15px", fontSize: '38px', fontWeight: 600}}>
			{playerWon ? "You Win!" : gameOver ? "Game Over" : `Level ${level}`}
		</p>

		<div
			style={{
				display: "grid",
				gridTemplateColumns: "repeat(2, 1fr)",
				gap: "24px",
				width: "100%",
			}}
		>
			{squares.map((square) => (
				<div
				key={square.id}
				onClick={() => handleSquareClick(square.id)}
				style={{
					backgroundColor: activeSquare === square.id ? "#FFFF16" : square.color,
					padding: "40px",
					height: "10.5rem",
					width: "10.5rem",
					display: "flex",
					borderRadius: "20px",
					cursor: isUserTurn ? "pointer" : "default",
				}}>
				</div>
			))}
		</div>
		<div>
			{ (gameOver || playerWon) && (
				<div 
				style={{ 
					display: "flex", 
					justifyContent: "space-between", 
					fontSize: "32px",
					marginTop: "32px",
					fontWeight: 600, 
					}}>
					<button 
					onClick={() => restartGame()}
					style={{
						padding: "5px 22px", 
						backgroundColor: "#A30000",
						color: "white", 
						cursor: "pointer",
						borderRadius: "40px",
						transition: "transform 0.5s ease-in-out"
					}}
					onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
					onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
					>
					Restart
					</button>
					<a href="/games_mainpage">
						<button 
						style={{
							padding: "5px 22px",
							backgroundColor: '#b9ddff',
							color: '#443534',
							cursor: "pointer",
							borderRadius: "40px",
							transition: "transform 0.5s ease-in-out"
						}}
						onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
						onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
						>
						Back ↩
						</button>
					</a>
				</div>
			)}
		</div>
	</div>
	);
};

export default SequenceMemoryGame;