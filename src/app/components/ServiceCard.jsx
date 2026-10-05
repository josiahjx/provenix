'use client'

import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import Link from 'next/link';

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 text-ink transition hover:-translate-y-1 hover:border-accent hover:shadow-card">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-mist">
        <Icon className="text-2xl text-accent" />
      </div>
      <h3 className="mb-3 text-xl font-black">{title}</h3>
      <p className="mb-4 leading-7 text-slate-600">{description}</p>
      <div className="flex items-center font-bold text-accent">
       <Link href="/about"><span>Learn more</span></Link>
        <FaArrowRight className="ml-2" />
      </div>
    </div>
  );
};

export default ServiceCard; 