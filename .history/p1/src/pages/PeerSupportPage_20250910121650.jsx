import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PeerSupport from '../components/PeerSupport';

const PeerSupportPage = () => {
  return (
    // The background is now a solid, light green color
    <div className="min-h-screen flex flex-col bg-green-50">
      <Header />
      
      {/* This main section centers the content card both vertically and horizontally */}
      <main className="flex-1 w-full flex justify-center items-center p-4 pt-36 overflow-y-auto">
        
        {/* This container defines the size of the centered card */}
        <div className="w-full max-w-4xl h-[80vh] flex flex-col">
        
          {/* The PeerSupport component is fully visible and fills this container */}
          <PeerSupport />
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PeerSupportPage;