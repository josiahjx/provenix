import React from 'react';
import { FaHeadset } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="animated-gradient rounded-2xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Recover Your <span className="text-blue-400">Lost Assets</span>?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Don't let lost crypto assets be a permanent loss. Our team of experts is ready to help you recover what's yours.
            </p>
            <a
               href="tel:+14244190622"
               target="_blank"
               rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              <FaHeadset className="mr-2" />
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 