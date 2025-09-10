import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PeerSupport from '../components/PeerSupport';

const PeerSupportPage = () => {
  return (
    // This creates a full-height, vertical layout for the entire page
    <div className="h-screen flex flex-col bg-gradient-to-br from-green-50 via-teal-50 to-emerald-100">
      <Header />
      
      {/* This main section takes up all remaining space and centers its content */}
      <main className="flex-1 w-full flex flex-col items-center p-4 overflow-hidden">
        
        {/* This container holds the Peer Support UI and fills the main area without overflowing */}
        <div className="w-full max-w-4xl flex-1 flex flex-col min-h-0">
        
          {/* The PeerSupport component will now be fully visible and fill the available space */}
          <PeerSupport />
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PeerSupportPage;