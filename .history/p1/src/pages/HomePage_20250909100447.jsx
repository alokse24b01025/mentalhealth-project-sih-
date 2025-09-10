import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import banner from '../assets/ai_generated_banner.png';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 pt-20">
        <section className="text-center py-12 px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800">Your Journey to Mental Wellness Starts Here</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Confidential, accessible, and tailored psychological support for college students.</p>
          <img src={banner} alt="A calming, abstract image representing mental wellness" className="mt-8 mx-auto rounded-lg shadow-xl max-w-4xl" />
        </section>

        <section className="py-12 px-4 bg-white">
            <h3 className="text-3xl font-bold text-center text-blue-800 mb-8">Features</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="text-center p-6 border rounded-lg shadow-sm">
                    <div className="text-4xl text-blue-500 mb-4">🤖</div>
                    <h4 className="font-bold text-xl">AI-Guided First-Aid</h4>
                    <p className="text-gray-600 mt-2">An interactive chatbot for immediate coping strategies.</p>
                </div>
                <div className="text-center p-6 border rounded-lg shadow-sm">
                    <div className="text-4xl text-blue-500 mb-4">📅</div>
                    <h4 className="font-bold text-xl">Confidential Booking</h4>
                    <p className="text-gray-600 mt-2">Book appointments with on-campus counselors easily.</p>
                </div>
                <div className="text-center p-6 border rounded-lg shadow-sm">
                    <div className="text-4xl text-blue-500 mb-4">💡</div>
                    <h4 className="font-bold text-xl">Resource Hub</h4>
                    <p className="text-gray-600 mt-2">Access videos, audio, and guides in regional languages.</p>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;