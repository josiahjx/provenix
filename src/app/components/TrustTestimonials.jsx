'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const TrustTestimonials = () => {
  const testimonials = [
    {
      name: 'Simon Phil.',
      role: 'Blockchain Secuirity Analyst',
      content: 'Provenix helped me recover my lost Bitcoin wallet. Their team was professional and efficient throughout the entire process.',
      rating: 5
    },
    {
      name: 'Jerom Kylian.',
      role: 'Crypto Trader',
      content: 'I thought my Ethereum was gone forever, but Provenix proved me wrong. Their expertise in blockchain recovery is unmatched.',
      rating: 5
    },
    {
      name: 'Emily Anke.',
      role: 'Business Owner',
      content: 'The team at Provenix went above and beyond to help me recover my business funds. Highly recommended!',
      rating: 4
    },
    {
      name: 'Susan Walt.',
      role: 'Crypto Enthusiast',
      content: 'Fast, reliable, and trustworthy. Provenix helped me recover my lost assets when others couldn\'t.',
      rating: 5
    },
    {
      name: 'David Matt.',
      role: 'Software Developer',
      content: 'As someone who understands blockchain technology, I can attest to Provenix\'s technical expertise.',
      rating: 4
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
    <section id="testimonials" className="bg-gray-900 px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="text-blue-400">Thousands</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our recovery services.
          </p>
        </motion.div>

        <motion.div 
          className="relative overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="flex space-x-8"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="min-w-[300px] bg-gray-800 p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="ml-1" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300">{testimonial.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustTestimonials; 