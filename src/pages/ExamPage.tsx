
import React from 'react';
import Navbar from '@/components/Navbar';
import ExamView from '@/components/ExamView';

const ExamPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow py-10">
        <div className="skillforge-container">
          <ExamView />
        </div>
      </main>
      
      {/* No footer during exam for less distraction */}
    </div>
  );
};

export default ExamPage;
