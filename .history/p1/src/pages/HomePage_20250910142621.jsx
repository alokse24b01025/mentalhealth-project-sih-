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

// --- UPDATED: Vlogs Data and Component ---
const vlogData = [
  { title: "Finding Calm in Srinagar's Gardens", author: "by Aamir S.", imageUrl: "https://images.unsplash.com/photo-1613825032044-8a4fad604ab3?q=80&w=800" },
  { title: "Debunking Mental Health Myths in Jammu", author: "by Priya K.", imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800" },
  { title: "How I Built My Support System at College", author: "by Irfan M.", imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800" },
];

const VlogCard = ({ title, author, imageUrl, delay }) => (
  <div 
    className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 opacity-0 group"
    style={{ animation: `popUp 0.5s ease-out forwards`, animationDelay: delay }}
  >
    <div className="relative">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/400x225/e0e0e0/555555?text=Image+Error`; }}/>
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg className="h-16 w-16 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
      </div>
    </div>
    <div className="p-6">
      <h4 className="font-bold text-xl text-green-800">{title}</h4>
      <p className="text-sm text-gray-500 mt-2">{author}</p>
    </div>
  </div>
);

// --- UPDATED: News Data and Component ---
const newsData = [
  { headline: "Campus-wide data shows a 15% increase in student stress levels during exam season, highlighting the need for support.", source: "MindWell Insights" },
  { headline: "New study from the valley indicates mindfulness meditation is highly effective for students managing academic pressure.", source: "Wellness Today" },
  { headline: "Anonymous peer support forums are showing a significant positive impact on campus mental health, new trends reveal.", source: "Student Health Digest" },
];

const NewsCard = ({ headline, source, delay }) => (
  <div 
    className="bg-green-100 p-6 rounded-lg border-l-4 border-green-500 opacity-0 flex items-start gap-x-4"
    style={{ animation: `popUp 0.5s ease-out forwards`, animationDelay: delay }}
  >
    <div className="flex-shrink-0">
      <svg className="h-8 w-8 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    </div>
    <div>
      <p className="font-semibold text-gray-800">"{headline}"</p>
      <p className="text-sm text-green-700 mt-2 text-right">- {source}</p>
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
          @keyframes popUp {
            from {
                opacity: 0;
                transform: scale(0.9);
            }
            to {
                opacity: 1;
                transform: scale(1);
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
          
          {/* Student Profiles Section */}
          <section className="py-16 px-4 bg-green-50">
            <h3 className="text-3xl font-bold text-center text-green-900 mb-12">Inspiring Stories from Students</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
                {studentProfiles.map((profile, index) => (
                    <ProfileCard key={index} {...profile} delay={`${index * 100}ms`} />
                ))}
            </div>
          </section>

          {/* --- UPDATED: Vlogs & News Section --- */}
          <section className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Vlogs Column */}
              <div>
                <h3 className="text-3xl font-bold text-green-900 mb-8">Student Vlogs & Blogs</h3>
                <div className="space-y-8">
                  {vlogData.map((vlog, index) => (
                    <VlogCard key={index} {...vlog} delay={`${index * 200}ms`} />
                  ))}
                </div>
              </div>
              {/* News Column */}
              <div>
                <h3 className="text-3xl font-bold text-green-900 mb-8">Wellness Insights</h3>
                <div className="space-y-8">
                  {newsData.map((news, index) => (
                    <NewsCard key={index} {...news} delay={`${index * 200}ms`} />
                  ))}
                </div>
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