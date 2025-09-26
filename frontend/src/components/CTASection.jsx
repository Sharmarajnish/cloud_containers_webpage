import React from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Shield, 
  ArrowRight, 
  Calendar, 
  Users, 
  Zap, 
  Star,
  CheckCircle 
} from "lucide-react";
import { mockStats } from "../mock";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-teal-900/20" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-teal-500/10 to-transparent rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stats Section */}
        <div className="text-center mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {mockStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-slate-300 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main CTA Content */}
        <div className="text-center mb-12">
          <Badge className="inline-flex items-center px-4 py-2 mb-8 bg-emerald-100/10 text-emerald-400 border-emerald-400/30 backdrop-blur-sm">
            <Star className="w-4 h-4 mr-2" />
            Embrace a Future of Secure Innovation
          </Badge>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Don't let security concerns 
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              hold you back
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            With Precogs, you gain a partner that empowers your developers, protects your infrastructure, 
            and simplifies compliance across any cloud environment.
          </p>
        </div>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Primary CTA */}
          <Card className="p-8 bg-gradient-to-br from-emerald-600 to-teal-700 border-0 text-white hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Schedule a Demo with Precogs</h3>
            <p className="text-emerald-100 mb-6 leading-relaxed">
              See how our platform can seamlessly integrate into your workflow to secure your IaC, 
              containers, and multi-cloud strategy.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "30-minute personalized demo",
                "Live security scanning demo", 
                "Custom implementation roadmap",
                "ROI analysis for your environment"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-emerald-100">
                  <CheckCircle className="w-5 h-5 text-emerald-300 mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Button 
              size="lg" 
              className="w-full bg-white text-emerald-700 hover:bg-emerald-50 font-semibold py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <Shield className="w-5 h-5 mr-2" />
              Schedule Demo Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Card>

          {/* Secondary CTA */}
          <Card className="p-8 bg-white/10 backdrop-blur-sm border-slate-700 text-white hover:bg-white/20 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center w-16 h-16 bg-emerald-500/20 rounded-2xl mb-6">
              <Users className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Connect with security engineers and DevOps professionals building secure cloud infrastructure.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Weekly security insights",
                "Best practices guides",
                "Community support forum", 
                "Early access to new features"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-slate-300">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 font-semibold py-4 transition-all duration-200"
            >
              <Zap className="w-5 h-5 mr-2" />
              Join Community
            </Button>
          </Card>
          
        </div>

        {/* Bottom Text */}
        <div className="text-center">
          <p className="text-slate-400 text-sm">
            Trusted by 500+ engineering teams • SOC 2 Type II Certified • 99.9% Uptime SLA
          </p>
        </div>

      </div>
    </section>
  );
};

export default CTASection;