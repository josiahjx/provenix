'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What types of cryptocurrency can you recover?',
      answer: 'We can recover most major cryptocurrencies including Bitcoin, Ethereum, and other popular altcoins. Our team has experience with various blockchain networks and wallet types.'
    },
    {
      question: 'How long does the recovery process take?',
      answer: 'The recovery time varies depending on the complexity of the case. Simple cases may take a few days, while more complex situations could take several weeks. We\'ll provide you with a timeline after our initial assessment.'
    },
    {
      question: 'What information do I need to provide?',
      answer: 'You\'ll need to provide details about how you lost access to your cryptocurrency, any relevant transaction IDs, wallet addresses, and any other information that might help in the recovery process.'
    },
    {
      question: 'Is my information secure?',
      answer: 'Yes, we take security very seriously. All information you provide is encrypted and stored securely. We follow strict confidentiality protocols and never share your information with third parties.'
    },
    {
      question: 'What if you can\'t recover my assets?',
      answer: 'We operate on a "No Recovery, No Fee" basis. If we\'re unable to recover your assets, you won\'t be charged commission. We\'ll be transparent about the chances of recovery from the start.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
    <section id="faq" className="bg-foam px-4 py-20 text-ink sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16 mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-3xl font-black tracking-tight md:text-5xl">
            Frequently asked <span className="font-serif font-normal italic text-accent">questions</span>
          </h2>
          <p className="mx-auto max-w-2xl text-slate-500">
            Find answers to common questions about our cryptocurrency recovery services.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 text-left transition hover:border-accent"
              >
                <span className="font-bold text-ink">{faq.question}</span>
                {openIndex === index ? (
                  <FaChevronUp className="text-accent" />
                ) : (
                  <FaChevronDown className="text-accent" />
                )}
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-1 rounded-2xl bg-white p-5"
                >
                  <p className="leading-7 text-slate-600">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; 