'use client';

import React from "react";
import { alternatives } from "../data/alternatives";

export default function Data() {
  return (
    <section className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
      {alternatives.map((item, idx) => (
        <div
          key={item.name}
          onClick={() => window.open(item.website, "_blank")}
          className="cursor-pointer border border-[var(--border-color)] bg-[var(--card-background)] rounded-lg p-5 transition-shadow hover:shadow-lg hover:border-[var(--accent-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-secondary)]"
          tabIndex={0}
          role="button"
          aria-label={`Open ${item.name} website`}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl" aria-hidden>{item.icon}</span>
            <span className="font-bold font-mono text-lg">{item.name}</span>
          </div>
          <p className="text-base font-mono text-[var(--foreground)] whitespace-pre-line">
            {item.description}
          </p>
        </div>
      ))}
    </section>
  );
} 