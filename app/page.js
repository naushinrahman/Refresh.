import Image from "next/image";
import Chatbox from "../component/button";

export default function Home() {
return (
	<div>
		<div className="flex flex-col items-center justify-center">
			<div className="logo-wrapper flex items-center justify-between w-full">
				<Image className="background-image" src="/main logo.svg" width={0} height={0} style={{ width: "52%", height: "auto", paddingLeft: "10%" }} alt="Refresh"/>
				<div className="flex justify-end py-10">
					<Image src="/ICON_right.svg" width={0} height={0} style={{ width: "75%", height: "auto" }} alt="talking-head"/>
				</div>
			</div>
			<div className="relative my-24 z-0">
				<Image src="/scroll_brown_box.svg" width={0} height={0} style={{ width: "90%", height: "auto" }} alt="scroll"/>
				<div className="absolute inset-0 flex justify-around w-full z-20 pr-48 pl-2">
					<a href="/hip" className="block w-[16%] h-auto pt-20">
						<img src="/hips_button.svg" alt="hips button"/>
					</a>
					<a href="/knees" className="block w-[16%] h-auto pt-20">
						<img src="/knee_button.svg" alt="knee button"/>
					</a>
					<a href="/neck" className="block w-[16%] h-auto pt-20">
						<img src="/neck_button.svg" alt="neck button"/>
					</a>
				</div>
				<div className="absolute inset-0 flex justify-around w-full z-10 pr-48 pl-2">
					<Image src="/hips circle.svg" width={0} height={0} style={{ width: "22%", height: "auto" }} alt="hips circle"/>
					<Image src="/knee circle.svg" width={0} height={0} style={{ width: "22%", height: "auto" }} alt="knee circle"/>
					<Image src="neck circle.svg" width={0} height={0} style={{ width: "22%", height: "auto" }} alt="neck circle"/>
				</div>
				<div className="absolute bottom-0 inset-x-0 z-20 flex justify-center pr-20">
					<a href="/mindGame" className="inline-flex w-fit">
						<img src="/Test your mind.svg" width={0} height={0} style={{ width: "90%", height: "auto" }} alt="test your mind"/> 
					</a>
				</div>
			</div>
		</div>
		<Chatbox />
	</div>
);
}
