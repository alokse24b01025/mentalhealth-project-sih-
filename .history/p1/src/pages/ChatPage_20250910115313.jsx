import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chatbot from '../components-Chatbot';

const ChatPage = () => {
  return (
    // This creates a full-height, vertical layout for the entire page
    <div className="h-screen flex flex-col bg-gradient-to-br from-green-50 via-teal-50 to-emerald-100">
      <Header />
      
      {/* This main section takes up all remaining space and centers its content */}
      <main className="flex-1 w-full flex flex-col justify-center items-center p-4 overflow-hidden">
        
        {/* This container holds all chat UI and fills the main area without overflowing */}
        <div className="w-full max-w-4xl flex-1 flex flex-col min-h-0">
          
          {/* The title is now guaranteed to be visible */}
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