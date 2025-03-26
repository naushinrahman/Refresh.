'use client'
import React, { useState } from 'react';
import Image from 'next/image';

function Chatbox() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const sendMessage = async () => {
    if (message.trim() !== '') {
      setMessages([...messages, { text: message, sender: 'user' }]);
      setMessage('');

      await getGeminiResponse(message);
    }
  };

  const getGeminiResponse = async (message) => {
    try {
		const response = await fetch("/api/gemini", {
			method: "POST",
			headers: {
			  "Content-Type": "application/json",
			},
			body: JSON.stringify({
				message: message + " (Keep the response short, polite and to the point.)",
			}),
		  });
	  
		  const responseText = await response.text();
		  const data = JSON.parse(responseText);
	  
		  const geminiResponse = data.candidates[0].content.parts[0].text;

		  const formattedResponse = geminiResponse
			.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
			.replace(/\*(.*?)\*/g, '<em>$1</em>')          
			.replace(/\n/g, '<br/>');

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: formattedResponse, sender: 'gemini' },
    ]);
    } catch (error) {
      console.error('Error:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Error getting response from Gemini.', sender: 'gemini' },
      ]);
    }
  };

return (
	<div style={styles.bigbox}>
		<div style={styles.imageContainer}>
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
				<Image src="/main_page/Hi there!.svg" width={0} height={0} style={{ width: "20%", height: "auto", paddingBottom: "3%" }} alt="Hi there!"/>
				<Image src="/main_page/Do you have any further questions_.svg" width={0} height={0} style={{ width: "70%", height: "auto" }} alt="questions"/>
			</div>
			<div style={styles.chat}>
				<div id="chat-container">
					<div id="chat-display" style={styles.chatDisplay}>
						{messages.map((msg, index) => (
							<Message key={index} message={msg.text} sender={msg.sender} />
						))}
					</div>
					<div style={{ ...styles.inputArea, maxWidth: '800px', margin: '0 auto' }}>
						<input
							type="text"
							id="message-input"
							value={message}
							onChange={handleMessageChange}
							placeholder="Type your message..."
							style={styles.messageInput}
						/>
						<button id="send-button" onClick={sendMessage} style={styles.sendButton}>
							Send
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
);
}

const Message = ({ message, sender }) => {
  return (
    <div style={sender === 'user' ? styles.userMessage : styles.geminiMessage}>
      <div dangerouslySetInnerHTML={{ __html: message }} />
    </div>
  );
};

const styles = {
  bigbox: {
    width: '100%',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '1300px',
    margin: '0 auto',
    marginTop: '20px',
	marginBottom: '20px',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    textAlign: 'center',
	justifyContent: 'center',
  },
  header1: {
    marginTop: '20px',
    color: '#BBA7A6',
    fontSize: '24px',
    fontWeight: 'bold',
    fontFamily: '"Lucida Console", "Courier New", monospace',
  },
  header2: {
    marginTop: '10px',
    color: '#443534',
    fontSize: '24px',
    fontWeight: 'bold',
    fontFamily: '"Lucida Console", "Courier New", monospace',
  },
  chat: {
	marginTop: '25px',
    width: '100%',
    borderRadius: '5px',
    padding: '20px',
  },
  chatDisplay: {
    maxHeight: '300px',
    overflowY: 'auto',
    marginBottom: '30px',
	padding: '5%',
  },
  inputArea: {
    display: 'flex',
    marginTop: '10px',
  },
  messageInput: {
    flex: 1,
    padding: '10px',
    borderRadius: '5px',
    border: '2px solid #B9DDFF',
    marginRight: '10px',
	color: 'black',
	fontSize: "28px"
  },
  sendButton: {
    padding: '10px',
    backgroundColor: 'rgba(114, 176, 244, 255)',
    color: 'white',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
	fontSize: "30px"
  },
  userMessage: {
    padding: '8px',
    marginBottom: '5px',
    borderRadius: '5px',
    backgroundColor: '#F9F6F1',
    textAlign: 'right',
	color: 'black',
	fontSize: "22px",
  },
  geminiMessage: {
    padding: '8px',
    marginBottom: '5px',
    borderRadius: '5px',
    backgroundColor: '#ECE5DD',
    textAlign: 'left',
	color: 'black',
	fontSize: "22px",
  },
};

export default Chatbox;
