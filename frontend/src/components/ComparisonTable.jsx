import React, { useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Check, X, Zap, Shield } from "lucide-react";
import { mockComparison } from "../mock";

const ComparisonTable = () => {
  const [hoveredRow, setHoveredRow] = useState(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="inline-flex items-center px-4 py-2 mb-6 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 border-emerald-200">
            <Zap className="w-4 h-4 mr-2" />
            Platform Comparison
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            {mockComparison.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            {mockComparison.subtitle}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
          
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-3 bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200">
            <div className="p-6 md:p-8">
              <h3 className="text-lg font-semibold text-slate-700">Feature</h3>
            </div>
            <div className="p-6 md:p-8 bg-gradient-to-r from-red-50 to-orange-50 border-l border-slate-200">
              <div className="flex items-center space-x-2">
                <X className="w-5 h-5 text-red-500" />
                <h3 className="text-lg font-semibold text-slate-700">Basic / Siloed Tools</h3>
              </div>
            </div>
            <div className="p-6 md:p-8 bg-gradient-to-r from-emerald-50 to-teal-50 border-l border-slate-200">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-emerald-600" />
                <h3 className="text-lg font-semibold text-emerald-800">Precogs Platform</h3>
              </div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-slate-100">
            {mockComparison.categories.map((category, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-3 hover:bg-slate-50/50 transition-all duration-200 ${
                  hoveredRow === index ? 'bg-slate-50/50 shadow-sm' : ''
                }`}
                onMouseEnter={() => setHoveredRow(index)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                {/* Feature Name */}
                <div className="p-6 md:p-8">
                  <h4 className="font-semibold text-slate-900 mb-2">{category.feature}</h4>
                </div>
                
                {/* Basic Tools */}
                <div className="p-6 md:p-8 border-l border-slate-100 bg-gradient-to-r from-red-50/30 to-orange-50/30">
                  <div className="flex items-start space-x-3">
                    <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-600 leading-relaxed">{category.basic}</p>
                  </div>
                </div>
                
                {/* Precogs Platform */}
                <div className="p-6 md:p-8 border-l border-slate-100 bg-gradient-to-r from-emerald-50/30 to-teal-50/30">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-700 leading-relaxed font-medium">{category.precogs}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Table Footer CTA */}
          <div className="p-8 bg-gradient-to-r from-emerald-50 to-teal-50 border-t border-slate-200">
            <div className="text-center">
              <h4 className="text-xl font-semibold text-slate-900 mb-4">
                Ready to experience the Precogs advantage?
              </h4>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <Shield className="w-5 h-5 mr-2" />
                Schedule Your Demo
              </Button>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default ComparisonTable;