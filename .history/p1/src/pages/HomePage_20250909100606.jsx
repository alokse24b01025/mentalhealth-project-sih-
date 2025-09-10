import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import peaceBackground from '../assets/peace-background.png'; // Make sure you've saved the new background image here

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      <Header />
      <main className="flex-1">
        {/* Hero Section with new background */}
        <section className="relative text-center h-[500px] flex items-center justify-center">
          <img 
            src={peaceBackground} 
            alt="Calming abstract background representing mental peace" 
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10"></div> {/* Dark overlay for text readability */}
          <div className="relative z-20 text-white px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold">Your Journey to Mental Wellness Starts Here</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto">Confidential, accessible, and tailored psychological support for college students.</p>
          </div>
        </section>

        {/* Clickable Features Section */}
        <section className="py-16 px-4 bg-white">
          <h3 className="text-3xl font-bold text-center text-green-900 mb-12">Our Core Features</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

            {/* AI-Guided First-Aid Kit - CLICKABLE */}
            <Link to="/chat" className="block p-8 border border-green-100 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 bg-white">
              <div className="text-center">
                {/* New SVG Icon */}
                <div className="flex items-center justify-center h-16 w-16 mx-auto bg-green-100 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="font-bold text-xl text-green-800">AI-Guided First-Aid</h4>
                <p className="text-gray-600 mt-2">Click to open our interactive chatbot for immediate coping strategies.</p>
              </div>
            </Link>

            {/* Confidential Booking - CLICKABLE */}
            <Link to="/booking" className="block p-8 border border-green-100 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 bg-white">
              <div className="text-center">
                {/* New SVG Icon */}
                <div className="flex items-center justify-center h-16 w-16 mx-auto bg-green-100 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-bold text-xl text-green-800">Confidential Booking</h4>
                <p className="text-gray-600 mt-2">Click to easily book appointments with on-campus counselors.</p>
              </div>
            </Link>

            {/* Resource Hub - CLICKABLE */}
            <Link to="/resources" className="block p-8 border border-green-100 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 bg-white">
              <div className="text-center">
                {/* New SVG Icon */}
                <div className="flex items-center justify-center h-16 w-16 mx-auto bg-green-100 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="font-bold text-xl text-green-800">Resource Hub</h4>
                <p className="text-gray-600 mt-2">Click to access videos, audio, and guides in regional languages.</p>
              </div>
            </A>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;