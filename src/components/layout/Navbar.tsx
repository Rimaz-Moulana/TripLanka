'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Menu from 'lucide-react/icons/menu';
import X from 'lucide-react/icons/x';
import Phone from 'lucide-react/icons/phone';
import Globe from 'lucide-react/icons/globe';
import ChevronDown from 'lucide-react/icons/chevron-down';
import Compass from 'lucide-react/icons/compass';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import BookingModal from '@/components/ui/BookingModal';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    const handleOpenBookingModal = () => setIsBookingModalOpen(true);
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('openBookingModal', handleOpenBookingModal);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('openBookingModal', handleOpenBookingModal);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Tours', href: '/tours' },
    { name: 'Destinations', href: '/#destinations' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-border/40 py-3 shadow-sm'
          : 'bg-transparent border-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className={cn(
                "p-1.5 rounded-xl bg-gradient-to-tr from-primary to-secondary",
                scrolled ? "text-white shadow-md shadow-primary/20" : "text-white"
              )}
            >
              <Compass className="w-5 h-5 md:w-6 md:h-6" />
            </motion.div>
            <span className={cn(
              "text-xl md:text-2xl font-black tracking-tighter transition-all duration-500 bg-clip-text",
              scrolled 
                ? "text-transparent bg-gradient-to-r from-primary to-slate-900 group-hover:from-slate-900 group-hover:to-primary" 
                : "text-white group-hover:text-white/90"
            )}>
              TRIPLANKA
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  scrolled
                    ? (pathname === link.href ? 'text-primary' : 'text-foreground/80')
                    : 'text-white/90 hover:text-white'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger render={(triggerProps) => (
                <button {...triggerProps} className={cn(
                  "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-3 gap-1",
                  scrolled ? "text-foreground" : "text-white hover:bg-white/10"
                )}>
                  <Globe className="w-4 h-4" />
                  <span>EN</span>
                  <ChevronDown className="w-3 h-3 opacity-50" />
                </button>
              )} />
              <DropdownMenuContent align="end">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>German</DropdownMenuItem>
                <DropdownMenuItem>French</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button 
              onClick={() => setIsBookingModalOpen(true)}
              className={cn(
                "rounded-full px-6",
                !scrolled && "bg-white text-primary hover:bg-white/90 border-none"
              )}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "md:hidden p-2 rounded-md",
              scrolled ? "text-foreground" : "text-white"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-4 p-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-foreground/80"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t flex flex-col space-y-4">
              <div className="flex items-center space-x-2 text-primary font-bold">
                <Phone className="w-5 h-5" />
                <span>+94 77 123 4567</span>
              </div>
              <Button onClick={() => { setIsOpen(false); setIsBookingModalOpen(true); }} className="w-full rounded-full">Book Your Trip</Button>
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </nav>
  );
};

export default Navbar;
