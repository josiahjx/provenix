'use client'
import React from 'react'
import { FaWallet } from 'react-icons/fa';
import Link from 'next/link'

const HeroPage = () => {
  return (
    <>
<section className="relative w-[100vw] min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#1e3a8a] to-[#0f172a] py-16">
    <div className="container  mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-center h-full w-[100vw]">
      {/* Text Section aligned responsively */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-start md:items-start text-left mt-10 md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Crypto <span className="text-blue-500">Intelligence</span> <br/>& <span className="text-blue-500">Recovery</span> Solutions
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl">
          Protecting your digital assets with cutting-edge blockchain forensics and recovery services.
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-10 w-full md:w-auto">
          <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition duration-300 text-lg">
            Recover Your Funds
          </Link>
          <Link href="/services" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-blue-700 hover:border-blue-700 transition duration-300 text-lg">
            Our Services
          </Link>
        </div>
        <div className="mt-8 flex justify-center md:justify-start w-full md:w-auto">
          <div className="flex items-center space-x-8">
            <div className="text-white text-center">
              <div className="text-3xl font-extrabold">$100M+</div>
              <div className="text-blue-200">Recovered</div>
            </div>
            <div className="h-12 w-px bg-blue-300"></div>
            <div className="text-white text-center">
              <div className="text-3xl font-extrabold">98%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
            <div className="h-12 w-px bg-blue-300"></div>
            <div className="text-white text-center">
              <div className="text-3xl font-extrabold">24/7</div>
              <div className="text-blue-200">Support</div>
            </div>
          </div>
        </div>
      </div>
      {/* New Wallet Recovery Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0">
        <div className="relative glow-card bg-gray-800 rounded-2xl p-6 w-full max-w-md">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <FaWallet className="text-white" />
              </div>
              <span className="ml-3 font-semibold">Wallet Recovery</span>
            </div>
            <span className="text-green-400 text-sm font-medium">85% Success Rate</span>
          </div>
          <div className="progress-bar rounded-full mb-6 bg-gray-700 h-2.5 w-full">
            <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '100%' }} />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-gray-400 text-sm">Cases Solved</p>
              <p className="text-xl font-bold">1,000+</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-gray-400 text-sm">Assets Recovered</p>
              <p className="text-xl font-bold">$100M+</p>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="text-gray-400 text-sm mb-2">Current Active Cases</p>
            <div className="flex items-center">
              <div className="w-full bg-gray-600 rounded-full h-2.5">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '70%' }} />
              </div>
              <span className="ml-2 text-sm font-medium">72/103</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>
    </>
  )
}

export default HeroPage