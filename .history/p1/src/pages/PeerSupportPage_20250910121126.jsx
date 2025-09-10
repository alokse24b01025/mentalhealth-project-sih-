import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PeerSupport from '../components/PeerSupport';

const PeerSupportPage = () => {
  return (
    // This creates a full-height, vertical layout for the entire page
    <div className="h-screen flex flex-col bg-gradient-to-br from-green-50 via-teal-50 to-emerald-100">
      <Header />
      
      {/* This main section now centers the content card vertically and horizontally */}
      <main className="flex-1 w-full flex justify-center items-center p-4 pt-36 overflow-y-auto">
        
        {/* This container has a defined height, making the component feel like a distinct card */}
        <div className="w-full max-w-4xl h-[80vh] flex flex-col">
        
          {/* The PeerSupport component will now be fully visible and fill this container */}
          <PeerSupport />
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PeerSupportPage;