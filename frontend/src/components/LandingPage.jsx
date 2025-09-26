import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import FeaturesSection from "./FeaturesSection";
import ComparisonTable from "./ComparisonTable";
import ProcessSteps from "./ProcessSteps";
import CTASection from "./CTASection";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      <main>
        <Hero />
        <FeaturesSection />
        <ComparisonTable />
        <ProcessSteps />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;