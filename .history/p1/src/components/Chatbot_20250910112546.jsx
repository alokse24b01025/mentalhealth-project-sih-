import React, { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm here to offer support. Feel free to share what's on your mind.", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: currentInput }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const botMessage = { text: data.reply, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Failed to fetch from AI:", error);
      setMessages(prev => [...prev, { text: "Sorry, I'm having trouble connecting right now. Please try again later.", sender: 'bot' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // --- CHANGE IS HERE ---
    // This container now grows to fill the space from its parent
    <div className="flex-1 flex flex-col bg-white/70 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl p-4 min-h-0">
      
      {/* This message area is now the ONLY scrollable part */}
      <div className="flex-1 overflow-y-auto mb-4 p-3 space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex items-end max-w-[85%] ${msg.sender === 'user' ? 'self-end ml-auto' : 'self-start'}`}>
            <div className={`p-4 rounded-2xl ${
              msg.sender === 'user' 
              ? 'bg-green-600 text-white rounded-br-lg' 
              : 'bg-gray-100 text-gray-800 rounded-bl-lg'
            }`}>
              <p className="break-words">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex items-end self-start">
            <div className="p-4 rounded-2xl max-w-[80%] bg-gray-100 text-gray-800 rounded-bl-lg">
              <p className="animate-pulse">AI is thinking...</p>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex items-center border-t border-gray-200 pt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSend()}
          className="flex-1 rounded-full px-5 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50"
          placeholder="Type your message..."
          disabled={isLoading}
        />
        <button 
          onClick={handleSend} 
          disabled={isLoading}
          className={`rounded-full p-3 ml-3 transition-colors ${
            isLoading 
            ? 'bg-gray-300 cursor-not-allowed' 
            : 'bg-green-600 text-white hover:bg-green-700'
          }`}
          aria-label="Send message"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Chatbot;