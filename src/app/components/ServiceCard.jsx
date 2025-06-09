'use client'

import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import Link from 'next/link';

const ServiceCard = ({ icon: Icon, title, description, color }) => {
  return (
    <div className={`glow-card bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition md:h-[45vh]`}>
      <div className={`w-14 h-14 bg-${color}-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-6`}>
        <Icon className={`text-${color}-400 text-2xl`} />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className={`flex items-center text-${color}-400 font-medium`}>
       <Link href="/about"><span>Learn more</span></Link>
        <FaArrowRight className="ml-2" />
      </div>
    </div>
  );
};

export default ServiceCard; 