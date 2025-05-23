'use client';

import React from 'react';

export default function NotificationBar() {
  return (
    <div className="w-full bg-[var(--accent)] text-white py-1.5 sm:py-2 px-3 sm:px-4">
      <div className="max-w-6xl mx-auto flex items-center justify-center text-center">
        <p className="text-xs sm:text-sm md:text-base flex flex-wrap items-center justify-center gap-2">
          <span>🎉 Be our awesome sponsor or put your cool ads here!</span>
          <a
            href="mailto:ralpholazo@gmail.com"
            className="inline-block bg-white text-[var(--accent)] px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-opacity-90 hover:scale-105 transition-all duration-200 ease-in-out"
          >
            Contact Me
          </a>
        </p>
      </div>
    </div>
  );
} 