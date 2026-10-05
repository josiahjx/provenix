'use client'
import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
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
            Terms of <span className="text-blue-400">Service</span>
          </h1>
          <p className="text-gray-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-400">
              By accessing and using TokenTrackers' services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">2. Services Description</h2>
            <p className="text-gray-400 mb-4">
              TokenTrackers provides cryptocurrency recovery services, including:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Lost private key recovery</li>
              <li>Wallet access restoration</li>
              <li>Transaction recovery assistance</li>
              <li>Security consultation</li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
            <p className="text-gray-400 mb-4">
              As a user of our services, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your account</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not engage in any fraudulent activities</li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">4. Fees and Payments</h2>
            <p className="text-gray-400 mb-4">
              Our fee structure is as follows:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Initial consultation: Free</li>
              <li>Recovery services: Fee based on complexity</li>
              <li>No recovery, no fee policy applies</li>
              <li>Payment methods: Cryptocurrency or fiat</li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-400">
              TokenTrackers is not liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. We make no guarantees regarding the success of recovery attempts.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">6. Contact Information</h2>
            <p className="text-gray-400">
              For any questions regarding these Terms of Service, please contact us at:
              <br />
              <a href="mailto:legal@tokentrackers.com" className="text-blue-400 hover:underline">
                legal@tokentrackers.com
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsOfService; 