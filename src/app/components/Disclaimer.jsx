'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Disclaimer = () => {
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
    <section className="min-h-screen bg-gray-900 py-20 px-4 text-slate-100 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Legal <span className="text-blue-400">Disclaimer</span>
          </h1>
          <p className="text-gray-400">
            Last updated: 4/20/2025
          </p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">1. No Guarantees</h2>
            <p className="text-gray-400">
              Provenix makes no guarantees regarding the success of cryptocurrency recovery attempts. While we employ our best efforts and expertise, the nature of blockchain technology means that not all recovery attempts will be successful.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">2. Risk Disclosure</h2>
            <p className="text-gray-400 mb-4">
              Cryptocurrency investments and transactions involve significant risks, including:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Market volatility</li>
              <li>Regulatory changes</li>
              <li>Technical vulnerabilities</li>
              <li>Potential loss of funds</li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">3. Not Financial Advice</h2>
            <p className="text-gray-400">
              The information provided on our website and through our services is for informational purposes only and should not be construed as financial, investment, or legal advice. Always conduct your own research and consult with qualified professionals before making any financial decisions.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">4. Third-Party Links</h2>
            <p className="text-gray-400">
              Our website may contain links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of any third-party sites or services.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">5. Service Limitations</h2>
            <p className="text-gray-400 mb-4">
              Our services are subject to certain limitations:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Technical feasibility of recovery</li>
              <li>Legal and regulatory constraints</li>
              <li>Available information and documentation</li>
              <li>Time constraints and resource availability</li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">6. Contact Information</h2>
            <p className="text-gray-400">
              For any questions regarding this Disclaimer, please contact us at:
              <br />
              <a href="mailto:legal@tokentrackers.org" className="text-blue-400 hover:underline">
                legal@Provenix.org
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Disclaimer; 