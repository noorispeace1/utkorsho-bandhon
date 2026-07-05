"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-black/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-3xl font-extrabold text-festive tracking-tight">
                Utkorsho
              </span>
              <span className="text-3xl font-bold text-nature">Bandhon</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 items-center justify-between ml-10">
            <div className="flex items-baseline space-x-8">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/our-heritage">Our Heritage</NavLink>
              <NavLink href="/utshob-events">Utshob Events</NavLink>
              <NavLink href="/gallery">Gallery</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-foreground/80 hover:text-nature font-medium transition-colors text-sm">
                Dashboard
              </Link>
              <Link href="/auth/login" className="text-foreground font-bold hover:text-festive transition-colors text-sm">
                Log In
              </Link>
              <Link href="/auth/login?tab=register" className="px-5 py-2 bg-festive text-white text-sm font-bold rounded-xl hover:bg-red-700 shadow-md transition-all hover:shadow-lg hover:shadow-festive/30 active:scale-95">
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-festive hover:bg-black/5 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-black/5">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="/our-heritage" onClick={() => setIsOpen(false)}>Our Heritage</MobileNavLink>
            <MobileNavLink href="/utshob-events" onClick={() => setIsOpen(false)}>Utshob Events</MobileNavLink>
            <MobileNavLink href="/gallery" onClick={() => setIsOpen(false)}>Gallery</MobileNavLink>
            <MobileNavLink href="/contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
            <hr className="border-black/5 my-2" />
            <MobileNavLink href="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</MobileNavLink>
            <MobileNavLink href="/auth/login" onClick={() => setIsOpen(false)}>Log In</MobileNavLink>
            <Link 
              href="/auth/login?tab=register"
              onClick={() => setIsOpen(false)}
              className="block text-center mt-4 px-3 py-3 bg-festive text-white font-bold rounded-xl shadow-md"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children }) {
  return (
    <Link 
      href={href} 
      className="text-foreground hover:text-nature font-medium transition-colors duration-200 text-lg relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-festive transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-foreground hover:text-nature block px-3 py-2 rounded-md text-base font-medium transition-colors"
    >
      {children}
    </Link>
  );
}
