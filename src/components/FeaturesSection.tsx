
import React from 'react';
import { CheckCircle, Shield, Calendar, CreditCard } from "lucide-react";

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  delay 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  delay: number 
}) => (
  <div className={`feature-card fade-in-delay-${delay}`}>
    <div className="flex items-start">
      <div className="p-2 rounded-lg bg-purple-100 mr-4 shrink-0">
        <Icon className="h-6 w-6 text-purple-600" />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose GigFloww</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Our platform is built to make freelancing easier, more secure, and more rewarding for everyone.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <FeatureCard 
            icon={CheckCircle} 
            title="Verified Profiles" 
            description="We verify all freelancers and clients to ensure trust and quality on our platform."
            delay={1}
          />
          
          <FeatureCard 
            icon={Shield} 
            title="Secure Payments" 
            description="Our escrow system ensures freelancers get paid and clients receive quality work."
            delay={2}
          />
          
          <FeatureCard 
            icon={Calendar} 
            title="Project Management" 
            description="Intuitive tools to help you manage deadlines, milestones, and deliverables."
            delay={2}
          />
          
          <FeatureCard 
            icon={CreditCard} 
            title="Transparent Fees" 
            description="Clear, competitive pricing with no hidden costs or surprise charges."
            delay={3}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
