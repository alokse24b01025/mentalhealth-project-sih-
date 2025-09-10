import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 p-8 bg-gray-100 pt-20">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Admin Dashboard (Anonymous Data)</h2>
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700">This section would display anonymous, data-driven insights for administrators.</p>
          <div className="mt-4 space-y-4">
            <div className="border p-4 rounded-lg">
                <h4 className="font-bold">Chatbot Usage Trends</h4>
                <p>Number of daily conversations: <strong>124</strong></p>
                <p>Most common keywords: <strong>Stress, Anxiety, Exams</strong></p>
            </div>
            <div className="border p-4 rounded-lg">
                <h4 className="font-bold">Counselling Appointments</h4>
                <p>Total appointments booked this month: <strong>42</strong></p>
                <p>Most booked counselor: <strong>Dr. Ananya Sharma</strong></p>
            </div>
            <div className="border p-4 rounded-lg">
                <h4 className="font-bold">Resource Engagement</h4>
                <p>Most viewed resource: <strong>Mindful Meditation for Beginners</strong></p>
                <p>Top language preference: <strong>English</strong></p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;