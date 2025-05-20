'use client';

import React from 'react';

export default function NotificationBar() {
  return (
    <div className="w-full bg-[var(--accent)] text-white py-2 px-4">
      <div className="max-w-6xl mx-auto flex items-center justify-center text-center">
        <p className="text-sm md:text-base">
          🎉 Be our sponsor or put your ads here!{' '}
          <a
            href="mailto:ralpholazo24@gmail.com"
            className="inline-block bg-white text-[var(--accent)] px-3 py-1 rounded-full text-sm font-medium hover:bg-opacity-90 hover:scale-105 transition-all duration-200 ease-in-out ml-2"
          >
            Contact Me
          </a>
        </p>
      </div>
    </div>
  );
} 