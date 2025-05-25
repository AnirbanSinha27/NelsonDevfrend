// components/Header.js
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, ShoppingCart } from 'lucide-react';
import { Button } from '../ui/button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About us', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Shop', href: '/shop' },
    { name: 'Contacts', href: '/contacts' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-950 shadow-md py-4' : 'bg-gray-950 py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20"> {/* Increased height */}
          {/* Logo - Made larger */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.png"
              alt="Nelson Barber Logo"
              width={180} // Increased width
              height={60} // Increased height
              className="h-16 w-auto" // Increased size
              priority
            />
          </Link>

          {/* Desktop Navigation - Increased font size */}
          <nav className="hidden md:flex items-center space-x-15">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xl font-medium text-white hover:text-amber-400 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Side - Contact, Cart & Button */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <Phone className="h-6 w-6 text-amber-400" /> {/* Larger icon */}
              <span className="text-base font-medium text-white">+1 234 567 890</span> {/* Larger text */}
            </div>
            
            {/* Shopping Cart Icon with Badge */}
            <button className="relative p-2 text-white hover:text-amber-400 transition-colors">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-amber-400 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
            
            <Button variant="default" className="bg-amber-400 hover:bg-amber-500 text-black h-11 px-6 text-base">
              Book Online
            </Button>
          </div>

          {/* Mobile Menu Button - Larger */}
          <button
            className="md:hidden p-3 rounded-md text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-8 w-8" />
          </button>
        </div>
      </div>

      {/* Mobile Menu - Adjusted for larger size */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-900 z-50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/logo.png"
                  alt="Nelson Barber Logo"
                  width={160}
                  height={60}
                  className="h-12 w-auto"
                />
              </Link>
              <button
                className="p-3 rounded-md text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-8 w-8" />
              </button>
            </div>

            <nav className="mt-10 flex flex-col space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xl font-medium text-white hover:text-amber-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <div className="flex items-center space-x-4 mb-8">
                <Phone className="h-6 w-6 text-amber-400" />
                <span className="text-base font-medium text-white">+1 234 567 890</span>
              </div>
              
              <div className="flex items-center space-x-6">
                <button className="relative p-2 text-white hover:text-amber-400">
                  <ShoppingCart className="h-7 w-7" />
                  <span className="absolute -top-1 -right-1 bg-amber-400 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    3
                  </span>
                </button>
                
                <Button variant="default" className="flex-1 bg-amber-400 hover:bg-amber-500 text-black h-12 text-base">
                  Book Online
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}