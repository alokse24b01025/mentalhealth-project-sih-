import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// --- UPDATED: Counselor data moved here with reliable images ---
const mockCounselors = [
  {
    id: 1,
    name: "Dr. Ananya Sharma",
    specialty: "Anxiety & Depression",
    image: "https://images.unsplash.com/photo-1555231908-410a08e1b8b8?w=500&auto=format&fit=crop&q=60",
    availability: ["Mon", "Wed", "Fri"]
  },
  {
    id: 2,
    name: "Mr. Raj Singh",
    specialty: "Academic & College Stress",
    image: "https://images.unsplash.com/photo-1590086782792-42dd2350150d?w=500&auto=format&fit=crop&q=60",
    availability: ["Tue", "Thu", "Sat"]
  },
  {
    id: 3,
    name: "Ms. Priya Kumar",
    specialty: "Social Isolation & Peer Pressure",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60",
    availability: ["Mon", "Wed", "Sat"]
  },
  {
    id: 4,
    name: "Dr. Sameer Khan",
    specialty: "Family & Relationship Problems",
    image: "https://images.unsplash.com/photo-1616773935249-1a520925c813?w=500&auto=format&fit=crop&q=60",
    availability: ["Tue", "Fri"]
  },
  {
    id: 5,
    name: "Mrs. Aisha Begum",
    specialty: "Peer Pressure & Self-Esteem",
    image: "https://images.unsplash.com/photo-1554702166-3d2b2c451372?w=500&auto=format&fit=crop&q=60",
    availability: ["Wed", "Thu"]
  },
  {
    id: 6,
    name: "Mr. Vikram Dutta",
    specialty: "College Stress & Burnout",
    image: "https://images.unsplash.com/photo-1542157640-5a396c21e3f8?w=500&auto=format&fit=crop&q=60",
    availability: ["Mon", "Thu", "Fri"]
  }
];

// This is the redesigned, themed card for displaying a single counselor.
const CounselorCard = ({ counselor }) => {
  const [sessionType, setSessionType] = useState('In-Person');

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 overflow-hidden flex flex-col">
      <img 
        src={counselor.image}
        alt={`Portrait of ${counselor.name}`} 
        className="w-full h-56 object-cover"
        // This is a fallback in case an image link breaks in the future
        onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/400x300/e0e0e0/555555?text=Image+Error`; }}
      />
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-green-900">{counselor.name}</h3>
        <p className="text-md text-green-700 font-semibold mt-1">{counselor.specialty}</p>
        <div className="flex-grow mt-4">
            <p className="text-gray-600">Available on: {counselor.availability.join(', ')}</p>
        </div>
        
        {/* Session Type Buttons */}
        <div className="mt-4 flex border border-gray-200 rounded-lg p-1">
            <button onClick={() => setSessionType('In-Person')} className={`w-1/2 py-2 text-sm font-semibold rounded-md transition-colors ${sessionType === 'In-Person' ? 'bg-green-600 text-white' : 'text-gray-600 hover:bg-green-50'}`}>
                In-Person
            </button>
            <button onClick={() => setSessionType('Tele-Counselling')} className={`w-1/2 py-2 text-sm font-semibold rounded-md transition-colors ${sessionType === 'Tele-Counselling' ? 'bg-green-600 text-white' : 'text-gray-600 hover:bg-green-50'}`}>
                Tele-Counselling
            </button>
        </div>

        <button className="mt-4 w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors">
          Book a Session
        </button>
      </div>
    </div>
  );
};


// This is the main page component with the corrected layout.
const BookingPage = () => {
  return (
    <div className="h-screen flex flex-col bg-green-50">
      <Header />
      
      <main className="flex-1 overflow-y-auto p-8 pt-40">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-900">Confidential Booking System</h2>
          <p className="mt-2 text-lg text-gray-700">Connect with our on-campus mental health professionals.</p>
        </div>

        {/* --- NEW: Urgent Support Banner --- */}
        <div className="max-w-5xl mx-auto mb-12 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-r-lg" role="alert">
            <p className="font-bold">Need Urgent Support?</p>
            <p>If you are in distress, please use the priority booking option or contact emergency services immediately.</p>
            <button className="mt-2 bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition-colors text-sm">
                Request Priority Booking
            </button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {mockCounselors.map(counselor => (
            <CounselorCard key={counselor.id} counselor={counselor} />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookingPage;