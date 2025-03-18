// components/ui/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAppContext } from '@/context/AppContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { departments } = useAppContext();

  return (
    <nav className="bg-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl">FET</Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="px-3 py-2 hover:bg-blue-700 rounded">Home</Link>
            
            {/* Departments Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 hover:bg-blue-700 rounded flex items-center">
                Departments
                <svg 
                  className="w-4 h-4 ml-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                {departments.map((dept) => (
                  <Link 
                    key={dept.id}
                    href={`/departments/${dept.id}`} 
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                  >
                    {dept.name}
                  </Link>
                ))}
                <Link 
                  href="/departments" 
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-100 border-t"
                >
                  All Departments
                </Link>
              </div>
            </div>
            
            <Link href="/about" className="px-3 py-2 hover:bg-blue-700 rounded">About</Link>
            <Link href="/news" className="px-3 py-2 hover:bg-blue-700 rounded">News</Link>
            <Link href="/contact" className="px-3 py-2 hover:bg-blue-700 rounded">Contact</Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-blue-700 p-2 rounded"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <Link 
              href="/" 
              className="block px-3 py-2 hover:bg-blue-700 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            <div className="mt-2 border-t border-blue-700 pt-2">
              <div className="px-3 py-2 font-medium">Departments</div>
              <div className="pl-6">
                {departments.map((dept) => (
                  <Link 
                    key={dept.id}
                    href={`/departments/${dept.id}`} 
                    className="block px-3 py-2 hover:bg-blue-700 rounded"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {dept.name}
                  </Link>
                ))}
                <Link 
                  href="/departments" 
                  className="block px-3 py-2 hover:bg-blue-700 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  All Departments
                </Link>
              </div>
            </div>
            
            <Link 
              href="/about" 
              className="block px-3 py-2 hover:bg-blue-700 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/news" 
              className="block px-3 py-2 hover:bg-blue-700 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              News
            </Link>
            <Link 
              href="/contact" 
              className="block px-3 py-2 hover:bg-blue-700 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}