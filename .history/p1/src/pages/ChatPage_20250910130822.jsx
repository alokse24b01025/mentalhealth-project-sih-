import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';

const ChatPage = () => {
  // State to manage the selected language
  const [language, setLanguage] = useState('English');

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-green-50 via-teal-50 to-emerald-100">
      <Header />
      
      <main className="flex-1 w-full flex flex-col items-center p-4 pt-36 overflow-hidden">
        
        <div className="w-full max-w-4xl flex-1 flex flex-col min-h-0">
          
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold text-green-900">AI-Guided First-Aid Support</h2>
            <p className="mt-1 text-gray-600">Your confidential space to talk. Type a message to begin.</p>
          </div>

          {/* Language Selection Dropdown */}
          <div className="flex justify-center mb-4">
            <div className="relative">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="appearance-none w-48 bg-white border border-gray-300 rounded-full px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="English">English</option>
                <option value="Hindi">हिंदी (Hindi)</option>
                <option value="Tamil">தமிழ் (Tamil)</option>
                <option value="Telugu">తెలుగు (Telugu)</option>
                {/* Add other regional languages as needed */}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>

          {/* Pass the selected language as a prop to the Chatbot */}
          <Chatbot selectedLanguage={language} />
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ChatPage;