'use client'
import { Lexend_Zetta } from "next/font/google";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <div>
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
      		<Image src="/head.svg" width={0} height={0} style={{ position: 'absolute', width: "20%", paddingTop: "5%", marginTop: '-4%', right: '80%', top: '50%' }} alt="head" />
			<div className="relative w-[30%] flex flex-col items-center">
				<Image src="brown_text_box.svg" className="absolute top-0 left-0 w-full h-auto z-0" width={0} height={0} style={{ width: "100%", height: "auto" }} alt="Brown Text Box"/>
			</div>
		</div>
      {["rect1", "rect2", "rect3", "rect4"].map((rect, index) => (
        <Image key={index} onClick={() => handleImageClick(index)} src={`/${rect}.svg`} width={0} height={0} 
          style={{ 
            position: 'absolute', 
            width: "15%", 
            paddingTop: "5%", 
            marginTop: '5px', 
            right: index % 2 === 0 ? '41%' : '25%', 
            top: index < 2 ? '15%' : '45%',
            transition: 'width 0.3s ease-in-out'
          }} 
          alt={`rect${index + 1}`} />
      ))}
    </div>
  );
};
