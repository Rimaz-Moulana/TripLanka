'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Compass from 'lucide-react/icons/compass';
import Facebook from 'lucide-react/icons/facebook';
import Instagram from 'lucide-react/icons/instagram';
import Twitter from 'lucide-react/icons/twitter';
import Mail from 'lucide-react/icons/mail';
import Phone from 'lucide-react/icons/phone';
import MapPin from 'lucide-react/icons/map-pin';
import Send from 'lucide-react/icons/send';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="group flex items-center space-x-2 w-fit">
              <motion.div
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="p-1.5 rounded-xl bg-gradient-to-tr from-primary to-secondary text-white"
              >
                <Compass className="w-5 h-5 md:w-6 md:h-6" />
              </motion.div>
              <span className="text-xl md:text-2xl font-black tracking-tighter transition-all duration-500 bg-clip-text text-white group-hover:text-primary">
                TRIPLANKA
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your gateway to discovering the wonders of Sri Lanka. From golden beaches to misty mountains, we curate unforgettable travel experiences tailored just for you.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/tours" className="hover:text-primary transition-colors">Tour Packages</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Travel Blog</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>123 Galle Road, Colombo 03, Sri Lanka</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+94 77 123 4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>hello@triplanka.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Newsletter</h4>
            <p className="text-slate-400 text-sm">
              Subscribe to get latest news and travel deals.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Your email" 
                className="bg-white/5 border-white/10 focus-visible:ring-primary text-white"
              />
              <Button size="icon" className="shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} TripLanka Tours. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
