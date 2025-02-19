'use client'
import { useState } from 'react';
import Image from "next/image";

export default function Home() {

    // Define images and generator image for the button
    const images = [
        { src: '/single knee copy 1.svg', style: { position: 'absolute', width: "40%", height: "auto", paddingTop: "5%", marginTop: '-4%', right: '70%', top: '50%'}, alt: 'Image 1' },
        { src: '/hips 3.svg', alt: 'Image 2' },
        { src: '/overhead copy 1.svg', alt: 'Image 3' },
    ];

	const generatorImage = { src: '/generator.svg', alt: 'Click to go to next image' };

    // State to store the index of the currently displayed image
    const [currentIndex, setCurrentIndex] = useState(0);

    const showNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop back to 0 when we reach the end
    };
    <div>
    backgroundColor: 'rgba(185, 221, 255, 0.7)'  </div>


    return (
        <div className="flex flex-col items-center justify-center">
            <Image 
                src="/headddd 1.svg"  
                width={0} 
                height={0} 
                style={{ position: 'absolute', width: "15%", height: "auto", paddingTop: "5%", marginTop: '14%', right: '85%', top: '20%' }} 
                alt="scroll" 
            />

            <Image 
                src="/icon.svg" 
                width={0} 
                height={0} 
                style={{ position: 'absolute', width: "10%", height: "auto", paddingTop: "0%", marginTop: '-3%', right: '87%' }} 
                alt="scroll" 
            />
            <Image 
                src="/hips_ins.svg" 
                width={0} 
                height={0} 
                style={{ position: 'absolute', width: "20%", height: "auto", paddingTop: "20%", marginTop: '9%', right: '30.25%' }} 
                alt="scroll" 
            />

            {/* Main content */}
            <div className="flex flex-col items-center justify-center space-y-4">
                <div className="flex justify-center space-x-4 z-0">
					<img src="/Rectangle 18.svg" alt="brown rectangle" />
					<img src="/Rectangle 18.svg" alt="brown rectangle" />
				</div>
                <div onClick={showNextImage} className="cursor-pointer z-10">
                    <Image
                        src={generatorImage.src} 
                        alt={generatorImage.alt}
                        width={150}  // Increased the size
                        height={150} // Increased the size
                        className="rounded shadow-lg"
                        style={{
                            position: 'absolute',
                            bottom: '20%',   // Move it lower (increases the distance from the top)
                            right: '10%',    // Move it more to the right
                            transform: 'translateX(50%)',  // Optional: centers it horizontally
                        }}
                    />
					</div>

                {/* Display the current image in order */}
                <div className="flex justify-center">
                    <Image
                        src={images[currentIndex].src}
                        alt={images[currentIndex].alt}
                        width={200} 
                        height={200} 
                        className="border rounded shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
}
