'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaLock, FaUserShield, FaChartLine, FaCode, FaGlobe, FaHandshake } from 'react-icons/fa';

const AboutPlus = () => {
  const expertise = [
    {
      icon: <FaCode className="text-3xl text-blue-400" />,
      title: 'Technical Expertise',
      description: 'Our team consists of blockchain developers, cybersecurity experts, and cryptography specialists with years of experience in the field. We stay updated with the latest technological advancements to provide cutting-edge solutions.',
      details: [
        'Advanced cryptographic techniques',
        'Blockchain forensic analysis',
        'Smart contract auditing',
        'Cross-chain recovery protocols'
      ]
    },
    {
      icon: <FaShieldAlt className="text-3xl text-blue-400" />,
      title: 'Security Protocols',
      description: 'We implement enterprise-grade security measures to protect your sensitive information throughout the recovery process. Our security protocols are regularly audited and updated to meet industry standards.',
      details: [
        'End-to-end encryption',
        'Multi-factor authentication',
        'Secure data storage',
        'Regular security audits'
      ]
    },
    {
      icon: <FaGlobe className="text-3xl text-blue-400" />,
      title: 'Global Operations',
      description: 'With a presence in multiple countries, we provide 24/7 support to clients worldwide. Our global network allows us to handle cases across different jurisdictions and time zones.',
      details: [
        '24/7 customer support',
        'Multi-language assistance',
        'International legal expertise',
        'Cross-border operations'
      ]
    },
    {
      icon: <FaHandshake className="text-3xl text-blue-400" />,
      title: 'Client Success',
      description: 'We measure our success by our clients\' satisfaction. Our transparent approach and clear communication ensure that you are informed and involved throughout the recovery process.',
      details: [
        'Regular progress updates',
        'Transparent pricing',
        'Considerate consulation fees',
        'Post-recovery support'
      ]
    }
  ];

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

  return (
    <section id="about-plus" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16 mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-blue-400">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            At TokenTrackers, we combine technical excellence with years of experience to provide comprehensive cryptocurrency recovery solutions. Our team's expertise spans across multiple disciplines, ensuring we can handle even the most complex cases.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800 p-8 rounded-lg hover:shadow-lg transition duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-gray-400">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 bg-gray-800 p-8 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-white">Our Approach</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-400">Assessment</h4>
              <p className="text-gray-400">
                We begin with a thorough analysis of your case, identifying the best approach for recovery while maintaining the highest security standards.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-400">Implementation</h4>
              <p className="text-gray-400">
                Our team executes the recovery plan using advanced tools and techniques, keeping you informed at every step of the process.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-400">Verification</h4>
              <p className="text-gray-400">
                We verify the recovered assets and provide detailed documentation of the recovery process, ensuring complete transparency.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPlus; 