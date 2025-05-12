import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Brain, BookOpen, CheckCircle, Code, Play, Timer, BarChart, Settings, Shield, Send, FileText, CreditCard, Users, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PricingSection from '@/components/PricingSection';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 flex-grow">
        <div className="candidly-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                <span className="text-candidly-600">AI-powered</span> technical assessments for hiring
              </h1>
              <p className="text-xl text-gray-600">
                Candidly helps you find the perfect candidates with intelligent technical assessments and AI-driven insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="px-8 py-6 text-lg bg-candidly-600 hover:bg-candidly-700"
                  asChild
                >
                  <Link to="/exams">
                    <Play className="mr-2 h-5 w-5" /> Start Testing
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="px-8 py-6 text-lg"
                  asChild
                >
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&h=500" 
                alt="Programming assessment" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="candidly-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Candidly?</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Our AI-powered platform helps you assess candidates more effectively and make smarter hiring decisions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="candidly-card p-6">
              <div className="rounded-full bg-candidly-100 w-12 h-12 flex items-center justify-center mb-4">
                <Brain className="text-candidly-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Powered Analysis</h3>
              <p className="text-gray-600">
                Get intelligent insights and detailed reports on candidate performance and competencies.
              </p>
            </div>
            
            <div className="candidly-card p-6">
              <div className="rounded-full bg-candidly-100 w-12 h-12 flex items-center justify-center mb-4">
                <Timer className="text-candidly-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Efficient Assessments</h3>
              <p className="text-gray-600">
                Save time with automated, customizable assessments that deliver actionable results.
              </p>
            </div>
            
            <div className="candidly-card p-6">
              <div className="rounded-full bg-candidly-100 w-12 h-12 flex items-center justify-center mb-4">
                <CheckCircle className="text-candidly-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Data-Driven Hiring</h3>
              <p className="text-gray-600">
                Make confident hiring decisions based on objective performance data and skills verification.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="candidly-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How Candidly Works</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Get started with Candidly in just a few simple steps and transform your technical hiring process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-candidly-600 text-white flex items-center justify-center font-bold">1</div>
              <div className="pt-4">
                <div className="rounded-full bg-candidly-100 w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                  <CreditCard className="text-candidly-600 h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Subscribe</h3>
                <p className="text-gray-600 text-center">
                  Choose a subscription plan that fits your hiring needs and get instant access to our platform.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-candidly-600 text-white flex items-center justify-center font-bold">2</div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <ChevronRight className="h-8 w-8 text-gray-300" />
              </div>
              <div className="pt-4">
                <div className="rounded-full bg-candidly-100 w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                  <Settings className="text-candidly-600 h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Configure Exams</h3>
                <p className="text-gray-600 text-center">
                  Access your admin dashboard to create and customize technical assessments for specific roles.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-candidly-600 text-white flex items-center justify-center font-bold">3</div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <ChevronRight className="h-8 w-8 text-gray-300" />
              </div>
              <div className="pt-4">
                <div className="rounded-full bg-candidly-100 w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                  <Send className="text-candidly-600 h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Invite Candidates</h3>
                <p className="text-gray-600 text-center">
                  Send assessment invitations to your candidates with personalized links and instructions.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-candidly-600 text-white flex items-center justify-center font-bold">4</div>
              <div className="pt-4">
                <div className="rounded-full bg-candidly-100 w-14 h-14 flex items-center justify-center mb-4 mx-auto">
                  <BarChart className="text-candidly-600 h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Review Results</h3>
                <p className="text-gray-600 text-center">
                  Analyze detailed reports and AI-driven insights to identify the best candidates for your team.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              className="bg-candidly-600 hover:bg-candidly-700"
              asChild
            >
              <Link to="/signup">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Admin Dashboard Section */}
      <section className="py-16 bg-gray-50">
        <div className="candidly-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&h=500" 
                alt="Admin dashboard" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900">Powerful Admin Dashboard</h2>
              <p className="text-lg text-gray-600">
                Take control of your technical hiring process with our comprehensive admin dashboard.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-candidly-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Create custom assessments tailored to specific roles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-candidly-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Review detailed candidate results and AI-generated insights</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-candidly-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Track candidate progress and compare performance metrics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-candidly-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Generate comprehensive reports for your hiring team</span>
                </li>
              </ul>
              <Button 
                className="bg-candidly-600 hover:bg-candidly-700"
                asChild
              >
                <Link to="/signin">
                  <BarChart className="mr-2 h-5 w-5" /> Access Dashboard
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trusted Partners Section */}
      <section className="py-16 bg-white">
        <div className="candidly-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Trusted by Industry Leaders</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Join hundreds of top companies using Candidly to find and hire exceptional talent.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="flex justify-center">
              <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-500 font-medium">TechCorp</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-500 font-medium">DataSys</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-500 font-medium">CodeFirm</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-500 font-medium">DevHQ</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="candidly-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Hear from hiring managers and recruiters who've transformed their technical hiring process with Candidly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-candidly-100 flex items-center justify-center mr-4">
                  <span className="text-candidly-600 font-bold">JD</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Jane Doe</h4>
                  <p className="text-sm text-gray-600">CTO at TechCorp</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Candidly has revolutionized our technical hiring process. The AI-powered insights have helped us identify truly talented engineers who might have been overlooked by traditional hiring methods."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-candidly-100 flex items-center justify-center mr-4">
                  <span className="text-candidly-600 font-bold">MS</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Michael Smith</h4>
                  <p className="text-sm text-gray-600">HR Director at DataSys</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The custom assessments we've created with Candidly have dramatically improved our technical interview process. We're now able to evaluate candidates more thoroughly and make better hiring decisions."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-candidly-100 flex items-center justify-center mr-4">
                  <span className="text-candidly-600 font-bold">AJ</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Alex Johnson</h4>
                  <p className="text-sm text-gray-600">Tech Recruiter at CodeFirm</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The detailed reports and analytics from Candidly have been a game-changer for our technical recruiting team. We can now confidently present candidates to hiring managers with solid data to back our recommendations."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <PricingSection />
      
      {/* CTA Section */}
      <section className="py-16 bg-candidly-600">
        <div className="candidly-container">
          <div className="text-center text-white max-w-3xl mx-auto">
            <Brain className="h-12 w-12 mb-4 mx-auto text-white/80" />
            <h2 className="text-3xl font-bold mb-4">Ready to find your ideal candidate?</h2>
            <p className="text-xl mb-8 text-white/80">
              Start using our AI-powered assessments to identify top talent for your organization.
            </p>
            <Button 
              className="bg-white text-candidly-600 hover:bg-gray-100 px-8 py-6 text-lg"
              asChild
            >
              <Link to="/exams">Browse Assessment Types</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;
