'use client';
import React from "react";

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 md:py-32 lg:py-48 px-4 bg-[var(--background)] text-[var(--foreground)]">
      <h1 className="text-4xl md:text-7xl font-mono font-bold text-center mb-6 md:mb-8">
        The Complete <span style={{ color: "var(--accent)" }}>MyFitnessPal</span>™ Alternatives List
      </h1>
      <p className="text-lg md:text-2xl text-center max-w-2xl mb-8 md:mb-12">
        Explore the best competitors to MyFitnessPal for your health and fitness tracking. Compare features, pricing, and find the perfect solution for your wellness journey.
      </p>
    </section>
  );
} 