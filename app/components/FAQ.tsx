'use client';

import React, { useState } from 'react';
import { faqs } from '../data/faq';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center py-24 px-4 mt-16">
      <h1 className="text-4xl md:text-6xl font-mono font-bold text-[var(--foreground)] mb-2">FAQs</h1>
      <p className="text-lg md:text-xl text-[var(--foreground)] opacity-80 mb-10">Your questions, answered.</p>
      <div className="w-full space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={faq.question}
            className="border border-[var(--border-color)] rounded-lg bg-[var(--card-background)] overflow-hidden transition-all hover:border-[var(--accent-secondary)]"
          >
            <button
              className="w-full flex justify-between items-center px-6 py-5 text-left text-lg font-mono text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-secondary)]"
              aria-expanded={openIndex === idx}
              aria-controls={`faq-panel-${idx}`}
              onClick={() => handleToggle(idx)}
            >
              {faq.question}
              <ChevronDownIcon
                className={`h-6 w-6 text-[var(--accent)] transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>
            {openIndex === idx && (
              <div
                id={`faq-panel-${idx}`}
                className="p-5 text-[var(--foreground)] opacity-80 text-base animate-fadeIn"
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease;
        }
      `}</style>
    </section>
  );
};

export default FAQ; 