'use client'
import Image from "next/image";
import CountdownTimer from "../../component/countdown timer";
import { Montserrat } from "next/font/google";
import Generate from "../../component/generate_images";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
  })

const imageList = [
	{ src: '/neck page/neck 1.svg', style: {position: 'absolute', }, alt: 'neck image 1' },
	{ src: '/neck page/neck 2.svg', style: {position: 'absolute', }, alt: 'neck image 2' },
	{ src: '/neck page/neck 3.svg', style: {position: 'absolute', }, alt: 'neck image 3' },
];

export default function Home() {
	return (
		<div className={`${montserrat.className}`}>
			<div className="flex flex-row justify-between">
				<div>
					<Image src="icon.svg" className="fixed rounded-xl" width={0} height={0} 
					style={{ width: "9%", height: "auto", paddingLeft: "1%", paddingTop: "8px" }} alt="Refresh Logo"/>
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
					
					<div className="relative z-10 flex flex-col items-center space-y-16 p-6 pt-8">
						<p className="text-3xl font-bold text-center mt-3">
							Exercise that can help your knees
						</p>
						
						<div className="z-10">
							<CountdownTimer initialTime={30} />
						</div>
					</div>
				</div>
				<div className="relative w-[30%] flex flex-col space-y-4 items-center">
					<Image src="brown_text_box.svg" className="absolute top-0 left-0 w-full h-auto z-0" width={0} height={0} style={{ width: "100%", height: "auto" }} alt="Brown Text Box"/>
					<div className="relative z-10 pt-7">
						<div className="relative z-10 pt-7">
							<Generate images={imageList} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}