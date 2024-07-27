import React, { useState } from 'react';
import './Chatbot.css';
import { NavLink } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Chatbot() {
  const [messages, setMessages] = useState([
    { text: 'Hi, I am your Cudemy personal assistant!', sender: 'bot' },
    { text: 'What do you want to learn? Roadmap or Videos', sender: 'bot' },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleUserMessage = () => {
    if (inputMessage.trim() === '') {
      return; // Prevent sending empty messages
    }

    // Echo back the user's input
    setMessages([...messages, { text: inputMessage, sender: 'user' }]);

    // Check user input for keywords and respond accordingly
    switch (inputMessage.trim().toLowerCase()) {
      case 'roadmap':
        setMessages([...messages, { text: 'Write Roadmap-coursename', sender: 'bot' }]);
        break;
      case 'videos':
        setMessages([...messages, { text: 'Write Videos-coursename', sender: 'bot' }]);
        break;
      case 'roadmap-webdevelopment':
        setMessages([
          ...messages,
          { text: 'Frontend: HTML ➔ CSS ➔ JavaScript ➔ React.js (or Vue.js)', sender: 'bot' },
          { text: 'Backend: Node.js (or Django/Flask for Python) ➔ Express.js ➔ MongoDB (or SQL databases)', sender: 'bot' }
        ]);
        break;
        
      case 'videos-react.js':
        setMessages([
          ...messages,
          { text: 'Try these courses', sender: 'bot' },
          { text: 'https://www.youtube.com/watch?v=EHTWMpD6S_0 ', sender: 'bot' },
          { text: 'https://www.youtube.com/watch?v=EHTWMpD6S_0 ', sender: 'bot' }
        ])
        break;
      default:
        setMessages([...messages, { text: 'Keyword not found', sender: 'bot' }]);
    }

    setInputMessage(''); // Clear input after sending
  };

  // Function to detect URLs in message text and replace them with anchor tags
  const formatMessage = (text) => {
    // Regular expression to detect URLs
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    // Replace URLs with anchor tags
    return text.replace(urlRegex, (url) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`);
  };

  return (
    <>
      <NavLink to='/'>
        <div className="back_signin">
          <ArrowBackIcon />
        </div>
      </NavLink>
      <div className="chatbot">
        <div className="chat-window">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`} dangerouslySetInnerHTML={{ __html: formatMessage(message.text) }} />
          ))}
        </div>
        <div className="input-area">
          <input
            type="text"
            placeholder="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleUserMessage();
              }
            }}
          />
          <button onClick={handleUserMessage}>Send</button>
        </div>
      </div>
    </>
  );
}

export default Chatbot;
