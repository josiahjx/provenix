'use client'

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaSpinner } from 'react-icons/fa';
// import { sendEmail } from '../services/emailService';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          setForm({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
          });
        },
        (error) => {
          setError('Something went wrong. Please try again.');
          console.error(error);
        }
      )
      .finally(() => {
        setLoading(false);
      });
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
    <section id="contact" className="bg-foam px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16 mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-3xl font-black tracking-tight text-ink md:text-5xl">
            Contact <span className="text-accent">us</span>
          </h2>
          <p className="mx-auto max-w-2xl text-slate-500">
            Have questions about our services? Get in touch with our team for expert assistance.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 text-ink">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <FaEnvelope className="text-2xl text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <p className="text-slate-600">
                    <a href="mailto:support@Provenix.org" className="transition hover:text-accent">
                      support@Provenix.org
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 text-ink">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <FaPhone className="text-2xl text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <p className="text-slate-600">
                    <a href="tel:+14244190622" className="transition hover:text-accent">
                      +1 (925) 246‑3400
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 text-ink">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <FaMapMarkerAlt className="text-2xl text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                  <p className="text-slate-600">
                    17100 ROYAL PALM BLVD<br />
                    STE 1 WESTON, FL 33326<br />             
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="rounded-3xl border border-slate-200 bg-white p-8 text-ink">
            {success ? (
              <div className="text-center py-8">
                <h3 className="text-2xl font-semibold text-green-400 mb-4">
                  Message Sent Successfully!
                </h3>
                <p className="text-slate-600 mb-6">
                  Thank you for contacting us. We'll get back to you soon.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="rounded-full bg-accent px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition duration-300 hover:bg-ink"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-bold text-ink">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-ink placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-bold text-ink">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-ink placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-bold text-ink">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-ink placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="+1 (234) 567-890"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-bold text-ink">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-ink placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-bold text-ink">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-ink placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your message..."
                  />
                </div>
                {error && (
                  <div className="text-red-400 text-sm">{error}</div>
                )}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center rounded-full bg-accent px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition duration-300 hover:bg-ink"
                  >
                    {loading ? (
                      <>
                        <FaSpinner className="animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 