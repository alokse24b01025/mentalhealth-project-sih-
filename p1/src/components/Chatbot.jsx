import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../AuthContext'; // Import useAuth to get user info

const Chatbot = ({ selectedLanguage }) => {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm here to offer support. Feel free to share what's on your mind.", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showCrisisAlert, setShowCrisisAlert] = useState(false); // State for crisis alert
  const messagesEndRef = useRef(null);
  const { currentUser } = useAuth(); // Get the currently logged-in user

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
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token || ''
        },
        body: JSON.stringify({ 
          message: currentInput,
          language: selectedLanguage, // Send selected language to backend
          userId: currentUser ? currentUser.uid : null, // Send user ID for personalization
        }),
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      
      // Check for a crisis flag from the backend
      if (data.crisisDetected) {
        setShowCrisisAlert(true);
      }

      const botMessage = { text: data.reply, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Failed to fetch from AI:", error);
      setMessages(prev => [...prev, { text: "Sorry, I see that you've not signed in. Please try again after loggin in.", sender: 'bot' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-white/70 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl p-4 min-h-0 relative">
      
      {/* Crisis Alert Overlay */}
      {showCrisisAlert && (
        <div className="absolute inset-0 bg-red-800/90 flex flex-col justify-center items-center z-20 rounded-2xl text-white text-center p-8">
          <h2 className="text-3xl font-bold">Immediate Support Required</h2>
          <p className="mt-4 text-lg">It seems like you are in distress. Please connect with a professional immediately.</p>
          <button 
            onClick={() => window.location.href = '/booking'} // Redirects to booking page
            className="mt-6 bg-white text-red-800 font-bold py-3 px-8 rounded-full text-lg hover:bg-red-100 transition-colors"
          >
            Connect to a Counselor Now
          </button>
          <p className="mt-4 text-sm">If this is an emergency, please contact local emergency services.</p>
        </div>
      )}

      {/* Message display area */}
      <div className="flex-1 overflow-y-auto mb-4 p-3 space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex items-end max-w-[85%] ${msg.sender === 'user' ? 'self-end ml-auto' : 'self-start'}`}>
            <div className={`p-4 rounded-2xl ${msg.sender === 'user' ? 'bg-green-600 text-white rounded-br-lg' : 'bg-gray-100 text-gray-800 rounded-bl-lg'}`}>
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

      {/* Input area */}
      <div className="flex items-center border-t border-gray-200 pt-4">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSend()}
          className="flex-1 rounded-full px-5 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-50"
          placeholder="Type your message..." disabled={isLoading || showCrisisAlert} />
        <button onClick={handleSend} disabled={isLoading || showCrisisAlert}
          className={`rounded-full p-3 ml-3 transition-colors ${isLoading || showCrisisAlert ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700'}`}
          aria-label="Send message">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
};

export default Chatbot;