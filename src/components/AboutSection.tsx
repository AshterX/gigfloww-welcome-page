
import React from 'react';
import { Briefcase, Users, Globe } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About GigFloww</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            GigFloww is a comprehensive platform connecting talented freelancers with clients seeking creative services. 
            We streamline the entire process from discovery to payment, making the gig economy work better for everyone.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="flex-1 max-w-md">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-purple-100 mr-4">
                <Briefcase className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">For Freelancers</h3>
            </div>
            <p className="text-gray-600">
              Showcase your portfolio, set your rates, and connect with clients who value your skills. 
              Our platform handles the administrative work so you can focus on what you do best.
            </p>
          </div>
          
          <div className="flex-1 max-w-md">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-purple-100 mr-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">For Clients</h3>
            </div>
            <p className="text-gray-600">
              Find the perfect talent for your project with our advanced search tools. 
              Review portfolios, communicate directly, and manage projects all in one place.
            </p>
          </div>
          
          <div className="flex-1 max-w-md">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-purple-100 mr-4">
                <Globe className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">Global Community</h3>
            </div>
            <p className="text-gray-600">
              Join a thriving community of creative professionals from around the world.
              Share knowledge, collaborate on projects, and grow your network.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
