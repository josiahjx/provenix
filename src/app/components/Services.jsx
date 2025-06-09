'use client'


import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { FaKey, FaUserShield, FaHandHoldingUsd, FaExchangeAlt,FaHammer,FaDatabase } from 'react-icons/fa';

export default function Services() {
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
    hidden: (index) => ({
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50,
      y: index < 2 ? -50 : 50
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const service = [
    {
      icon: FaKey,
      title: 'Lost Private Keys',
      description: 'Recover access to wallets when you\'ve lost your private keys or seed phrases through our advanced cryptographic techniques.',
      color: 'blue'
    },
    {
      icon: FaUserShield,
      title: 'Hacked Wallets',
      description: 'Trace and recover funds from compromised wallets through blockchain forensic analysis and legal interventions.',
      color: 'purple'
    },
    {
      icon: FaHandHoldingUsd,
      title: 'Scam Recovery',
      description: 'Get help recovering funds lost to phishing scams, fake ICOs, rug pulls, and other fraudulent activities.',
      color: 'green'
    },
    {
      icon: FaExchangeAlt,
      title: 'Wrong Transactions',
      description: 'Attempt recovery when crypto is sent to wrong addresses or incompatible networks through our negotiation protocols.',
      color: 'red'
    },
    {
      icon: FaDatabase,
      title: 'Hardware issues',
      description: 'Recover crypto from damaged, lost, or malfunctioning hardware wallets through our data extraction techniques.',
      color: 'green'
    },
    {
      icon: FaHammer,
      title: 'Legal Support',
      description: ' Our legal team can assist with subpoenas, court orders, and other legal processes to recover stolen funds.',
      color: 'blue'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mt-10 mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-blue-400">Recovery</span> Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We specialize in various types of cryptocurrency recovery scenarios with proven methodologies.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {service.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                color={service.color}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

