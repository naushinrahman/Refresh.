'use client'
import { useState } from 'react';
import Image from 'next/image';

const Generate = ({ images, currentIndex }) => {
    return (
		<div className="flex flex-row justify-center">
			<Image
				src={images[currentIndex].src}
				alt={images[currentIndex].alt}
				width={0} 
				height={0}
				style={{width: "70%", height: "auto", zIndex: 10 }}/>
		</div>
    );
}

export default Generate;