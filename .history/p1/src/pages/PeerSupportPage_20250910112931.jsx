import React from 'react';
import Header from '../components/Header';
import Footer from '../components-Footer';
import PeerSupport from '../components/PeerSupport';

const PeerSupportPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-teal-50 to-emerald-100">
      <Header />
      
      {/* --- FIX APPLIED HERE --- */}
      <main className="flex-1 w-full flex justify-center items-center p-4 pt-36">
        
        {/* Container for the component */}
        <div className="w-full max-w-4xl h-[80vh] flex flex-col">
          <PeerSupport />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PeerSupportPage;