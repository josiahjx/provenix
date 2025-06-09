import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaShieldAlt } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#1e3a8a] to-[#0f172a] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <FaShieldAlt className="text-blue-400 text-2xl mr-2" />
              <span className="text-white text-xl font-bold">Forensiqo</span>
            </div>
            <p className="text-gray-400 mb-4">
              Professional cryptocurrency recovery services with a proven track record of success.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaGithub className="text-xl" />
              </a>
            </div> */}
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-white transition">Lost Private Keys</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition">Hacked Wallets</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition">Scam Recovery</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition">Wrong Transactions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
              <li><Link  href="/process" className="text-gray-400 hover:text-white transition">Our Process</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/legal/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/legal/terms" className="text-gray-400 hover:text-white transition">Terms of Service</Link></li>
              <li><Link href="/legal/disclaimer" className="text-gray-400 hover:text-white transition">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Forensiqo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 