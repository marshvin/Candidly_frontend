import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Check, CreditCard, Zap, Shield, Brain } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PricingSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="candidly-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Choose the plan that fits your hiring needs. Start finding perfect candidates today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <Card className="border-2 border-gray-200 hover:border-candidly-300 transition-all duration-300">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl font-bold">Recruiter</CardTitle>
                  <CardDescription className="mt-2">For small hiring teams</CardDescription>
                </div>
                <CreditCard className="h-8 w-8 text-candidly-500" />
              </div>
              <div className="mt-4">
                <span className="text-3xl font-bold">$49</span>
                <span className="text-gray-500 ml-1">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-candidly-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Up to 20 assessments per month</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-candidly-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Basic AI candidate insights</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-candidly-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Email support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline" asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>
          
          {/* Pro Plan */}
          <Card className="border-2 border-candidly-400 bg-white shadow-lg transform md:-translate-y-4 relative">
            <div className="absolute -top-3 left-0 right-0 flex justify-center">
              <Badge className="bg-candidly-600 text-white">MOST POPULAR</Badge>
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl font-bold">HR Team</CardTitle>
                  <CardDescription className="mt-2">For growing organizations</CardDescription>
                </div>
                <Brain className="h-8 w-8 text-candidly-600" />
              </div>
              <div className="mt-4">
                <span className="text-3xl font-bold">$199</span>
                <span className="text-gray-500 ml-1">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-candidly-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Unlimited assessments</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-candidly-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Advanced AI candidate analysis</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-candidly-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Custom assessment templates</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-candidly-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Candidate comparison tools</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-candidly-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Priority customer support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-candidly-600 hover:bg-candidly-700" asChild>
                <Link to="/signup">Try HR Team Plan</Link>
              </Button>
            </CardFooter>
          </Card>
          
          {/* Enterprise Plan */}
          <Card className="border-2 border-gray-200 hover:border-candidly-300 transition-all duration-300">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl font-bold">Enterprise</CardTitle>
                  <CardDescription className="mt-2">For large organizations</CardDescription>
                </div>
                <Shield className="h-8 w-8 text-candidly-500" />
              </div>
              <div className="mt-4">
                <span className="text-3xl font-bold">Custom</span>
                <span className="text-gray-500 ml-1"> pricing</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-candidly-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Everything in HR Team plan</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-candidly-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Advanced AI hiring recommendations</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-candidly-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>ATS integration</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-candidly-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Customized assessment workflows</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-candidly-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Dedicated account manager</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline" asChild>
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Need a custom solution for your hiring process?
          </p>
          <Button variant="link" className="text-candidly-600" asChild>
            <Link to="/contact">Contact our sales team for custom pricing</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
