import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Register the necessary components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

// Mock data for the doughnut chart
const chartData = {
  labels: ['Anxiety', 'Depression', 'Academic Stress', 'Burnout', 'Social Isolation', 'Other'],
  datasets: [
    {
      label: '# of Students Reported',
      data: [120, 85, 75, 50, 45, 30],
      backgroundColor: [
        'rgba(5, 150, 105, 0.7)',
        'rgba(2, 132, 199, 0.7)',
        'rgba(217, 119, 6, 0.7)',
        'rgba(220, 38, 38, 0.7)',
        'rgba(107, 114, 128, 0.7)',
        'rgba(124, 58, 237, 0.7)',
      ],
      borderColor: [
        'rgba(5, 150, 105, 1)',
        'rgba(2, 132, 199, 1)',
        'rgba(217, 119, 6, 1)',
        'rgba(220, 38, 38, 1)',
        'rgba(107, 114, 128, 1)',
        'rgba(124, 58, 237, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const AdminDashboard = () => {
  return (
    <div className="h-screen flex flex-col bg-green-50">
      <Header />
      
      <main className="flex-1 overflow-y-auto p-8 pt-40">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-900">Admin Dashboard</h2>
          <p className="mt-2 text-lg text-gray-700">Anonymous, data-driven insights for student well-being.</p>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Column: Chart */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Reported Issues Overview</h3>
            <div className="h-96 flex justify-center items-center">
              <Doughnut data={chartData} />
            </div>
          </div>

          {/* Right Column: Key Metrics & Polls */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="font-bold text-xl text-green-800">Chatbot Usage Trends</h4>
              <ul className="mt-3 text-gray-600 space-y-2">
                <li>Daily Conversations: <strong>124</strong></li>
                <li>Most Common Keywords: <strong>Stress, Exams</strong></li>
                <li>Peak Usage Time: <strong>8 PM - 10 PM</strong></li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="font-bold text-xl text-green-800">Live Poll Results</h4>
              <p className="text-sm text-gray-500 mb-3">"How would you rate the current campus mental health resources?"</p>
              <div className="space-y-2">
                 <div className="flex justify-between items-center"><span>Excellent</span> <strong>15%</strong></div>
                 <div className="w-full bg-gray-200 rounded-full h-2.5"><div className="bg-green-600 h-2.5 rounded-full" style={{width: '15%'}}></div></div>
                 
                 <div className="flex justify-between items-center pt-2"><span>Good</span> <strong>35%</strong></div>
                 <div className="w-full bg-gray-200 rounded-full h-2.5"><div className="bg-sky-500 h-2.5 rounded-full" style={{width: '35%'}}></div></div>
                 
                 <div className="flex justify-between items-center pt-2"><span>Needs Improvement</span> <strong>50%</strong></div>
                 <div className="w-full bg-gray-200 rounded-full h-2.5"><div className="bg-amber-500 h-2.5 rounded-full" style={{width: '50%'}}></div></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminDashboard;
