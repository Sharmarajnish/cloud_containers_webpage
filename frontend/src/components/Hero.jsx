import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Shield, Zap, Cloud, ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-100/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-100/40 to-transparent rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-8">
            <Badge className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-100 text-emerald-800 border-emerald-200 hover:bg-emerald-200 transition-colors duration-200">
              <Shield className="w-4 h-4" />
              <span className="font-medium">Trusted by 500+ Engineering Teams</span>
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Secure Cloud Foundations,
            </span>
            <br />
            <span className="text-slate-900">Delivered with Confidence</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform cloud security from a bottleneck into an accelerator. Secure your IaC configurations, 
            protect containers, and ensure multi-cloud compliance—all without slowing innovation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              <Shield className="w-5 h-5 mr-2" />
              Schedule Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-slate-300 hover:border-emerald-500 hover:text-emerald-600 px-8 py-4 text-lg transition-all duration-200"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Overview
            </Button>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: Shield,
                title: "Shift-Left Security",
                description: "Catch vulnerabilities in your IDE before they reach production"
              },
              {
                icon: Zap,
                title: "Unified Multi-Cloud",
                description: "Single control plane across AWS, Azure, GCP, and on-premises"
              },
              {
                icon: Cloud,
                title: "Runtime Protection",
                description: "Real-time threat detection for containers and Kubernetes"
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="group p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200/60 hover:border-emerald-200 hover:bg-white/80 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  <benefit.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;