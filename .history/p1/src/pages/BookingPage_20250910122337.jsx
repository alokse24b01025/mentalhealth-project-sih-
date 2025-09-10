import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { mockCounselors } from '../data/mockCounselors';

// This is the redesigned, themed card for displaying a single counselor.
const CounselorCard = ({ counselor }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 overflow-hidden flex flex-col sm:flex-row items-center">
      <img 
        src={`https://placehold.co/200x200/a7f3d0/166534?text=${counselor.name.split(' ').map(n=>n[0]).join('')}`}
        alt={`Portrait of ${counselor.name}`} 
        className="w-full h-48 sm:h-full sm:w-48 object-cover"
        onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/200x200/e0e0e0/555555?text=Image+Not+Found`; }}
      />
      <div className="p-6 flex-1">
        <h3 className="text-2xl font-bold text-green-900">{counselor.name}</h3>
        <p className="text-md text-green-700 font-semibold mt-1">{counselor.specialty}</p>
        <p className="text-gray-600 mt-4">
          Dedicated to providing a safe and supportive environment for students to navigate their challenges.
        </p>
        <button className="mt-6 w-full sm:w-auto bg-green-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-700 transition-colors">
          Book a Session
        </button>
      </div>
    </div>
  );
};


// This is the main page component with the corrected layout.
const BookingPage = () => {
  return (
    // This creates a full-height, vertical layout for the entire page
    <div className="h-screen flex flex-col bg-green-50">
      <Header />
      
      {/* This main section takes up all remaining space and handles its own scrolling */}
      <main className="flex-1 overflow-y-auto p-8 pt-40">
        
        {/* The title is now guaranteed to be visible */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-900">Confidential Booking System</h2>
          <p className="mt-2 text-lg text-gray-700">Connect with our on-campus mental health professionals.</p>
        </div>
        
        {/* The grid now uses the redesigned CounselorCard */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {mockCounselors.map(counselor => (
            <CounselorCard key={counselor.id} counselor={counselor} />
          ))}
        </div>
        
        <p className="text-center mt-12 text-gray-600">Please note: Clicking "Book a Session" will open a scheduling tool (feature to be implemented).</p>

      </main>
      
      <Footer />
    </div>
  );
};

export default BookingPage;