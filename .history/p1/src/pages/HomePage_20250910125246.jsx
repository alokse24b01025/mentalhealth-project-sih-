import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Define an array of features to display in the scrolling marquee
const coreFeatures = [
  { to: "/chat", title: "AI-Guided First-Aid", description: "Get immediate coping strategies from our interactive chatbot.", icon: "🤖" },
  { to: "/booking", title: "Confidential Booking", description: "Easily book appointments with on-campus counselors.", icon: "📅" },
  { to: "/resources", title: "Resource Hub", description: "Access videos, audio, and guides in multiple languages.", icon: "💡" },
  { to: "/peer-support", title: "Peer Support Forum", description: "Connect with others in a safe, anonymous space.", icon: "🤝" },
  { to: "/admin", title: "Wellness Tracking", description: "Monitor trends and insights (for authorized staff).", icon: "📊" },
];

// This component defines the look of a single clickable card
const FeatureCard = ({ to, title, description, icon }) => (
  <Link to={to} className="flex-shrink-0 w-[300px] h-[200px] mx-4 p-6 flex flex-col items-center justify-center text-center bg-white border border-green-100 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
    <div className="text-4xl mb-3">{icon}</div>
    <h4 className="font-bold text-xl text-green-800">{title}</h4>
    <p className="text-gray-600 text-sm mt-2">{description}</p>
  </Link>
);

const HomePage = () => {
  return (
    <>
      {/* This style block contains the CSS animation for the marquee effect */}
      <style>
        {`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-100%);
            }
          }
          .scrolling-wrapper:hover .scrolling-content {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="min-h-screen flex flex-col bg-green-50">
        <Header />
        <main className="flex-1 overflow-y-auto">
          {/* Hero Section */}
          <section className="text-center h-[450px] flex items-center justify-center bg-gradient-to-br from-green-100 to-green-200">
            <div className="px-4">
              <h2 className="text-4xl md:text-5xl font-extrabold text-green-900">Your Journey to Mental Wellness Starts Here</h2>
              <p className="mt-4 text-lg text-green-800 max-w-2xl mx-auto">Confidential, accessible, and tailored psychological support for college students.</p>
            </div>
          </section>

          {/* Scrolling Features Section */}
          <section className="py-16 bg-white">
            <h3 className="text-3xl font-bold text-center text-green-900 mb-12">Our Core Features</h3>
            <div className="scrolling-wrapper w-full overflow-hidden relative">
              <div className="scrolling-content flex" style={{ animation: `scroll 40s linear infinite` }}>
                {/* The list of features is duplicated to create the seamless loop effect */}
                {[...coreFeatures, ...coreFeatures].map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
