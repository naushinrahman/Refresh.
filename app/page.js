import Image from "next/image";

export default function Home() {
return (
<div className="flex flex-col items-center justify-center">
	<div className="logo-wrapper flex items-center justify-between w-full">
		<Image className="background-image" src="/main logo.svg" width={0} height={0} style={{ width: "52%", height: "auto", paddingLeft: "10%" }} alt="Refresh"/>
		<div className="flex justify-end py-10">
			<Image src="/ICON_right.svg" width={0} height={0} style={{ width: "75%", height: "auto" }} alt="talking-head"/>
		</div>
	</div>
	<div className="relative flex justify-start my-24 z-0">
		<Image src="/scroll_brown_box.svg" width={0} height={0} style={{ width: "90%", height: "auto" }} alt="scroll"/>
		<div className="absolute inset-0 flex justify-around w-full z-20 pr-52 pl-10 pb-48">
			<Image src="/hips_button.svg" width={0} height={0} style={{ width: "18%", height: "auto" }} alt="hips button"/>
			<Image src="/knee_button.svg" width={0} height={0} style={{ width: "18%", height: "auto" }} alt="knee button"/>
			<Image src="/neck_button.svg" width={0} height={0} style={{ width: "18%", height: "auto" }} alt="neck button"/>
		</div>
		<div className="absolute inset-0 flex justify-around w-full z-10 pr-48 pl-2">
			<Image src="/hips circle.svg" width={0} height={0} style={{ width: "22%", height: "auto" }} alt="hips circle"/>
			<Image src="/knee circle.svg" width={0} height={0} style={{ width: "22%", height: "auto" }} alt="knee circle"/>
			<Image src="neck circle.svg" width={0} height={0} style={{ width: "22%", height: "auto" }} alt="neck circle"/>
		</div>
	</div>
</div>
);
}
