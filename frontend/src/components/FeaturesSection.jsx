import React from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Search, 
  Key, 
  ShieldCheck, 
  Activity, 
  Package, 
  Cloud, 
  Radar, 
  Settings,
  ArrowRight 
} from "lucide-react";
import { mockFeatures } from "../mock";

const iconMap = {
  search: Search,
  key: Key,
  "shield-check": ShieldCheck,
  activity: Activity,
  package: Package,
  cloud: Cloud,
  radar: Radar,
  settings: Settings
};

const FeatureCard = ({ feature, index }) => {
  const IconComponent = iconMap[feature.icon];
  
  return (
    <Card className="group p-8 bg-white/80 backdrop-blur-sm border-slate-200/60 hover:border-emerald-200 hover:bg-white hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
      <div className="flex items-start space-x-4">
        <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl group-hover:scale-110 transition-transform duration-200">
          <IconComponent className="w-6 h-6 text-emerald-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors duration-200">
            {feature.title}
          </h3>
          <p className="text-slate-600 leading-relaxed mb-4">{feature.description}</p>
          <div className="flex items-center text-emerald-600 group-hover:text-emerald-700 transition-colors duration-200">
            <span className="text-sm font-medium">Learn more</span>
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
      </div>
    </Card>
  );
};

const FeatureSection = ({ sectionData, isReversed = false }) => (
  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}>
    <div className={isReversed ? 'lg:col-start-2' : ''}>
      <Badge className="inline-flex items-center px-3 py-1 mb-6 bg-emerald-100 text-emerald-800 border-emerald-200">
        <ShieldCheck className="w-4 h-4 mr-2" />
        Security Feature
      </Badge>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
        {sectionData.title}
      </h2>
      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        {sectionData.subtitle}
      </p>
      <div className="inline-flex items-center text-emerald-600 hover:text-emerald-700 transition-colors duration-200 cursor-pointer">
        <span className="font-medium">Explore all features</span>
        <ArrowRight className="w-5 h-5 ml-2" />
      </div>
    </div>
    <div className={`space-y-6 ${isReversed ? 'lg:col-start-1' : ''}`}>
      {sectionData.features.map((feature, index) => (
        <FeatureCard key={index} feature={feature} index={index} />
      ))}
    </div>
  </div>
);

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* IaC Features */}
        <div className="mb-32">
          <FeatureSection sectionData={mockFeatures.iac} />
        </div>

        {/* Key Benefit Callout */}
        <div className="mb-32">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-12 border border-emerald-100">
            <div className="text-center max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Key Benefit: Fix issues when they are fastest and cheapest to resolve
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Prevent misconfigurations from reaching production and avoid costly post-deployment fire drills. 
                Catch issues during development when they're fastest and cheapest to resolve.
              </p>
            </div>
          </div>
        </div>

        {/* Container Features */}
        <div>
          <FeatureSection sectionData={mockFeatures.containers} isReversed={true} />
        </div>

        {/* Another Key Benefit Callout */}
        <div className="mt-32">
          <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-3xl p-12 border border-teal-100">
            <div className="text-center max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Key Benefit: Achieve true cloud agility without compromising security
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Deploy containers confidently anywhere, leveraging the best services from multiple providers 
                while maintaining a strong, unified security posture.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;