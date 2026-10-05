'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaHandshake, FaChartLine, FaGlobe } from 'react-icons/fa';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const features = [
    {
      icon: FaShieldAlt,
      title: 'Secure Process',
      description: 'Your data and assets are protected with enterprise-grade security measures.',
      color: 'blue'
    },
    {
      icon: FaHandshake,
      title: 'No Recovery, No Fee',
      description: 'We only get paid commission when we successfully recover your assets.',
      color: 'green'
    },
    {
      icon: FaChartLine,
      title: 'High Success Rate',
      description: 'Over 85% success rate in recovering lost cryptocurrency.',
      color: 'purple'
    },
    {
      icon: FaGlobe,
      title: 'Global Support',
      description: 'Available 24/7 to assist clients worldwide.',
      color: 'red'
    }
  ];

  return (
    <section id="about" className="bg-white px-4 py-20 text-ink sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        

        <div className="grid md:grid-cols-2 gap-8">
          {/* <motion.div
            className="bg-gray-800 p-6 rounded-lg"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-300 mb-4">
              At CryptoGuard, we're dedicated to helping individuals and businesses recover their lost cryptocurrency assets. Our team of experts combines technical expertise with a deep understanding of blockchain technology to provide effective recovery solutions.
            </p>
            <p className="text-gray-300">
              We believe in transparency, security, and putting our clients first. Every case is unique, and we approach each one with the attention and care it deserves.
            </p>
          </motion.div> */}
          <motion.div 
          className="text-center mb-16  flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-3xl font-black tracking-tight md:text-5xl">
            Why choose <span className="text-accent">Provenix</span>
          </h2>
          <p className="mx-auto max-w-2xl text-slate-500">
            We combine cutting-edge technology with expert knowledge to provide the best recovery solutions.
          </p>
        </motion.div>

          <motion.div
            className="rounded-3xl border border-slate-200 bg-foam p-8"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="mb-4 text-xl font-black">Key features</h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start"
                >
                  <div className="mr-4 mt-1 text-xl text-accent">
                    <feature.icon />
                  </div>
                  <div>
                    <h4 className="font-bold text-ink">{feature.title}</h4>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 