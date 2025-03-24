'use client'
import Image from "next/image";
import SequenceMemoryGame from "../../component/sequence_memory_game";
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
				style={{ width: "10%", height: "auto", paddingLeft: "2%", paddingTop: "20px" }} alt="Refresh Logo"/>
			</div>
  
			<div>
				<a href="/">
					<button
						className="font-medium rounded-full mt-5 mr-6 text-center text-white duration-300 hover:scale-125"
						type="button" 
						style={{ 
							backgroundColor: "rgba(215, 98, 154, 1)",  
							padding: "7px 15px", 
							fontSize: "1.5rem",
							position: "fixed", 
							top: "7px",
							right: "10px", 
							zIndex: 10
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
				style={{ width: "32%", height: "auto", top: "5.5rem", }} alt="Brown Text Box"/>
	
				<div className="w-full flex justify-center">
					<div className="absolute z-10 w-[30%]" style={{ right: "35%", top: "7.5rem" }}>
						<div className="flex flex-col items-center text-center font-bold">
							<SequenceMemoryGame/>
						</div>
					</div>
				</div>
			</div>
		</div>
	  </div>
	);
  };
  