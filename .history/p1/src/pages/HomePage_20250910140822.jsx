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

// --- NEW: Student Profile Data and Component ---
const studentProfiles = [
  { name: "Aamir S.", location: "Srinagar", quote: "The chatbot helped me manage my anxiety during late-night study sessions. It felt like a supportive friend.", imageUrl: "https://placehold.co/100x100/a7f3d0/166534?text=AS" },
  { name: "Priya K.", location: "Jammu", quote: "Booking an anonymous session was the first step. It's a safe and confidential space that really helps.", imageUrl: "https://placehold.co/100x100/67e8f9/155e75?text=PK" },
  { name: "Irfan M.", location: "Anantnag", quote: "The peer support forum is amazing. Realizing that other students are going through the same struggles makes you feel less alone.", imageUrl: "https://placehold.co/100x100/fde047/854d0e?text=IM" },
  { name: "Sunita D.", location: "Kathua", quote: "I found a guided meditation in Dogri that made a huge difference. Having resources in my own language is incredible.", imageUrl: "https://placehold.co/100x100/f9a8d4/9d2667?text=SD" },
  { name: "Rizwan A.", location: "Baramulla", quote: "Being able to reschedule my appointment easily without any academic penalty was a huge relief during my exams.", imageUrl: "https://placehold.co/100x100/a5b4fc/3730a3?text=RA" },
  { name: "Jasleen K.", location: "Poonch", quote: "The breathing exercises suggested by the AI are simple but so effective. I use them all the time now.", imageUrl: "https://placehold.co/100x100/fca5a5/991b1b?text=JK" },
  { name: "Aditya V.", location: "Udhampur", quote: "I was hesitant, but the confidentiality promise made me try it. It's been a game-changer for my mental peace.", imageUrl: "https://placehold.co/100x100/86efac/14532d?text=AV" },
  { name: "Mehak G.", location: "Samba", quote: "The resources on managing academic stress are practical and easy to follow. Highly recommended for all students.", imageUrl: "https://placehold.co/100x100/fdba74/9a3412?text=MG" },
  { name: "Faisal B.", location: "Kupwara", quote: "Connecting with a counselor via tele-counselling was so convenient since I couldn't be on campus.", imageUrl: "https://placehold.co/100x100/bae6fd/0c4a6e?text=FB" },
  { name: "Simran T.", location: "Reasi", quote: "Just knowing this platform exists and is available 24/7 provides a sense of security and support.", imageUrl: "https://placehold.co/100x100/d8b4fe/581c87?text=ST" },
];

const ProfileCard = ({ name, location, quote, imageUrl, delay }) => (
    <div 
        className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center opacity-0"
        style={{ animation: `slideUp 0.6s ease-out forwards`, animationDelay: delay }}
    >
        <img src={imageUrl} alt={`Profile of ${name}`} className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-green-200" />
        <p className="text-gray-600 italic flex-grow">"{quote}"</p>
        <div className="mt-4 pt-4 border-t border-gray-200 w-full">
            <p className="font-bold text-green-800">{name}</p>
            <p className="text-sm text-gray-500">{location}</p>
        </div>
    </div>
);

const HomePage = () => {
  return (
    <>
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
          
          {/* --- UPDATED: Student Profiles Section with Animation --- */}
          <section className="py-16 px-4 bg-green-50">
            <h3 className="text-3xl font-bold text-center text-green-900 mb-12">Inspiring Stories from Students</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
                {studentProfiles.map((profile, index) => (
                    <ProfileCard key={index} {...profile} delay={`${index * 100}ms`} />
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