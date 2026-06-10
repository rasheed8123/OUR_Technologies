import { Facebook, Instagram, Linkedin, MessageCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';

/**
 * Footer Component
 * Design: Neo-Minimalist Tech Elegance
 * - Company information
 * - Quick links
 * - Contact details
 * - Social media links
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = {
    Company: ['Home', 'About', 'Services', 'Contact'],
    Services: ['Laptop Repair', 'Desktop Repair', 'Camera Repair', 'Networking', 'AMC'],
    Legal: ['Privacy Policy', 'Terms & Conditions'],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: MessageCircle, href: '#', label: 'WhatsApp' },
  ];

  return (
    <footer id="contact" className="bg-slate-900 dark:bg-slate-950 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">OUR</span>
              </div>
              <h3 className="text-xl font-bold">OUR Technologies</h3>
            </div>
            <p className="text-gray-400">
              At OUR Tech, your devices are in good hands.
            </p>
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 text-cyan-500" />
                <span>[Your Address Here]</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 flex-shrink-0 text-cyan-500" />
                <span>+91 XXXXXXXXXX</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 flex-shrink-0 text-cyan-500" />
                <span>info@ourtechnologies.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Clock className="w-5 h-5 flex-shrink-0 text-cyan-500" />
                <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          {Object.entries(quickLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 py-8">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 hover:bg-cyan-500 rounded-full flex items-center justify-center transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/50"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 space-y-2">
            <p>
              © {currentYear} OUR Technologies. All Rights Reserved.
            </p>
            <p className="text-sm">
              At OUR Tech, your devices are in good hands.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
