import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Brain, CheckCircle, Users, Database, Shield, CloudLightning, Settings, LineChart, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="candidly-container">
            <div className="max-w-3xl mx-auto text-center">
              <Sparkles className="h-16 w-16 text-candidly-600 mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Powerful Features for Modern Recruitment
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover how Candidly's AI-powered platform helps you streamline your recruitment process and find the best talent.
              </p>
              <Button 
                className="bg-candidly-600 hover:bg-candidly-700 px-6 py-3 text-lg"
                asChild
              >
                <Link to="/signup">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Main Features Section */}
        <section className="py-16 bg-white">
          <div className="candidly-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <Brain className="h-10 w-10 text-candidly-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Powered Matching</h3>
                <p className="text-gray-600">
                  Our advanced AI algorithms match candidates to your job requirements with exceptional accuracy, considering skills, experience, and cultural fit.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <Users className="h-10 w-10 text-candidly-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Collaborative Hiring</h3>
                <p className="text-gray-600">
                  Enable seamless collaboration between hiring managers, recruiters, and team members with shared candidate profiles and feedback tools.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <Database className="h-10 w-10 text-candidly-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Candidate Database</h3>
                <p className="text-gray-600">
                  Build and maintain a searchable database of talent, enabling you to quickly find previous applicants who match new job openings.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <Shield className="h-10 w-10 text-candidly-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Privacy & Compliance</h3>
                <p className="text-gray-600">
                  Built with privacy and regulatory compliance at its core, ensuring your hiring practices meet global standards.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <CloudLightning className="h-10 w-10 text-candidly-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Implementation</h3>
                <p className="text-gray-600">
                  Get up and running quickly with our cloud-based platform that requires no complex integration or IT setup.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <Settings className="h-10 w-10 text-candidly-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Customizable Workflows</h3>
                <p className="text-gray-600">
                  Adapt our platform to your specific recruitment process with customizable workflows, templates, and automation rules.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Advanced Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="candidly-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Advanced Capabilities</h2>
              <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
                Beyond the basics, our platform offers sophisticated tools to enhance your recruitment strategy.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-candidly-100 flex items-center justify-center">
                    <LineChart className="h-6 w-6 text-candidly-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Analytics</h3>
                  <p className="text-gray-600 mb-3">
                    Gain valuable insights into your recruitment funnel with comprehensive analytics and reporting.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-candidly-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Track time-to-hire, cost-per-hire, and source effectiveness</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-candidly-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Generate custom reports for executive presentations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-candidly-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Identify bottlenecks in your recruitment process</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-candidly-100 flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-candidly-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Powered Insights</h3>
                  <p className="text-gray-600 mb-3">
                    Leverage artificial intelligence to make smarter hiring decisions and identify top talent.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-candidly-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Intelligent resume parsing and skill matching</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-candidly-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Predictive analytics for candidate success</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-candidly-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Bias detection and diversity promotion tools</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-candidly-600 text-white">
          <div className="candidly-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to transform your hiring process?</h2>
              <p className="text-xl mb-8 text-white/80">
                Join thousands of companies already using Candidly to find their perfect candidates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-white text-candidly-600 hover:bg-gray-100 px-6 py-3 text-lg"
                  asChild
                >
                  <Link to="/signup">Start Free Trial</Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-candidly-700 px-6 py-3 text-lg"
                  asChild
                >
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Features; 