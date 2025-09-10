import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

// ... (coreFeatures, FeatureCard, studentProfiles, ProfileCard, vlogData, VlogCard, newsData, NewsCard components remain the same) ...
const coreFeatures = [
  { to: "/chat", title: "AI-Guided First-Aid", description: "Get immediate coping strategies from our interactive chatbot.", icon: "🤖" },
  { to: "/booking", title: "Confidential Booking", description: "Easily book appointments with on-campus counselors.", icon: "📅" },
  { to: "/resources", title: "Resource Hub", description: "Access videos, audio, and guides in multiple languages.", icon: "💡" },
  { to: "/peer-support", title: "Peer Support Forum", description: "Connect with others in a safe, anonymous space.", icon: "🤝" },
  { to: "/admin", title: "Wellness Tracking", description: "Monitor trends and insights (for authorized staff).", icon: "📊" },
];

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
        className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center opacity-0 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
        style={{ animation: `slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`, animationDelay: delay }}
    >
        <img src={imageUrl} alt={`Profile of ${name}`} className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-green-200" />
        <p className="text-gray-600 italic flex-grow">"{quote}"</p>
        <div className="mt-4 pt-4 border-t border-gray-200 w-full">
            <p className="font-bold text-green-800">{name}</p>
            <p className="text-sm text-gray-500">{location}</p>
        </div>
    </div>
);

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

// --- NEW: Organization Contact Form Component ---
const OrganizationContactForm = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', company: '', goal: '' });
  const [isVerified, setIsVerified] = useState(false);
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isVerified) {
      setStatus('error');
      return;
    }
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
          <svg className="h-16 w-16 mx-auto text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <h3 className="text-2xl font-bold text-green-900 mt-4">Thank You!</h3>
          <p className="text-gray-600 mt-2">Your request has been sent. Our team will get in touch with you shortly.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Form */}
        <div>
          <h3 className="text-3xl font-bold text-green-900">Bring MindWell to your Organization</h3>
          <p className="text-gray-600 mt-2 mb-6">Want to support your people with the skills they need to succeed? We do too. Let's talk.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First name" required className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"/>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last name" required className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"/>
            </div>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter a valid email address*" required className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"/>
            <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company*" required className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"/>
            <textarea name="goal" value={formData.goal} onChange={handleChange} placeholder="What is one workplace goal you want MindWell to help you reach?" rows="4" className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
            
            <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg bg-gray-50">
                <input id="captcha" name="captcha" type="checkbox" checked={isVerified} onChange={() => setIsVerified(!isVerified)} className="h-6 w-6 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                <label htmlFor="captcha" className="text-gray-700">I'm not a robot</label>
            </div>
            {status === 'error' && !isVerified && <p className="text-red-500 text-sm">Please verify you are not a robot.</p>}

            <button type="submit" disabled={status === 'submitting'} className={`w-full py-3 px-4 font-semibold rounded-lg shadow-md transition-all duration-300 ${status === 'submitting' ? 'bg-green-300 cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700'}`}>
              {status === 'submitting' ? 'Submitting...' : 'Submit'}
            </button>
            <p className="text-xs text-gray-500">By submitting this form, you agree to receive emails from MindWell. You can opt-out at any time.</p>
          </form>
        </div>
        {/* Right Side: Image */}
        <div className="hidden md:block">
          <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000" alt="Diverse team collaborating in an office" className="rounded-lg shadow-lg object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
};


// Main HomePage Component
const HomePage = () => {
  return (
    <>
      <style>
        {`
          @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-100%); } }
          .scrolling-wrapper:hover .scrolling-content { animation-play-state: paused; }
          @keyframes slideUp { from { opacity: 0; transform: translateY(30px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
          @keyframes popUp { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
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

          {/* Vlogs & News Section */}
          <section className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-3xl font-bold text-green-900 mb-8">Student Vlogs & Blogs</h3>
                <div className="space-y-8">
                  {vlogData.map((vlog, index) => (
                    <VlogCard key={index} {...vlog} delay={`${index * 200}ms`} />
                  ))}
                </div>
              </div>
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

          {/* --- UPDATED: Organization Contact Section --- */}
          <section className="py-16 px-8 bg-green-50">
            <div className="max-w-6xl mx-auto">
              <OrganizationContactForm />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;