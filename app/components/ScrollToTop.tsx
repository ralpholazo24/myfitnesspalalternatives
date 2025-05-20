'use client';

import React, { useState, useEffect } from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-[var(--accent)] text-white shadow-lg hover:bg-[var(--accent-secondary)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent-secondary)] focus:ring-offset-2 z-50"
          aria-label="Scroll to top"
        >
          <ChevronUpIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      )}
    </>
  );
} 