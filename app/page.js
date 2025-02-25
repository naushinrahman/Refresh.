import Image from "next/image";
import Chatbox from "../component/button";

export default function Home() {
return (
	<div>
		<div className="flex flex-col items-center justify-center">
			<div className="logo-wrapper flex items-center justify-between w-full">
				<Image className="background-image" src="/main page/main logo.svg" width={0} height={0} 
				style={{ width: "52%", height: "auto", paddingLeft: "10%" }} alt="Refresh logo"/>

				<div className="flex justify-end py-10">
					<Image src="/main page/ICON_right.svg" width={0} height={0} 
					style={{ width: "75%", height: "auto" }} alt="talking-head"/>
				</div>
			</div>
			<div className="relative my-24 z-0">
				<Image src="/main page/scroll_brown_box.svg" width={0} height={0} 
				style={{ width: "90%", height: "auto" }} alt="scroll"/>
				
				<div className="absolute inset-0 flex justify-around w-full z-20 pr-48 pl-2">
					<a href="/hip" className="block w-[16%] h-auto pt-20">
						<img src="/main page/hips_button.svg" 
						className="rounded-full transition-shadow duration-300 hover:shadow-[0_15px_35px_rgba(77,38,0,0.9)]" alt="hips button"/>
					</a>
					<a href="/knees" className="block w-[16%] h-auto pt-20">
						<img src="/main page/knee_button.svg" 
						className="rounded-full transition-shadow duration-300 hover:shadow-[0_15px_35px_rgba(77,38,0,0.9)]" alt="knee button"/>
					</a>
					<a href="/neck" className="block w-[16%] h-auto pt-20">
						<img src="/main page/neck_button.svg"
						className="rounded-full transition-shadow duration-300 hover:shadow-[0_15px_35px_rgba(77,38,0,0.9)]" alt="neck button"/>
					</a>
				</div>
				<div className="absolute inset-0 flex justify-around w-full z-10 pr-48 pl-2">
					<Image src="/main page/hips circle.svg" width={0} height={0} style={{ width: "22%", height: "auto" }} alt="hips circle"/>
					<Image src="/main page/knee circle.svg" width={0} height={0} style={{ width: "22%", height: "auto" }} alt="knee circle"/>
					<Image src="/main page/neck circle.svg" width={0} height={0} style={{ width: "22%", height: "auto" }} alt="neck circle"/>
				</div>
				<div className="absolute bottom-0 inset-x-0 z-20 flex justify-center pr-20 pb-5">
					<a href="/mindGame" className="inline-flex w-fit">
						<img src="/main page/Test your mind.svg" 
						className="rounded-md transition-shadow duration-300 hover:shadow-[0_15px_35px_rgba(114,176,244,255)]" width={0} height={0} style={{ width: "90%", height: "auto" }} alt="test your mind"/> 
					</a>
				</div>
			</div>
		</div>
		<Chatbox />
	</div>
);
}
