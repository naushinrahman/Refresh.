import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["400", "700"],
  });

export default function Home() {
	return (
		<div>
			<div className="flex flex-row">
				<Image src="icon.svg" className="position-fixed" width={0} height={0} 
				style={{ width: "11%", height: "auto", paddingTop: "1%", paddingLeft: "1%" }} alt="Refresh Logo"/>

				<a href="/" style={{ marginLeft: "73%",  padding: "10px 20px",  }}>
					<button
						className={`${montserrat.className} border-black border-2 rounded-full mt-5 mb-10 text-center text-base text-white transition-shadow duration-300 hover:shadow-[0_15px_30px_rgba(114,176,244,255)]`}
						type="button" style={{ backgroundColor: "rgba(215, 98, 154, 1)",  padding: "15px 25px", fontSize: "2rem" }} >
						RETURN
					</button>
				</a>
			</div>

			<div className="flex flex-row">
				
			</div>
		</div>
	);
}