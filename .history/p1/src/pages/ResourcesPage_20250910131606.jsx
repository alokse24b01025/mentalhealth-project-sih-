import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { mockResources } from '../data/mockResources';

// This is the themed card for displaying a single resource.
const ResourceCard = ({ resource }) => {
  const { title, type, url } = resource;

  const renderContent = () => {
    switch (type) {
      case 'video':
        return <iframe className="w-full h-48 rounded-lg" src={url} title={title} frameBorder="0" allowFullScreen></iframe>;
      case 'guide':
        return (
          <div className="flex items-center justify-center h-48 bg-green-50 rounded-lg">
            <a href={url} target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline font-semibold">
              <span className="text-4xl block text-center mb-2">📚</span>
              Read Guide
            </a>
          </div>
        );
      case 'audio':
        return <audio controls src={url} className="w-full"></audio>;
      default:
        return null;
    }
  };

  return (
    <div className="border border-green-100 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 bg-white p-6 flex flex-col">
      <h3 className="text-xl font-bold text-green-800 mb-3 capitalize">{title}</h3>
      <p className="text-sm text-gray-500 mb-4">Type: {type}</p>
      <div className="flex-grow">
        {renderContent()}
      </div>
    </div>
  );
};

// This is the main page component with the corrected layout and new search feature.
const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter resources based on the search term.
  // useMemo ensures this only recalculates when the search term changes.
  const filteredResources = useMemo(() => {
    if (!searchTerm) {
      return mockResources;
    }
    return mockResources.filter(resource =>
      resource.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="h-screen flex flex-col bg-green-50">
      <Header />
      
      <main className="flex-1 overflow-y-auto p-8 pt-40">
        
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-green-900">Psychoeducational Resource Hub</h2>
          <p className="mt-2 text-lg text-gray-700">Explore videos, guides, and audio to support your well-being.</p>
        </div>

        {/* --- NEW: Search Bar --- */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-full py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Search for resources like 'Stress', 'Meditation'..."
            />
          </div>
        </div>
        
        {/* Conditional rendering for the grid */}
        {filteredResources.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredResources.map(resource => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-700">No Resources Found</h3>
            <p className="mt-2 text-gray-500">We couldn't find any resources matching your search. Please try a different term.</p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default ResourcesPage;
