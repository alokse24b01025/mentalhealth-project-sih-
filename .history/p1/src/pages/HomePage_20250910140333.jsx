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

// --- UPDATED: Testimonial Data and Component ---
const testimonials = [
  { name: "Aamir S.", location: "Srinagar", quote: "Being far from home for college was tough, especially with exam pressure. The chatbot helped me manage my anxiety during late-night study sessions. It felt like a supportive friend who truly understood." },
  { name: "Priya K.", location: "Jammu", quote: "I was hesitant to talk to anyone about the stress I was feeling. Booking an anonymous session through MindWell was the first step. It's a safe and confidential space that really helps you feel heard." },
  { name: "Irfan M.", location: "Student", quote: "The peer support forum is amazing. Realizing that other students are going through the same struggles makes you feel less alone. It’s a judgment-free zone where we can all support each other." },
];

const TestimonialCard = ({ name, location, quote, delay }) => (
    <div 
        className="bg-white p-8 rounded-xl shadow-lg flex flex-col relative overflow-hidden opacity-0"
        style={{ animation: `slideUp 0.6s ease-out forwards`, animationDelay: delay }}
    >
        <svg className="absolute -top-2 -left-2 w-20 h-20 text-green-50 z-0" fill="currentColor" viewBox="0 0 32 32">
            <path d="M9.33,12.44C10.84,14.61,11,16.23,11,17.26a4,4,0,0,1-4,4,1,1,0,0,1,0-2,2,2,0,0,0,2-2c0-2.3-2.19-5.18-4.4-8.15C2.86,5.86,2.68,5.7,2.5,5.55A1,1,0,0,1,4,4.24c3.41,2.54,5.43,5.49,5.33,8.2Z"/>
            <path d="M21.33,12.44c1.51,2.17,1.67,3.79,1.67,4.82a4,4,0,0,1-4,4,1,1,0,0,1,0-2,2,2,0,0,0,2-2c0-2.3-2.19-5.18-4.4-8.15C14.86,5.86,14.68,5.7,14.5,5.55a1,1,0,0,1,1.5-1.31c3.41,2.54,5.43,5.49,5.33,8.2Z"/>
        </svg>
        <p className="text-gray-600 italic flex-grow z-10 relative">"{quote}"</p>
        <div className="mt-4 pt-4 border-t border-gray-200 z-10 relative">
            <p className="font-bold text-green-800">{name}</p>
            <p className="text-sm text-gray-500">{location}</p>
        </div>
    </div>
);

const HomePage = () => {
  return (
    <>
      {/* --- UPDATED: New animation added for testimonials --- */}
      <style>
        {`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-100%); }
          }
          .scrolling-wrapper:hover .scrolling-content {
            animation-play-state: paused;
          }
          @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(40px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
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
                {[...coreFeatures, ...coreFeatures].map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>
            </div>
          </section>
          
          {/* --- UPDATED: Testimonials Section with Animation --- */}
          <section className="py-16 px-4 bg-green-50">
            <h3 className="text-3xl font-bold text-center text-green-900 mb-12">Hear From Our Community</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} delay={`${index * 200}ms`} />
                ))}
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
