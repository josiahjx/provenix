'use client'
import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
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
            Privacy <span className="text-blue-400">Policy</span>
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
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <p className="text-gray-400 mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Contact information (name, email, phone number)</li>
              <li>Wallet addresses and transaction details</li>
              <li>Communication preferences</li>
              <li>Technical information about your device</li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-400 mb-4">
              We use the collected information for:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Providing and improving our services</li>
              <li>Processing your recovery requests</li>
              <li>Communicating with you about your case</li>
              <li>Ensuring security and preventing fraud</li>
              <li>Complying with legal obligations</li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
            <p className="text-gray-400">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">4. Your Rights</h2>
            <p className="text-gray-400 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Data portability</li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
            <p className="text-gray-400">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <a href="mailto:support@provenix.org" className="text-blue-400 hover:underline">
                support@provenix.org
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy; 