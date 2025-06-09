'use client'

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt, FaUser, FaTag, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import image from '../assets/image_fx.jpg'

const Blog = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: 'smooth'
      });
    }
  };

  const blogPosts = [
    {
      id: '1',
      title: 'Understanding Cryptocurrency Recovery',
      excerpt: 'Learn about the various methods and techniques used to recover lost or inaccessible digital assets.',
      date: 'March 15, 2024',
      author: 'Michael Chen',
      category: 'Security',
      image: image
    //   image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
    },
    {
      id: '2',
      title: 'The Future of Digital Asset Security',
      excerpt: 'Explore emerging trends in digital asset security and what they mean for investors.',
      date: 'March 10, 2024',
      author: 'Michael Chen',
      category: 'Technology',
      image: image
    //   image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
    },
    {
      id: '3',
      title: 'Navigating Cryptocurrency Regulations',
      excerpt: 'An overview of current regulatory frameworks and compliance requirements in the crypto space.',
      date: 'March 5, 2024',
      author: 'Michael Chen',
      category: 'Regulation',
      image: image
    //   image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
    },
    {
      id: '4',
      title: 'Blockchain Technology in Financial Services',
      excerpt: 'Discover how blockchain is transforming the financial services industry.',
      date: 'February 28, 2024',
      author: 'Emily Rodriguez',
      category: 'Technology',
      image: image
    //   image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
    },
    {
      id: '5',
      title: 'Cryptocurrency Investment Strategies',
      excerpt: 'Key principles and approaches for successful cryptocurrency investing.',
      date: 'February 20, 2024',
      author: 'Michael Chen',
      category: 'Investment',
      image: image
    //   image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
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
    <section className="min-h-screen bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest <span className="text-blue-400">Articles</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest insights and developments in cryptocurrency recovery and security.
          </p>
        </motion.div>

        <div className="relative">
          {showLeftArrow && (
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 z-10 shadow-lg hover:shadow-xl hover:scale-110"
              aria-label="Scroll left"
            >
              <FaChevronLeft className="text-xl" />
            </button>
          )}
          
          <motion.div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex flex-row gap-8 overflow-x-auto pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className="bg-gray-800 min-w-[300px] max-w-[400px] rounded-lg overflow-hidden hover:shadow-lg transition duration-300 flex-shrink-0"
              >
                <Link href={`/blog/${post.id}`} className="block">
                  <div className="relative w-full h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-gray-400 mb-4">
                      <span className="flex items-center">
                        <FaCalendarAlt className="mr-2" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <FaUser className="mr-2" />
                        {post.author}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{post.title}</h3>
                    <p className="text-gray-400">{post.excerpt}</p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>

          {showRightArrow && (
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 z-10 shadow-lg hover:shadow-xl hover:scale-110"
              aria-label="Scroll right"
            >
              <FaChevronRight className="text-xl" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog; 