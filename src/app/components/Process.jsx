import React from 'react';
import { FaSearch, FaFileAlt, FaHandshake, FaWallet } from 'react-icons/fa';

const Process = () => {
  // const steps = [
  //   {
  //     icon: FaSearch,
  //     title: "Initial Assessment",
  //     description: "We analyze your case and determine the best recovery approach.",
  //     color: "blue"
  //   },
  //   {
  //     icon: FaFileAlt,
  //     title: "Documentation",
  //     description: "We gather all necessary information and documentation for the recovery process.",
  //     color: "purple"
  //   },
  //   {
  //     icon: FaHandshake,
  //     title: "Recovery Plan",
  //     description: "We develop a customized recovery strategy based on your specific situation.",
  //     color: "green"
  //   },
  //   {
  //     icon: FaWallet,
  //     title: "Asset Recovery",
  //     description: "We execute the recovery plan and return your assets to your control.",
  //     color: "red"
  //   }
  // ];

  // return (
  //   <section id="process" className="py-20 px-4 sm:px-6 lg:px-8">
  //     <div className="max-w-7xl mx-auto">
  //       <div className="text-center mb-16">
  //         <h2 className="text-3xl md:text-4xl font-bold mb-4">
  //           Our <span className="text-blue-400">Recovery</span> Process
  //         </h2>
  //         <p className="text-gray-400 max-w-2xl mx-auto">
  //           Our proven 4-step process ensures the highest chance of successful recovery.
  //         </p>
  //       </div>

  //       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
  //         {steps.map((step, index) => (
  //           <div key={index} className="relative">
  //             <div className={`glow-card bg-gray-800 rounded-xl p-8 text-center h-full`}>
  //               <div className={`w-16 h-16 bg-${step.color}-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6`}>
  //                 <step.icon className={`text-${step.color}-400 text-3xl`} />
  //               </div>
  //               <div className="absolute -top-4 -right-4 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
  //                 <span className="text-white font-bold">{index + 1}</span>
  //               </div>
  //               <h3 className="text-xl font-bold mb-3">{step.title}</h3>
  //               <p className="text-gray-400">{step.description}</p>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );
  return (
    <>
     <section id="process" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 mt-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-blue-400">Recovery</span> Process</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    A transparent and methodical approach to maximize your chances of recovery.
                </p>
            </div>
            
            <div className="relative">
                
                <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gray-700 transform -translate-x-1/2"></div>
                
                
                <div className="space-y-12 md:space-y-0">
                   
                    <div className="relative md:flex md:items-center md:justify-between">
                        <div className="md:w-5/12 md:pr-12 mb-8 md:mb-0 text-right">
                            <div className="inline-block bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-2">Step 1</div>
                            <h3 className="text-xl font-bold mb-2">Initial Consultation</h3>
                            <p className="text-gray-400">
                                Free 30-minute consultation to assess your situation and determine recovery feasibility.
                            </p>
                        </div>
                        <div className="hidden  w-2/12 flex-shrink-0 md:flex justify-center">
                            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                                <i className="fas fa-comments text-white text-xl"></i>
                            </div>
                        </div>
                        <div className="md:w-5/12 md:pl-12"></div>
                    </div>
                    
                    
                    <div className="relative md:flex md:items-center md:justify-between">
                        <div className="md:w-5/12 md:pr-12"></div>
                        <div className="hidden md:flex w-2/12 flex-shrink-0  justify-center">
                            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                                <i className="fas fa-file-signature text-white text-xl"></i>
                            </div>
                        </div>
                        <div className="md:w-5/12 md:pl-12 mb-8 md:mb-0">
                            <div className="inline-block bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-2">Step 2</div>
                            <h3 className="text-xl font-bold mb-2">Agreement & Documentation</h3>
                            <p className="text-gray-400">
                                Sign our service agreement,pay consultation fee and provide necessary documentation about your case.
                            </p>
                        </div>
                    </div>
                    
                    
                    <div className="relative md:flex md:items-center md:justify-between">
                        <div className="md:w-5/12 md:pr-12 mb-8 md:mb-0 text-right">
                            <div className="inline-block bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-2">Step 3</div>
                            <h3 className="text-xl font-bold mb-2">Forensic Analysis</h3>
                            <p className="text-gray-400">
                                Our experts perform blockchain analysis and technical investigation of your case.
                            </p>
                        </div>
                        <div className="hidden  w-2/12 flex-shrink-0 md:flex justify-center">
                            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                                <i className="fas fa-search text-white text-xl"></i>
                            </div>
                        </div>
                        <div className="md:w-5/12 md:pl-12"></div>
                    </div>
                    
                    
                    <div className="relative md:flex md:items-center md:justify-between">
                        <div className="md:w-5/12 md:pr-12"></div>
                        <div className="hidden  w-2/12 flex-shrink-0 md:flex justify-center">
                            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                                <i className="fas fa-tools text-white text-xl"></i>
                            </div>
                        </div>
                        <div className="md:w-5/12 md:pl-12 mb-8 md:mb-0">
                            <div className="inline-block bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-2">Step 4</div>
                            <h3 className="text-xl font-bold mb-2">Recovery Attempt</h3>
                            <p className="text-gray-400">
                                Implementation of recovery strategies including technical and legal approaches.
                            </p>
                        </div>
                    </div>
                    
                   
                    <div className="relative md:flex md:items-center md:justify-between">
                        <div className="md:w-5/12 md:pr-12 mb-8 md:mb-0 text-right">
                            <div className="inline-block bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-2">Step 5</div>
                            <h3 className="text-xl font-bold mb-2">Funds Return</h3>
                            <p className="text-gray-400">
                                Successful recovery results in funds being returned to you minus our agreed fee.
                            </p>
                        </div>
                        <div className="hidden  w-2/12 flex-shrink-0 md:flex justify-center">
                            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                                <i className="fas fa-check-circle text-white text-xl"></i>
                            </div>
                        </div>
                        <div className="md:w-5/12 md:pl-12"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
};

export default Process; 