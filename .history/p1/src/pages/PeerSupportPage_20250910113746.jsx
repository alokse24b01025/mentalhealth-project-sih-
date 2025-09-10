import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PeerSupport from '../components/PeerSupport';

const PeerSupportPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-8 bg-gray-100 pt-20 flex justify-center">
        <div className="w-full max-w-4xl h-[80vh]">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-4">Peer Support Platform</h2>
          <PeerSupport />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PeerSupportPage;