
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ExamList from '@/components/ExamList';

const Exams = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-10">
        <div className="skillforge-container">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Available Exams</h1>
            <p className="text-gray-600 mt-2">
              Choose from our selection of technical exams to test your skills.
            </p>
          </div>
          
          <ExamList />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Exams;
