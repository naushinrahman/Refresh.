'use client'
import Image from "next/image";
import Generate from "../../component/generator_on_hips";
import CountdownTimer from "../../component/countdown timer";
import { Montserrat } from "next/font/google";
import { useState, useEffect } from "react";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
  });


export default function Home() {
	return (
		<div className={`${montserrat.className}`}>
			<div className="flex flex-row justify-between">
				<div>
					<Image src="icon.svg" className="fixed rounded-xl" width={0} height={0} 
					style={{ width: "9%", height: "auto", paddingLeft: "1%", paddingTop: "8px" }} alt="Refresh Logo"/>
				</div>

				<div>
					<a href="/" style={{ padding: "10px 20px",  }}>
						<button
							className="font-bold rounded-full mt-5 mb-10 text-center text-base text-white transition-shadow duration-300 hover:shadow-[0_15px_30px_rgba(68,53,52,255)]"
							type="button" style={{ backgroundColor: "rgba(215, 98, 154, 1)",  padding: "15px 25px", fontSize: "1.75rem" }} >
							RETURN
						</button>
					</a>
				</div>
			</div>

			<div className="flex flex-row justify-center space-x-5">

				<div className="relative w-[30%] flex flex-col items-center">
					<Image src="brown_text_box.svg" className="absolute top-0 left-0 w-full h-auto z-0" width={0} height={0} style={{ width: "100%", height: "auto" }} alt="Brown Text Box"/>
					
					<div className="relative z-10 flex flex-col items-center space-y-16 p-6 pt-8">
						<p className="text-3xl font-bold text-center mt-3">
							Exercise that can help your hips
						</p>
						{/* <button className="text-[#443534] text-xl font-medium px-6 py-1 rounded-full transition-shadow duration-300 hover:shadow-[0_15px_30px_rgba(114,176,244,255)]"
								style={{ backgroundColor: "rgba(185, 221, 255, 1)" }}>
							Start Timer
						</button> */}
						<div className="z-10">
							<CountdownTimer initialTime={30} />
						</div>
					</div>
				</div>
				<div className="relative w-[30%] flex flex-col space-y-4 items-center">
					<Image src="brown_text_box.svg" className="absolute top-0 left-0 w-full h-auto z-0" width={0} height={0} style={{ width: "100%", height: "auto" }} alt="Brown Text Box"/>
					<div className="relative z-10 pt-7">
						<Generate />
					</div>
				</div>
			</div>
		</div>
	);
}