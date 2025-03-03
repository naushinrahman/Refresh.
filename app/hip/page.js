'use client'
import Image from "next/image";
import Generate from "../../component/generate_images";
import CountdownTimer from "../../component/countdown timer";
import { Montserrat } from "next/font/google";
import { useState } from "react";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
  });

const imageList = [
	{ src: '/hips page/hips 1.svg', style: {position: 'absolute', }, alt: 'hips image 1' },
	{ src: '/hips page/hips 2.svg', style: {position: 'absolute', }, alt: 'hips image 2' },
	{ src: '/hips page/hips 3.svg', style: {position: 'absolute', }, alt: 'hips image 3' },
];

export default function Home() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const showNextImage = () => { 
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    };

	return (
		<div className={`${montserrat.className}`}>
			<div className="flex flex-row justify-between">
				<div>
					<Image src="icon.svg" className="fixed rounded-xl" width={0} height={0} 
					style={{ width: "9%", height: "auto", paddingLeft: "1%", paddingTop: "20px" }} alt="Refresh Logo"/>
				</div>

				<div>
					<a href="/">
						<button
							className="font-medium rounded-full mt-5 mb-10 mr-6 text-center text-white duration-300 hover:scale-125"
							type="button" style={{ backgroundColor: "rgba(215, 98, 154, 1)",  padding: "10px 15px", fontSize: "1.75rem" }} >
							RETURN
						</button>
					</a>
				</div>
			</div>

			<div className="flex flex-row justify-center space-x-5">

				<div className="relative w-[30%] flex flex-col items-center">
					<Image src="brown_text_box.svg" className="absolute top-0 left-0 w-full h-auto z-0" width={0} height={0} style={{ width: "100%", height: "auto" }} alt="Brown Text Box"/>
					
					<div className="relative z-10 flex flex-col items-center space-y-14 p-6 pt-8">
						<p className="text-3xl font-bold text-center mt-3">
							These exercises can help your hips
						</p>
						
						<div>
							<Image
								src="/generate button.svg"
								alt="Click to go to next image"
								width={0} 
								height={0}
								style={{ width: "15rem", height: "auto" }}
								className="rounded-full duration-300 hover:scale-125"
								onClick={showNextImage}/>
						</div>

						<div className="z-10">
							<p className="text-3xl font-bold italic text-center mb-2">Timer</p>
							
							<CountdownTimer initialTime={30} />
						</div>
					</div>
				</div>
				<div className="relative w-[30%] flex flex-col items-center">
					<Image src="brown_text_box.svg" className="absolute top-0 left-0 w-full h-auto z-0" width={0} height={0} style={{ width: "100%", height: "auto" }} alt="Brown Text Box"/>
					
					<div className="relative z-10 flex flex-col items-center space-y-6 p-6 pt-8">
						<p className="text-3xl font-bold text-center mt-3">
							Follow along with these movements
						</p>

						<div className="relative z-10">
							<Generate images={imageList} currentIndex={currentIndex} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}