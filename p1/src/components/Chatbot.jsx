import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../AuthContext'; 

const Chatbot = ({ selectedLanguage }) => {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm here to offer support. Feel free to share what's on your mind.", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showCrisisAlert, setShowCrisisAlert] = useState(false);
  const messagesEndRef = useRef(null);
  const { currentUser } = useAuth(); 

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages, isLoading]);

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const currentUserId = currentUser?._id || currentUser?.uid || null;
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
          language: selectedLanguage,
          userId: currentUserId,
        }),
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      
      if (data.crisisDetected) {
        setShowCrisisAlert(true);
      }

      const botMessage = { text: data.reply, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Failed to fetch from AI:", error);
      setMessages(prev => [...prev, { 
        text: "I'm having trouble connecting. Please ensure you are logged in.", 
        sender: 'bot' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    /* The outer container must have a defined height for internal scrolling to work */
    <div className="flex flex-col h-full bg-slate-900/80 backdrop-blur-xl border border-slate-800 shadow-2xl rounded-3xl p-4 relative overflow-hidden">
      
      {/* Crisis Alert Overlay */}
      {showCrisisAlert && (
        <div className="absolute inset-0 bg-red-950/95 flex flex-col justify-center items-center z-50 rounded-2xl text-white text-center p-8">
          <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-6 animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-3xl font-black tracking-tighter uppercase">You Are Not Alone</h2>
          <p className="mt-4 text-slate-200 max-w-sm">Our AI has detected distress. Please speak with a counselor immediately.</p>
          <button onClick={() => window.location.href = '/booking'} className="mt-8 bg-white text-red-900 font-black py-4 px-10 rounded-2xl text-lg hover:bg-red-100 transition-all shadow-xl">
            Connect to Counselor Now
          </button>
          <button onClick={() => setShowCrisisAlert(false)} className="mt-4 text-red-400 text-sm font-bold hover:underline">
            Dismiss (I'm okay now)
          </button>
        </div>
      )}

      {/* SCROLLABLE AREA: 
          - flex-1: Takes up all available space between header and footer
          - overflow-y-auto: Enables vertical scrolling when content exceeds height
          - min-h-0: Essential for nested flex scrolling to work properly
      */}
      <div className="flex-1 overflow-y-auto mb-4 p-2 space-y-6 custom-scrollbar min-h-0">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-4 rounded-2xl shadow-sm text-sm leading-relaxed ${
              msg.sender === 'user' 
                ? 'bg-emerald-600 text-white rounded-br-none border border-emerald-500' 
                : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700'
            }`}>
              <p className="break-words">{msg.text}</p>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="p-4 rounded-2xl bg-slate-800 border border-slate-700 flex gap-1.5 items-center">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* FIXED INPUT AREA: Stays at bottom */}
      <div className="flex items-center gap-3 bg-slate-950/50 p-2 rounded-2xl border border-slate-800 shrink-0">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 bg-transparent px-4 py-3 text-white placeholder-slate-600 focus:outline-none text-sm font-medium"
          placeholder={`Speak freely in ${selectedLanguage}...`} 
          disabled={isLoading || showCrisisAlert} 
        />
        <button 
          onClick={handleSend} 
          disabled={isLoading || showCrisisAlert || !input.trim()}
          className={`p-3 rounded-xl transition-all shadow-lg ${
            isLoading || showCrisisAlert || !input.trim()
              ? 'bg-slate-800 text-slate-600 cursor-not-allowed' 
              : 'bg-emerald-600 text-white hover:bg-emerald-500 active:scale-90 shadow-emerald-900/20'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-90" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </button>
      </div>
      <p className="text-center text-[9px] text-slate-600 mt-2 font-black uppercase tracking-[0.2em] shrink-0">End-to-End Encrypted</p>
    </div>
  );
};

export default Chatbot;