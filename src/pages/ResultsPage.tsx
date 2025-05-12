
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ResultsView from '@/components/ResultsView';

const ResultsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-10">
        <div className="skillforge-container">
          <ResultsView />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ResultsPage;
