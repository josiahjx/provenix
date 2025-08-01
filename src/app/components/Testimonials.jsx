import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "John D.",
      role: "Bitcoin Investor",
      content: "After losing access to my wallet with over 5 BTC, I thought all was lost. Forensigo recovered everything within 2 weeks. Their expertise is unmatched!",
      amount: "5 BTC"
    },
    {
      name: "Sarah M.",
      role: "Crypto Trader",
      content: "I fell victim to a phishing scam and lost my entire portfolio. Thanks to Forensigo quick action, I got back 90% of my assets. They're true professionals.",
      amount: "$250,000"
    },
    {
      name: "Michael R.",
      role: "NFT Collector",
      content: "When my hardware wallet failed, I thought I'd lost my valuable NFT collection. Forensigo team recovered everything and provided excellent support throughout.",
      amount: "15 NFTs"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client <span className="text-blue-400">Success</span> Stories
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear from our satisfied clients who have successfully recovered their assets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glow-card bg-gray-800 rounded-xl p-8">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-blue-500 bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <FaQuoteLeft className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">{testimonial.content}</p>
              <div className="bg-gray-700 p-4 rounded-lg">
                <p className="text-gray-400 text-sm">Amount Recovered</p>
                <p className="text-xl font-bold text-blue-400">{testimonial.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 