import React from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  Eye, 
  FileText, 
  Zap, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle 
} from "lucide-react";
import { mockProcessSteps } from "../mock";

const iconMap = {
  eye: Eye,
  "file-text": FileText,
  zap: Zap,
  "trending-up": TrendingUp
};

const ProcessSteps = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="inline-flex items-center px-4 py-2 mb-6 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 border-emerald-200">
            <CheckCircle className="w-4 h-4 mr-2" />
            Implementation Process
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Your Path to Secure Cloud Infrastructure
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Implementing a robust cloud security posture is a journey. With Precogs, you can move forward with confidence.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-200 via-teal-200 to-emerald-200" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockProcessSteps.map((step, index) => {
              const IconComponent = iconMap[step.icon];
              
              return (
                <div key={index} className="relative">
                  
                  {/* Step Card */}
                  <Card className="group p-8 bg-white border-2 border-slate-200 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative z-10">
                    
                    {/* Step Number */}
                    <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 text-white text-sm font-bold rounded-full flex items-center justify-center shadow-lg">
                      {step.step}
                    </div>
                    
                    {/* Icon */}
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-200">
                      <IconComponent className="w-8 h-8 text-emerald-600" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors duration-200">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {step.description}
                    </p>
                    
                    {/* Action */}
                    <div className="flex items-center text-emerald-600 group-hover:text-emerald-700 transition-colors duration-200 cursor-pointer">
                      <span className="text-sm font-medium">Get started</span>
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                    
                  </Card>
                  
                  {/* Connection Arrow (for large screens) */}
                  {index < mockProcessSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-32 -right-4 w-8 h-8 z-20">
                      <div className="w-full h-full bg-white rounded-full border-2 border-emerald-200 flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-emerald-600" />
                      </div>
                    </div>
                  )}
                  
                </div>
              );
            })}
          </div>
          
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            By making security an automated and intrinsic part of your cloud operations, 
            you can innovate faster and with greater resilience.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Start Your Security Journey
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

      </div>
    </section>
  );
};

export default ProcessSteps;