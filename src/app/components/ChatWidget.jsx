'use client'

import React from 'react';
import useTawkTo from '../hooks/useTawkTo';

const ChatWidget = () => {
  // Initialize the Tawk.to chat widget
  useTawkTo();

  return null; // The widget is injected into the DOM by the script
};

export default ChatWidget; 