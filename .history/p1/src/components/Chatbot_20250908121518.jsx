import React, { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = () => {
    if (input.trim() === '') return;

    setMessages(prev => [...prev, { text: input, sender: 'user' }]);

    let botResponse = 'Thank you for sharing. I hear you. Remember that it\'s okay to feel this way.';
    if (input.toLowerCase().includes('stress')) {
      botResponse = 'Dealing with stress is tough. Try a simple breathing exercise. Inhale for 4 seconds, hold for 4, and exhale for 6.';
    } else if (input.toLowerCase().includes('counselor') || input.toLowerCase().includes('help')) {
      botResponse = 'It sounds like you might need to talk to a professional. You can book a confidential appointment with our on-campus counselors through the Booking page.';
    } else if (input.toLowerCase().includes('hello')) {
      botResponse = 'Hello! I\'m here to provide some support and resources. How are you feeling today?';
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
    }, 1000);

    setInput('');
  };

  return (
    <div className="flex flex-col h-full bg-white border border-gray-200 rounded-lg shadow-xl p-4">
      <div className="flex-1 overflow-y-auto mb-4 p-2 space-y-3">
        {messages.map((msg, index) => (
          <div key={index} className={`p-4 rounded-xl max-w-[80%] ${msg.sender === 'user' ? 'bg-blue-500 text-white self-end ml-auto' : 'bg-gray-200 text-gray-800'}`}>
            <p className="break-words">{msg.text}</p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 rounded-full px-5 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message..."
        />
        <button onClick={handleSend} className="bg-blue-500 text-white rounded-full px-6 py-3 ml-2 hover:bg-blue-600 transition-colors">Send</button>
      </div>
    </div>
  );
};

export default Chatbot;