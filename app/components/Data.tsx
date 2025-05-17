'use client';

import React, { useState } from "react";
import { alternatives } from "../data/alternatives";

export default function Data() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAlternatives = alternatives.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-24">
      <div className="space-y-8 md:space-y-12">
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search alternatives..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-[300px] sm:max-w-md px-4 py-2 md:py-3 rounded-md border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            aria-label="Search alternatives"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredAlternatives.map((item) => (
            <div
              key={item.name}
              onClick={() => window.open(item.website, "_blank")}
              className="cursor-pointer border border-[var(--border-color)] bg-[var(--card-background)] rounded-lg p-4 md:p-6 transition-shadow hover:shadow-lg hover:border-[var(--accent-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-secondary)]"
              tabIndex={0}
              role="button"
              aria-label={`Open ${item.name} website`}
            >
              <div className="flex items-center gap-3 mb-2 md:mb-3">
                <span className="text-xl md:text-2xl" aria-hidden>{item.icon}</span>
                <span className="font-bold text-base md:text-lg">{item.name}</span>
              </div>
              <p className="text-sm text-[var(--foreground)] whitespace-pre-line">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 