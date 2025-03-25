'use client'
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
  })

export default function Home() {
  return (
    <div className={`${montserrat.className}`}>
    	<div className="flex flex-row justify-between">
			<div>
				<Image src="icon.svg" className="fixed rounded-xl" width={0} height={0} 
				style={{ width: "10%", height: "auto", paddingLeft: "15px", paddingTop: "20px" }} alt="Refresh Logo"/>
			</div>

			<div>
				<a href="/">
					<button
						className="font-medium rounded-full mt-5 mr-6 text-center text-white duration-500 hover:scale-125"
						type="button" 
						style={{ 
							backgroundColor: "#D44087",  
							padding: "5px 27px",
							fontSize: "1.7rem",
							position: "fixed", 
							top: "7px",
							right: "10px",
							letterSpacing: '1px', 
							}} >
						RETURN
					</button>
				</a>
			</div>
		</div>

    	<div className="flex justify-center space-x-5">
      		<Image src="/head.svg" width={0} height={0} priority={true}
			style={{ position: 'fixed', width: "15%", bottom: "0", left: "0", }} alt="floating head"/>

			<div className="relative w-full flex flex-col items-center">
			<Image src="brown_text_box.svg" className="absolute z-0" width={0} height={0} priority={true}
			style={{ width: "32%", height: "auto", top: "6.5rem", }} alt="Brown Text Box"/>

			<div className="w-full flex justify-center">
				<div className="absolute z-10 w-[30%]" style={{ right: "35%", top: "8.5rem" }}>
					<div className="flex flex-col items-center text-center font-bold">
						<h1 className="text-4xl font-bold">Memory Game Instructions</h1>
						<p style={{ fontSize: '26px', marginTop: "20px" }}>1. Memorize the order of squares as they light up</p>
						<p style={{ fontSize: '26px', marginTop: "15px" }}>2. Click the squares in the correct sequence</p>
						<p style={{ fontSize: '26px', marginTop: "15px" }}>3. Complete all levels to win!</p>
						<a href="/sequence_game">
							<button className="rounded-full duration-500 hover:scale-110" 
							style={{ 
								padding: "5px 27px", 
								fontSize: "30px", 
								marginTop: "40px",  
								backgroundColor: '#b9ddff',
								color: '#443534',
								fontWeight: 500,
							}}>
								Start Game
							</button>
						</a>
					</div>
				</div>
			</div>
			</div>
		</div>
    </div>
  );
};
