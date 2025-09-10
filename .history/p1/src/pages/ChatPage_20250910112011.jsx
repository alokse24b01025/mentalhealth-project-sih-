import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const ChatPage = () => {
  return (
    // Updated background to match the theme
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-teal-50 to-emerald-100">
      <Header />
      
      {/* --- FIX APPLIED HERE: Increased top padding --- */}
      <main className="flex-1 w-full flex justify-center items-center p-4 pt-36">
        
        {/* Main container for the chat interface */}
        <div className="w-full max-w-4xl h-[75vh] flex flex-col">
          
          {/* Redesigned Title Section */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-green-900">AI-Guided First-Aid Support</h2>
            <p className="mt-1 text-gray-600">Your confidential space to talk. Type a message to begin.</p>
          </div>

          {/* The Chatbot component itself (which is already styled) */}
          <Chatbot />
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ChatPage;