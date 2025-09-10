import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const ChatPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-100 pt-20 flex justify-center items-center p-4">
        <div className="w-full max-w-4xl h-[80vh]">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-4">AI-Guided First-Aid Support</h2>
          <Chatbot />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ChatPage;