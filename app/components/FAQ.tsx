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
    <section className="w-full max-w-6xl mx-auto px-4 py-16 md:py-24">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-6xl font-bold text-[var(--foreground)]">FAQs</h1>
          <p className="text-lg md:text-xl text-[var(--foreground)] opacity-80">Your questions, answered.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={faq.question}
              className="border border-[var(--border-color)] rounded-lg bg-[var(--card-background)] overflow-hidden transition-all hover:border-[var(--accent-secondary)]"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-5 text-left text-lg text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-secondary)]"
                aria-expanded={openIndex === idx}
                aria-controls={`faq-panel-${idx}`}
                onClick={() => handleToggle(idx)}
              >
                <span className="pr-4">{faq.question}</span>
                <ChevronDownIcon
                  className={`h-6 w-6 text-[var(--accent)] transition-transform duration-200 flex-shrink-0 ${openIndex === idx ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
              {openIndex === idx && (
                <div
                  id={`faq-panel-${idx}`}
                  className="px-6 py-5 text-[var(--foreground)] opacity-80 text-base animate-fadeIn"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
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