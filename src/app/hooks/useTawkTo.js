import { useEffect } from 'react';

const useTawkTo = () => {
  useEffect(() => {
    // Prevent duplicate script injection
    if (window.Tawk_API) return;

    // Create script element
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/6ac93bdea0c07d34c6278e3d/1k4h13ocj';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    // Initialize Tawk_API
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Insert script into DOM
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);

    // Cleanup function
    return () => {
      // Remove the script if component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);
};

export default useTawkTo; 