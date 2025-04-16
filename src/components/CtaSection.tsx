
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Gig Journey?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Join thousands of freelancers and clients already using GigFloww to connect, create, and collaborate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-purple-600 hover:bg-purple-50 text-lg font-medium py-3 px-8 rounded-lg transition-all duration-300 group">
              Join Now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 text-lg">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
