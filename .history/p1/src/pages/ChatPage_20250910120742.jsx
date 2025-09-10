import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const ChatPage = () => {
  return (
    // This creates a full-height, vertical layout for the entire page
    <div className="h-screen flex flex-col bg-gradient-to-br from-green-50 via-teal-50 to-emerald-100">
      <Header />
      
      {/* --- FIX APPLIED HERE: Added 'pt-36' to push content down --- */}
      {/* This main section will now align its content to the top, below the header */}
      <main className="flex-1 w-full flex flex-col items-center p-4 pt-36 overflow-hidden">
        
        {/* --- FIX APPLIED HERE: Replaced flex-1 with a smaller, fixed height --- */}
        {/* This container now has a smaller, defined height */}
        <div className="w-full max-w-4xl h-[65vh] flex flex-col">
          
          {/* The title is now guaranteed to be visible at the top of the content area */}
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold text-green-900">AI-Guided First-Aid Support</h2>
            <p className="mt-1 text-gray-600">Your confidential space to talk. Type a message to begin.</p>
          </div>

          {/* The Chatbot component will fill the remaining space below the title */}
          <Chatbot />
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ChatPage;