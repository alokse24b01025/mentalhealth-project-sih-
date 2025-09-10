import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResourceCard from '../components/ResourceCard';
import { mockResources } from '../data/mockResources';

const ResourcesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-8 bg-gray-100 pt-20">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Psychoeducational Resource Hub</h2>
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

export default ResourcesPage;