import Image from "next/image";
import Generate from "../../component/generator_on_hips";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
  });

export default function Home() {
	return (
		<div className={`${montserrat.className}`}>
			<div className="flex flex-row">
				<Image src="icon.svg" className="position-fixed" width={0} height={0} 
				style={{ width: "10%", height: "auto", paddingTop: "1%", paddingLeft: "1%" }} alt="Refresh Logo"/>

				<a href="/" style={{ marginLeft: "73%",  padding: "10px 20px",  }}>
					<button
						className="border-black border-2 font-bold rounded-full mt-5 mb-10 text-center text-base text-white transition-shadow duration-300 hover:shadow-[0_15px_30px_rgba(114,176,244,255)]"
						type="button" style={{ backgroundColor: "rgba(215, 98, 154, 1)",  padding: "15px 25px", fontSize: "1.75rem" }} >
						RETURN
					</button>
				</a>
			</div>

			<div className="flex flex-row justify-center space-x-5">

				<div className="relative w-[30%] flex flex-col items-center">
					<Image src="brown_text_box.svg" className="absolute top-0 left-0 w-full h-auto z-0" width={0} height={0} style={{ width: "100%", height: "auto" }} alt="Brown Text Box"/>
					
					<div className="relative z-10 flex flex-col items-center space-y-8 p-6 pt-8">
						<p className="text-3xl font-bold text-center">
							Exercise that can help your hips
						</p>
						<button className="text-[#443534] text-xl font-medium px-6 py-1 rounded-full transition-shadow duration-300 hover:shadow-[0_15px_30px_rgba(114,176,244,255)]"
								style={{ backgroundColor: "rgba(185, 221, 255, 1)" }}>
							Start Timer
						</button>
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