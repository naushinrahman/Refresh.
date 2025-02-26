import { useState, useEffect } from "react";

const CountdownTimer = ({ initialTime }) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning || timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => Math.max(prevTime - 1, 0)); 
        }, 1000);

        return () => clearInterval(timer);
    }, [isRunning, timeLeft]);

    const startTimer = () => setIsRunning(true);
    const pauseTimer = () => setIsRunning(false);
    const stopTimer = () => {
        setIsRunning(false);
        setTimeLeft(0);
    };
    const resetTimer = () => {
        setIsRunning(false);
        setTimeLeft(initialTime);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-white">
			
			<button 
			onClick={startTimer}
			className="text-white rounded-full font-bold transition-shadow duration-300" 
			style={{ 
				paddingTop: "5px",
				paddingBottom: "5px", 
				paddingLeft: "15px", 
				paddingRight: "15px", 
				margin: "8px", 
				fontSize: "28px", 
				backgroundColor: "rgba(114, 176, 244, 255)", }} 

			onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0px 15px 30px rgba(114,176,244,1)"}
			onMouseLeave={(e) => e.currentTarget.style.boxShadow = "0px 0px 0px rgba(114,176,244,1)"}
			> ▷ </button>

			<p className="text-3xl font-bold" style={{ marginTop: "15px", marginBottom: "20px"}} >{timeLeft}s </p>

			
			<div className="flex space-x-4">
				<button 
				onClick={pauseTimer}
				className="text-white rounded-full font-bold transition-shadow duration-300" 
				style={{ paddingTop: "5px",
					paddingBottom: "5px", 
					paddingLeft: "15px", 
					paddingRight: "15px", 
					margin: "8px", 
					fontSize: "24px", 
					backgroundColor: "rgba(114, 176, 244, 255)" }} 
				
				onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0px 15px 30px rgba(114,176,244,1)"}
				onMouseLeave={(e) => e.currentTarget.style.boxShadow = "0px 0px 0px rgba(114,176,244,1)"}
				>⏸</button>
				
				<button 
				onClick={stopTimer}
				className="text-white rounded-full font-bold transition-shadow duration-300" 
				style={{ paddingTop: "5px",
					paddingBottom: "5px", 
					paddingLeft: "15px", 
					paddingRight: "15px", 
					margin: "8px", 
					fontSize: "28px", 
					backgroundColor: "rgba(114, 176, 244, 255)" }}
				
				onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0px 15px 30px rgba(114,176,244,1)"}
				onMouseLeave={(e) => e.currentTarget.style.boxShadow = "0px 0px 0px rgba(114,176,244,1)"}
				> ⏹ </button>
				
				<button 
				onClick={resetTimer}
				className="text-white rounded-full font-bold transition-shadow duration-300" 
				style={{ paddingTop: "5px",
					paddingBottom: "5px", 
					paddingLeft: "15px", 
					paddingRight: "15px", 
					margin: "8px", 
					fontSize: "28px", 
					backgroundColor: "rgba(114, 176, 244, 255)" }}
				
				onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0px 15px 30px rgba(114,176,244,1)"}
				onMouseLeave={(e) => e.currentTarget.style.boxShadow = "0px 0px 0px rgba(114,176,244,1)"}
				> ↺ </button>

			</div>
		</div>

    );
};

export default CountdownTimer;
