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
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
      <div className="mb-10 flex justify-center">
        <input
          type="text"
          placeholder="Search alternatives..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-[300px] sm:max-w-md px-4 py-2 rounded-md border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
          aria-label="Search alternatives"
        />
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {filteredAlternatives.map((item) => (
          <div
            key={item.name}
            onClick={() => window.open(item.website, "_blank")}
            className="cursor-pointer border border-[var(--border-color)] bg-[var(--card-background)] rounded-lg p-4 sm:p-5 transition-shadow hover:shadow-lg hover:border-[var(--accent-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-secondary)]"
            tabIndex={0}
            role="button"
            aria-label={`Open ${item.name} website`}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl" aria-hidden>{item.icon}</span>
              <span className="font-bold font-mono text-base sm:text-lg">{item.name}</span>
            </div>
            <p className="text-sm sm:text-base font-mono text-[var(--foreground)] whitespace-pre-line">
              {item.description}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
} 