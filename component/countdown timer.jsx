import { useState, useEffect, useRef } from "react";
import Swal from 'sweetalert2'

const CountdownTimer = ({ initialTime }) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(false);
	const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current = new Audio('/audio/time-up.mp3');
        audioRef.current.loop = true;
    }, []);

    useEffect(() => {
        if (!isRunning || timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => Math.max(prevTime - 1, 0)); 
        }, 1000);

        return () => clearInterval(timer);
    }, [isRunning, timeLeft]);

	useEffect(() => {
		if (timeLeft === 0) {
            if (audioRef.current) {
                audioRef.current.play().catch((error) => console.log("Audio playback error:", error));
            }

            Swal.fire({
                title: 'Time is up!',
                icon: 'success',
                confirmButtonColor: '#72b0f4'
            }).then(() => {
                if (audioRef.current) {
                    audioRef.current.pause();
                    audioRef.current.currentTime = 0;
                }
            });
        }
	}, [timeLeft]);

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
			<p className="text-3xl font-bold" style={{ marginTop: "15px", marginBottom: "20px"}} >{timeLeft}s </p>
			
			<div className="flex space-x-4">
				<button 
				onClick={startTimer}
				className="text-white rounded-full font-bold duration-500 hover:scale-125" 
				style={{ 
					paddingTop: "5px",
					paddingBottom: "5px", 
					paddingLeft: "15px", 
					paddingRight: "15px", 
					margin: "8px", 
					fontSize: "36px", 
					backgroundColor: "rgba(114, 176, 244, 255)", }} 
				> ▷ </button>

				<button 
				onClick={pauseTimer}
				className="text-white rounded-full font-bold duration-500 hover:scale-125" 
				style={{ paddingTop: "5px",
					paddingBottom: "5px", 
					paddingLeft: "15px", 
					paddingRight: "15px", 
					margin: "8px", 
					fontSize: "34px", 
					backgroundColor: "rgba(114, 176, 244, 255)" }} 
				>⏸</button>
				
				<button 
				onClick={stopTimer}
				className="text-white rounded-full font-bold duration-500 hover:scale-125" 
				style={{ paddingTop: "5px",
					paddingBottom: "5px", 
					paddingLeft: "15px", 
					paddingRight: "15px", 
					margin: "8px", 
					fontSize: "36px", 
					backgroundColor: "rgba(114, 176, 244, 255)" }}
				> ⏹ </button>
				
				<button 
				onClick={resetTimer}
				className="text-white rounded-full font-bold duration-500 hover:scale-125" 
				style={{ paddingTop: "5px",
					paddingBottom: "5px", 
					paddingLeft: "15px", 
					paddingRight: "15px", 
					margin: "8px", 
					fontSize: "36px", 
					backgroundColor: "rgba(114, 176, 244, 255)" }}
				> ↺ </button>
			</div>
		</div>
    );
};

export default CountdownTimer;
