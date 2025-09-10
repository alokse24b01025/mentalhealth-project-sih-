import React from 'react';

const CounselorCard = ({ counselor }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
      <img src={counselor.image} alt={counselor.name} className="w-24 h-24 rounded-full object-cover" />
      <div>
        <h3 className="text-xl font-bold">{counselor.name}</h3>
        <p className="text-gray-600">{counselor.specialty}</p>
        <p className="text-sm text-gray-500 mt-2">Available: {counselor.availability.join(', ')}</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">Book Appointment</button>
      </div>
    </div>
  );
};

export default CounselorCard;