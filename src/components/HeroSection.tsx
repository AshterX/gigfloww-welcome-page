
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 -z-10" />
      
      {/* Blob shape */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-200/40 to-indigo-200/40 rounded-full blur-3xl -z-10 transform translate-x-1/3 -translate-y-1/3" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 fade-in">
            Your Creative Gig Journey <span className="gradient-text">Starts Here</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto fade-in-delay-1">
            Connect with clients, showcase your talents, and build your freelance career on a platform designed for the modern gig economy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-delay-2">
            <Button className="btn-primary text-lg group">
              Join Now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="btn-secondary text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
