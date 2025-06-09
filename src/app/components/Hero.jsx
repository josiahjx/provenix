'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaHeadset, FaPlayCircle, FaWallet } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import Link from 'next/link';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.5
      }
    }
  };

  return (
    <section className="gradient-bg pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Recover Your <span className="text-blue-400">Lost Crypto</span> With Our Experts
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-300 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our team of blockchain forensic specialists has helped recover over $50M in lost cryptocurrency.
              Whether it's a forgotten password, hacked wallet, or scam, we can help.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
              >
                <FaHeadset className="mr-2" /> Free Consultation
              </Link>
              <Link
                href="/services"
                className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
              >
                <FaPlayCircle className="mr-2" /> How It Works
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div 
              className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div 
              className="absolute -bottom-10 -right-10 w-32 h-32 bg-green-500 rounded-full filter blur-3xl opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 2,
              }}
            />
            <motion.div 
              className="relative glow-card bg-gray-800 rounded-2xl p-6"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <motion.div 
                    className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <FaWallet className="text-white" />
                  </motion.div>
                  <span className="ml-3 font-semibold">Wallet Recovery</span>
                </div>
                <span className="text-green-400 text-sm font-medium">85% Success Rate</span>
              </div>
              <motion.div 
                className="progress-bar rounded-full mb-6"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              />
              <div className="grid grid-cols-2 gap-4 mb-6">
                <motion.div 
                  className="bg-gray-700 p-4 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <p className="text-gray-400 text-sm">Cases Solved</p>
                  <p className="text-xl font-bold">1,240+</p>
                </motion.div>
                <motion.div 
                  className="bg-gray-700 p-4 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <p className="text-gray-400 text-sm">Assets Recovered</p>
                  <p className="text-xl font-bold">$50M+</p>
                </motion.div>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-400 text-sm mb-2">Current Active Cases</p>
                <div className="flex items-center">
                  <div className="w-full bg-gray-600 rounded-full h-2.5">
                    <motion.div 
                      className="bg-blue-500 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "70%" }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                  </div>
                  <span className="ml-2 text-sm font-medium">72/103</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 