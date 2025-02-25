'use client'
import { useState } from 'react';
import Image from "next/image";

export default function Home() {
	const images = [
		{ src: '/hips page/hips 1.svg', style: {position: 'absolute', }, alt: 'Image 1' },
		{ src: '/hips page/hips 2.svg', style: {position: 'absolute', }, alt: 'Image 2' },
		{ src: '/hips page/hips 3.svg', style: {position: 'absolute', }, alt: 'Image 3' },
	];

	const generatorImage = { src: '/generate button.svg', alt: 'Click to go to next image' };

    const [currentIndex, setCurrentIndex] = useState(0);

    const showNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };


    return (
        <div className="flex flex-col items-center">
				<Image
					src={images[currentIndex].src}
					alt={images[currentIndex].alt}
					width={0} 
					height={0}
					style={{width: "70%", height: "auto", zIndex: 10, paddingBottom: "15%"}}/>

				<Image
					src={generatorImage.src} 
					alt={generatorImage.alt}
					width={0} 
					height={0}
					style={{width: "50%", height: "auto",}}
					className="rounded-full shadow-lg transition-shadow duration-300 hover:shadow-[0_15px_30px_rgba(114,176,244,255)]"
					onClick={showNextImage}
					/>
		</div>
    );
}
