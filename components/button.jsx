'use client'
import React, { useState } from 'react';

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

      // Call function to handle Gemini response or any other logic
      await getGeminiResponse(message);
    }
  };

  const getGeminiResponse = async (message) => {
    try {
      const apiKey = 'AIzaSyBPUFRQNB9kxwjLfPKXcespa-Z0Mhq1Tms'; // Replace with your actual API key
      const response = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.0-pro:generateContent?key=' + apiKey,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'Chatboxlication/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: message,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      const geminiResponse = data.candidates[0].content.parts[0].text;
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: geminiResponse, sender: 'gemini' },
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
        <img src="./Rectangle 17.svg" alt="Rectangle" width="1300" height="100" />
        <div style={styles.header1}>Hi there!</div>
        <div style={styles.header2}>Do you have any further questions?</div>

        <div style={styles.chat}>
          <div id="chat-container">
            <div id="chat-display">
              {messages.map((msg, index) => (
                <Message key={index} message={msg.text} sender={msg.sender} />
              ))}
            </div>
            <div style={styles.inputArea}>
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
      {message}
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
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
  },
  header1: {
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translateX(-50%)',
    color: '#BBA7A6',
    fontSize: '24px',
    fontWeight: 'bold',
    fontFamily: '"Lucida Console", "Courier New", monospace',
  },
  header2: {
    position: 'absolute',
    top: '35%',
    left: '50%',
    transform: 'translateX(-50%)',
    color: '#443534',
    fontSize: '24px',
    fontWeight: 'bold',
    fontFamily: '"Lucida Console", "Courier New", monospace',
  },
  chat: {
    position: 'absolute',
    top: '40%',
    left: '75%',
    transform: 'translateX(-50%)',
    width: '130%',
    backgroundColor: 'rgba(185, 221, 255, 0.7)',
    borderRadius: '5px',
    padding: '30px',
  },
  inputArea: {
    display: 'flex',
    marginTop: '10px',
  },
  messageInput: {
    width: '70%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #B9DDFF',
    marginRight: '10px',
  },
  sendButton: {
    width: '25%',
    padding: '10px',
    backgroundColor: '#B9DDFF',
    color: 'white',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  },
  userMessage: {
    padding: '8px',
    marginBottom: '5px',
    borderRadius: '5px',
    backgroundColor: '#F9F6F1',
    textAlign: 'right',
  },
  geminiMessage: {
    padding: '8px',
    marginBottom: '5px',
    borderRadius: '5px',
    backgroundColor: '#ECE5DD',
    textAlign: 'left',
  },
};

export default Chatbox;
