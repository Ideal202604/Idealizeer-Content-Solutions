import React from 'react';
import { Link } from 'react-router-dom';
import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin } from
'lucide-react';
export function Footer() {
  const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Careers', to: '/career' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact', to: '/contact' }
  ];

  return (
    <footer className="bg-navy-950 pt-20 pb-10 border-t border-white/5">
      <div className="layout-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/logo_pdf_02.png"
                alt="Idealizeer Logo"
                loading="lazy"
                decoding="async"
                className="h-9 w-auto brand-logo" />
              
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              We build digital experiences that grow your business. From UI/UX
              design to full-stack development and branding.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://x.com/idealizeer"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-slate-400 hover:bg-electric-500 hover:text-white transition-colors">
                
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/idealizeer-content-solutions/posts/?feedView=all"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-slate-400 hover:bg-electric-500 hover:text-white transition-colors">
                
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/idealizeer"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-slate-400 hover:bg-electric-500 hover:text-white transition-colors">
                
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/Ideal202604"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-slate-400 hover:bg-electric-500 hover:text-white transition-colors">
                
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((item) =>
              <li key={item.label}>
                  <Link
                  to={item.to}
                  className="text-slate-400 hover:text-electric-400 transition-colors text-sm">
                  
                    {item.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-6">
              Services
            </h4>
            <ul className="space-y-4">
              {[
              'UI/UX Design',
              'Web Development',
              'Branding',
              'Digital Marketing',
              'Mobile Apps',
              'SEO Optimization'].
              map((item) =>
              <li key={item}>
                  <Link
                  to="/services"
                  className="text-slate-400 hover:text-electric-400 transition-colors text-sm">
                  
                    {item}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="w-5 h-5 text-electric-500 shrink-0" />
                <span>Pune, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Phone className="w-5 h-5 text-electric-500 shrink-0" />
                <a href="tel:+919922021699" className="hover:text-electric-400 transition-colors">+91 9922021699</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Phone className="w-5 h-5 text-electric-500 shrink-0" />
                <a href="https://wa.me/919922021699" target="_blank" rel="noreferrer" className="hover:text-electric-400 transition-colors">WhatsApp: +91 9922021699</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Mail className="w-5 h-5 text-electric-500 shrink-0" />
                <span>hello@idealizeer.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Idealizeer Content Solutions. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>);

}