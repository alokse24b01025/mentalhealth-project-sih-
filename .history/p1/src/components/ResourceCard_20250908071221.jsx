import React from 'react';

const ResourceCard = ({ resource }) => {
  const { title, type, url, language } = resource;
  
  const renderContent = () => {
    switch (type) {
      case 'video':
        return <iframe className="w-full h-48 rounded-md" src={url} title={title} frameBorder="0" allowFullScreen></iframe>;
      case 'guide':
        return (
          <div className="flex items-center justify-center h-48">
            <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              <span className="text-4xl">📚</span>
              <p className="mt-2 text-center">Read Guide</p>
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
    <div className="border rounded-lg p-6 shadow-md bg-white flex flex-col justify-between h-full">
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">Type: {type} | Language: {language}</p>
      </div>
      <div className="flex-grow">
        {renderContent()}
      </div>
    </div>
  );
};

export default ResourceCard;