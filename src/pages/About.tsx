import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Beaker, BookOpen, CheckCircle, Clock, Code, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="candidly-container">
            <div className="max-w-3xl mx-auto text-center">
              <Beaker className="h-16 w-16 text-candidly-600 mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-gray-900 mb-4">About Candidly</h1>
              <p className="text-xl text-gray-600">
                We're on a mission to help developers and technical professionals prepare for
                interviews and improve their skills through realistic, challenging assessments.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="candidly-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Candidly was founded by a group of senior developers who experienced firsthand
                  the challenges of technical interviews and skill assessment.
                </p>
                <p className="text-gray-600 mb-4">
                  We believe that the best way to prepare for technical challenges is through
                  realistic practice in an environment that simulates real-world conditions.
                </p>
                <p className="text-gray-600">
                  Our platform provides the tools and resources needed to help developers
                  at all levels improve their skills and showcase their abilities.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400" 
                  alt="Developers working together"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="candidly-container">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What We Offer</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <Code className="h-10 w-10 text-candidly-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Coding Challenges</h3>
                <p className="text-gray-600">
                  Test your programming skills with our collection of coding problems that range from
                  fundamentals to advanced algorithms.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <BookOpen className="h-10 w-10 text-candidly-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Knowledge Tests</h3>
                <p className="text-gray-600">
                  Assess your understanding of programming concepts, frameworks, and best practices
                  with our comprehensive quizzes.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <Clock className="h-10 w-10 text-candidly-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Timed Assessments</h3>
                <p className="text-gray-600">
                  Practice working under pressure with timed exams that simulate real
                  interview conditions and technical tests.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-candidly-600 text-white">
          <div className="candidly-container">
            <div className="max-w-3xl mx-auto text-center">
              <Users className="h-16 w-16 text-white/80 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
              <p className="text-xl text-white/80 mb-8">
                Connect with other developers, share your experiences, and grow your skills
                together with our supportive community.
              </p>
              <div className="flex justify-center">
                <div className="bg-white text-candidly-700 font-bold px-6 py-3 rounded-md">
                  Coming Soon!
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
