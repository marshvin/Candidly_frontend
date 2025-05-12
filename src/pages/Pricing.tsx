import React, { useState, FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { CheckCircle, CreditCard, Zap, Building2, Trophy } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Pricing: FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const toggleBilling = () => {
    setIsAnnual(!isAnnual);
  };
  
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      price: isAnnual ? 49 : 59,
      features: [
        "Up to 5 active job postings",
        "AI-powered candidate matching",
        "Basic analytics and reporting",
        "Email support",
        "1 admin user"
      ],
      cta: "Start with Starter",
      icon: <Zap className="h-8 w-8 text-candidly-500" />,
      popular: false
    },
    {
      name: "Professional",
      description: "Ideal for growing companies with regular hiring needs",
      price: isAnnual ? 99 : 119,
      features: [
        "Up to 15 active job postings",
        "Advanced AI matching algorithms",
        "Comprehensive analytics dashboard",
        "Priority email support",
        "5 admin users",
        "Custom hiring workflows",
        "Candidate database access"
      ],
      cta: "Choose Professional",
      icon: <Trophy className="h-8 w-8 text-candidly-600" />,
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex hiring requirements",
      price: "Custom",
      features: [
        "Unlimited job postings",
        "Enterprise-grade AI matching",
        "Advanced analytics with custom reports",
        "Dedicated account manager",
        "Unlimited admin users",
        "API access",
        "SSO integration",
        "Custom branding options",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      icon: <Building2 className="h-8 w-8 text-candidly-500" />,
      popular: false
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Pricing Header */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="candidly-container">
            <div className="max-w-3xl mx-auto text-center">
              <CreditCard className="h-16 w-16 text-candidly-600 mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-gray-600 mb-12">
                Choose the plan that's right for your business, whether you're a startup or an enterprise.
              </p>
              
              <div className="flex items-center justify-center space-x-4">
                <Label htmlFor="billing-toggle" className={`text-base ${isAnnual ? 'font-medium text-gray-900' : 'text-gray-500'}`}>Annual Billing (Save 20%)</Label>
                <Switch 
                  id="billing-toggle" 
                  checked={!isAnnual} 
                  onCheckedChange={toggleBilling}
                />
                <Label htmlFor="billing-toggle" className={`text-base ${!isAnnual ? 'font-medium text-gray-900' : 'text-gray-500'}`}>Monthly Billing</Label>
              </div>
            </div>
          </div>
        </section>
        
        {/* Pricing Plans */}
        <section className="py-16 bg-white">
          <div className="candidly-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`border-2 ${plan.popular ? 'border-candidly-400 shadow-lg' : 'border-gray-200'} relative`}
                >
                  {plan.popular && (
                    <Badge className="absolute top-0 right-8 transform -translate-y-1/2 bg-candidly-600 text-white px-3 py-1">
                      MOST POPULAR
                    </Badge>
                  )}
                  
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      {plan.icon}
                    </div>
                    <CardTitle className="text-2xl text-center">{plan.name}</CardTitle>
                    <CardDescription className="text-center">{plan.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="text-center mb-6">
                      <div className="text-4xl font-bold text-gray-900 mb-2">
                        {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                        {typeof plan.price === 'number' && <span className="text-lg font-normal text-gray-500">/{isAnnual ? 'mo' : 'mo'}</span>}
                      </div>
                      {typeof plan.price === 'number' && (
                        <p className="text-sm text-gray-500">
                          {isAnnual ? 'Billed annually' : 'Billed monthly'}
                        </p>
                      )}
                    </div>
                    
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className={`h-5 w-5 ${plan.popular ? 'text-candidly-600' : 'text-candidly-500'} mr-2 flex-shrink-0 mt-0.5`} />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  
                  <CardFooter>
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-candidly-600 hover:bg-candidly-700' : 'bg-gray-800 hover:bg-gray-700'}`} 
                      asChild
                    >
                      <Link to={plan.name === "Enterprise" ? "/contact" : "/signup"}>
                        {plan.cta}
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                All plans include basic features like AI-powered candidate matching, mobile-responsive career pages, and data security.
              </p>
              <p className="text-gray-700 font-medium">
                Need a custom plan? <Link to="/contact" className="text-candidly-600 hover:underline">Contact our sales team</Link> for enterprise pricing.
              </p>
            </div>
          </div>
        </section>
        
        {/* FAQs Section */}
        <section className="py-16 bg-gray-50">
          <div className="candidly-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Can I change my plan later?</h3>
                  <p className="text-gray-600">
                    Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes to your subscription will be prorated for the remainder of your billing cycle.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Is there a free trial?</h3>
                  <p className="text-gray-600">
                    We offer a 14-day free trial on all plans. No credit card required until you're ready to subscribe.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">What payment methods do you accept?</h3>
                  <p className="text-gray-600">
                    We accept all major credit cards, as well as ACH transfers for annual enterprise subscriptions.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Do you offer discounts for nonprofits?</h3>
                  <p className="text-gray-600">
                    Yes, we offer special discounts for nonprofit organizations and educational institutions. Please contact our sales team for more information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-candidly-600 text-white">
          <div className="candidly-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Start finding better candidates today</h2>
              <p className="text-xl mb-8 text-white/80">
                Try Candidly free for 14 days, no credit card required.
              </p>
              <Button 
                className="bg-white text-candidly-600 hover:bg-gray-100 px-6 py-3 text-lg"
                asChild
              >
                <Link to="/signup">Start Your Free Trial</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing; 