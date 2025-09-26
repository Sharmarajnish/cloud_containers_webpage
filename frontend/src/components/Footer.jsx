import React from "react";
import { Shield, Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: "Platform", href: "#platform" },
      { name: "IaC Security", href: "#iac" },
      { name: "Container Security", href: "#containers" },
      { name: "Multi-Cloud", href: "#multicloud" },
      { name: "Integrations", href: "#integrations" },
      { name: "Pricing", href: "#pricing" }
    ],
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "News", href: "#news" },
      { name: "Partners", href: "#partners" },
      { name: "Contact", href: "#contact" }
    ],
    Resources: [
      { name: "Documentation", href: "#docs" },
      { name: "Blog", href: "#blog" },
      { name: "Case Studies", href: "#cases" },
      { name: "Webinars", href: "#webinars" },
      { name: "Community", href: "#community" },
      { name: "Support", href: "#support" }
    ],
    Security: [
      { name: "Security Center", href: "#security" },
      { name: "Compliance", href: "#compliance" },
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Trust Center", href: "#trust" }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: "#twitter", label: "Twitter" },
    { icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
    { icon: Github, href: "#github", label: "GitHub" },
    { icon: Mail, href: "#email", label: "Email" }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Precogs</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
              Transforming cloud security from a bottleneck into an accelerator. 
              Secure your infrastructure, protect containers, and ensure compliance across any cloud.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex items-center justify-center w-10 h-10 bg-slate-800 hover:bg-emerald-600 rounded-lg transition-colors duration-200 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors duration-200" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-emerald-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <span>&copy; 2025 Precogs. All rights reserved.</span>
              <span className="hidden md:block">•</span>
              <span>SOC 2 Type II Certified</span>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#privacy" className="text-slate-400 hover:text-emerald-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#terms" className="text-slate-400 hover:text-emerald-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#cookies" className="text-slate-400 hover:text-emerald-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;