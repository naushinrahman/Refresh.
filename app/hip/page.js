'use client';

import { useState } from "react";
import Image from "next/image";

export default function Home() {
    const [message, setMessage] = useState("");

    // Handle change in message input (though now we will treat it as a link)
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const styles = {
        inputArea: {
            position: "absolute",
            bottom: "20%",  // Adjust position for the link
            width: "60%",   // Width of the link area
            marginTop: "2rem",  // Margin top for spacing
            textAlign: "center", // Center align the link text
        },
        inputLink: {
            fontSize: "10px",      // Make font smaller
            fontFamily: "Arial, sans-serif", // Set custom font family
            color: "#333",         // Set text color
            textDecoration: "none", // Remove default link underline
            backgroundColor: "transparent", // No background
            padding: "0",          // No padding, since it's just text now
            cursor: "pointer",     // Make it clickable
            fontWeight: "bold",     // Optional: Make it bold
        },
    };

	return (
		<div className="flex flex-col items-center justify-center">
			<Image
				src="/headddd 1.svg"
				width={0}
				height={0}
				style={{
					position: "absolute",
					width: "20%",
					height: "auto",
					paddingTop: "5%",
					marginTop: "-4%",
					right: "80%",
					top: "50%",
				}}
				alt="scroll"
			/>
			<Image
				src="/head_talk.svg"
				width={0}
				height={0}
				style={{
					position: "absolute",
					width: "30%",
					height: "114%",
					paddingTop: "30%",
					marginTop: "7%",
					right: "64%",
				}}
				alt="scroll"
			/>
			<Image
				src="/icon.svg"
				width={0}
				height={0}
				style={{
					position: "absolute",
					width: "10%",
					height: "auto",
					paddingTop: "0%",
					marginTop: "10%",
					right: "87%",
				}}
				alt="scroll"
			/>
			<Image
				src="/hips_notice.svg"
				width={0}
				height={0}
				style={{
					position: "absolute",
					width: "35%",
					height: "auto",
					paddingTop: "40%",
					marginTop: "9%",
					right: "23%",
				}}
				alt="scroll"
			/>
			<Image
				src="/hips_ins.svg"
				width={0}
				height={0}
				style={{
					position: "absolute",
					width: "20%",
					height: "auto",
					paddingTop: "20%",
					marginTop: "9%",
					right: "30.25%",
				}}
				alt="scroll"
			/>
			<Image
				src="/hips 2.svg"
				width={0}
				height={0}
				style={{
					position: "absolute",
					width: "20%",
					height: "auto",
					paddingTop: "25%",
					marginTop: "40%",
					right: "30.25%",
				}}
				alt="scroll"
			/>

			{/* Input Area (now as a link) */}
			<div style={styles.inputArea}>
				<a
					href="/hip2" // The link to navigate to
					rel="noopener noreferrer" // For security
					style={{ ...styles.inputLink, fontSize: "20px", color:"white" }} // Increase font size
				>
					The secret exercises 
				</a>
			</div>
		</div>
	);
}
