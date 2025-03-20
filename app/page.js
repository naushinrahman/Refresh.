import Image from "next/image";
import Chatbox from "../component/gemini chatbox";

export default function Home() {
return (
	<div>
		<div className="flex flex-col items-center justify-center">
			<div className="logo-wrapper flex items-center justify-between w-full">
				<Image className="background-image" src="/main_page/main logo.svg" width={0} height={0} 
				style={{ width: "52%", height: "auto", paddingLeft: "10%" }} alt="Refresh logo"/>

				<div className="flex justify-end py-10">
					<Image src="/main_page/ICON_right.svg" width={0} height={0} 
					style={{ width: "75%", height: "auto" }} alt="talking-head"/>
				</div>
			</div>
			<div className="relative my-24 z-0">
				<Image src="/main_page/Rectangle 11.svg" width={0} height={0} 
				style={{ width: "90%", height: "auto" }} alt="scroll"/>

				<div className="absolute inset-0 z-20">
					<p className="text-4xl text-center mr-28 mt-4 font-bold italic">
						Scroll through these options and click a button
					</p>
				</div>
				
				<div className="absolute inset-0 flex justify-around w-full z-20 pr-48 pl-2">
					<a href="/hip" className="block w-[16%] h-auto pt-24">
						<img src="/main_page/hips_button.svg" 
						className="rounded-full hover:scale-125 duration-300" alt="hips button"/>
					</a>
					<a href="/knee" className="block w-[16%] h-auto pt-24">
						<img src="/main_page/knee_button.svg" 
						className="rounded-full hover:scale-125 duration-300" alt="knee button"/>
					</a>
					<a href="/neck" className="block w-[16%] h-auto pt-24">
						<img src="/main_page/neck_button.svg"
						className="rounded-full hover:scale-125 duration-300" alt="neck button"/>
					</a>
				</div>
				<div className="absolute inset-0 flex justify-around w-full z-10 pr-48 pl-2">
					<Image src="/main_page/hips circle.svg" width={0} height={0} style={{ width: "22%", height: "auto" }} alt="hips circle"/>
					<Image src="/main_page/knee circle.svg" width={0} height={0} style={{ width: "22%", height: "auto" }} alt="knee circle"/>
					<Image src="/main_page/neck circle.svg" width={0} height={0} style={{ width: "22%", height: "auto" }} alt="neck circle"/>
				</div>
				<div className="absolute bottom-0 inset-x-0 z-20 flex justify-center pr-20 pb-5">
					<a href="/mindGame" className="inline-flex w-fit">
						<img src="/main_page/Test_your_mind.svg" 
						className="rounded-md hover:scale-125 duration-300" width={0} height={0} style={{ width: "90%", height: "auto" }} alt="test your mind"/> 
					</a>
				</div>
			</div>
		</div>
		<Chatbox />
		</div>
	);
}
