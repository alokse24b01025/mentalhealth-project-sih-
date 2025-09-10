import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResourceCard from '../components/ResourceCard';
import { mockResources } from '../data/mockResources';

const ResourcesPage = () => {
  return (
    // Updated background to match the theme
    <div className="min-h-screen flex flex-col bg-green-50">
      <Header />
      
      {/* --- FIX APPLIED HERE: Increased top padding --- */}
      <main className="flex-1 overflow-y-auto p-8 pt-40">
        
        {/* Redesigned Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-900">Psychoeducational Resource Hub</h2>
          <p className="mt-2 text-lg text-gray-700">Explore videos, guides, and audio to support your well-being.</p>
        </div>
        
        {/* Grid for resource cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mockResources.map(resource => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

// We can also restyle the ResourceCard component to match the new theme
const RestyledResourceCard = ({ resource }) => {
  const { title, type, url } = resource;

  const renderContent = () => {
    switch (type) {
      case 'video':
        return <iframe className="w-full h-48 rounded-md" src={url} title={title} frameBorder="0" allowFullScreen></iframe>;
      case 'guide':
        return (
          <div className="flex items-center justify-center h-48 bg-green-50 rounded-md">
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

// It's better to use the new card, so let's update the export
// Replace the old ResourceCard with RestyledResourceCard in the map function
const FinalResourcesPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-green-50">
            <Header />
            <main className="flex-1 overflow-y-auto p-8 pt-40">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-green-900">Psychoeducational Resource Hub</h2>
                    <p className="mt-2 text-lg text-gray-700">Explore videos, guides, and audio to support your well-being.</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {mockResources.map(resource => (
                        <RestyledResourceCard key={resource.id} resource={resource} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};


export default FinalResourcesPage;