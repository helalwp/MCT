import React, { useState } from 'react';
import { HashRouter, Link, useLocation } from 'react-router-dom';
import { Menu, X, Monitor, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const NavLink = ({ to, children, mobile = false, onClick }: { to: string; children: React.ReactNode; mobile?: boolean; onClick?: () => void }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  const baseClasses = mobile
    ? "block w-full px-4 py-2 text-left hover:bg-mct-50 text-slate-600 font-medium"
    : "hover:text-mct-600 transition-colors font-medium";
  
  const activeClasses = mobile
    ? "bg-mct-50 text-mct-600 border-l-4 border-mct-600"
    : "text-mct-600";

  return (
    <Link 
      to={to} 
      className={`${baseClasses} ${isActive ? activeClasses : ''}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-mct-600 text-white p-2 rounded-lg group-hover:bg-mct-800 transition-colors">
                <Monitor size={24} />
              </div>
              <div className="leading-tight">
                <h1 className="text-lg font-bold text-slate-900">MCT Dept.</h1>
                <p className="text-xs text-slate-500 font-medium tracking-wide">Multimedia & Creative Tech</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/faculty">Faculty</NavLink>
              <NavLink to="/courses">Courses</NavLink>
              <NavLink to="/gallery">Gallery</NavLink>
              <NavLink to="/news">News</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-slate-600 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-slate-100 bg-white absolute w-full shadow-lg">
            <div className="flex flex-col py-2">
              <NavLink to="/" mobile onClick={() => setIsMenuOpen(false)}>Home</NavLink>
              <NavLink to="/about" mobile onClick={() => setIsMenuOpen(false)}>About Us</NavLink>
              <NavLink to="/faculty" mobile onClick={() => setIsMenuOpen(false)}>Faculty</NavLink>
              <NavLink to="/courses" mobile onClick={() => setIsMenuOpen(false)}>Courses</NavLink>
              <NavLink to="/gallery" mobile onClick={() => setIsMenuOpen(false)}>Gallery</NavLink>
              <NavLink to="/news" mobile onClick={() => setIsMenuOpen(false)}>News</NavLink>
              <NavLink to="/contact" mobile onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
            </div>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center space-x-2 mb-4 text-white">
                <Monitor size={20} />
                <span className="font-bold text-lg">MCT Dept.</span>
              </div>
              <p className="text-sm text-slate-400 mb-4">
                Empowering the next generation of creative technologists through innovation and design.
              </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/courses" className="hover:text-white">Academic Calendar</Link></li>
              <li><Link to="/faculty" className="hover:text-white">Staff Directory</Link></li>
              <li><Link to="/gallery" className="hover:text-white">Student Works</Link></li>
              <li><Link to="/contact" className="hover:text-white">Admissions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>123 Creative Avenue, Tech City</li>
              <li>Building 4, Floor 2</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Email: info@mct.edu</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
            <div className="mt-6">
              <Link to="/contact" className="inline-flex items-center space-x-2 bg-mct-600 hover:bg-mct-700 text-white px-4 py-2 rounded-md text-sm transition-colors">
                <Mail size={16} />
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} MCT Department. All rights reserved.
        </div>
      </footer>
    </div>
  );
};