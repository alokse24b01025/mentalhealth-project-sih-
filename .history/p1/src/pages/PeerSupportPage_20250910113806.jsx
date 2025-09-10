import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PeerSupport from '../components/PeerSupport';

const PeerSupportPage = () => {
  return (
    // Make the entire screen a single flex column
    <div className="h-screen flex flex-col bg-gradient-to-br from-green-50 via-teal-50 to-emerald-100">
      <Header />
      
      {/* This main section will now take up all remaining space and center its content */}
      <main className="flex-1 w-full flex flex-col justify-center items-center p-4 overflow-hidden">
        
        {/* The container for the Peer Support UI, it will fill the main area */}
        <div className="w-full max-w-4xl flex-1 flex flex-col min-h-0">
          <PeerSupport />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PeerSupportPage;