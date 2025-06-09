'use client'

import React, { useState } from 'react';
import { FaShieldAlt, FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import  Link  from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const navLinks = [
    { href: '/about', text: 'About' },
    { href: '/services', text: 'Services' },
    { href: '/blog', text: 'Blog' },
    { href: '/faq', text: 'FAQ' },
    { href: '/contact', text: 'Get Help', isButton: true },
    
  ];

  return (
    <>
      <nav className="bg-[#1e3a8a]/40 backdrop-blur-sm fixed w-[100vw] z-50 py-4">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="text-white text-2xl font-bold flex items-center">
                  {/* <FaShieldAlt className="inline-block mr-2" /> */}
                  <Image src="/image.png" alt="Forensiqo" width={100} height={100} />
                  Forensiqo
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className={`${
                      link.isButton
                        ? 'bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700'
                        : 'text-gray-300 hover:text-white px-3 py-2 rounded-md'
                    } text-sm font-medium transition`}
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleSidebar}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                <FaBars className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isSidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[55] md:hidden"
            onClick={closeSidebar}
          />
          <motion.div
            className="fixed top-0 right-0 h-full w-64 bg-gray-900 z-[55] md:hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={closeSidebar}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
            <div className="px-4 py-2">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  onClick={closeSidebar}
                  className={`${
                    link.isButton
                      ? 'bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700'
                      : 'text-gray-300 hover:text-white px-3 py-2 rounded-md'
                  } block text-sm font-medium transition mb-2`}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default Navbar; 