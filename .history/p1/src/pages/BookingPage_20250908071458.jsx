import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CounselorCard from '../components/CounselorCard';
import { mockCounselors } from '../data/mockCounselors';

const BookingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-8 bg-gray-100 pt-20">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Confidential Booking System</h2>
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {mockCounselors.map(counselor => (
            <CounselorCard key={counselor.id} counselor={counselor} />
          ))}
        </div>
        <p className="text-center mt-8 text-gray-600">Please contact the counselor to finalize your appointment.</p>
      </main>
      <Footer />
    </div>
  );
};

export default BookingPage;