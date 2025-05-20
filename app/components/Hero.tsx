'use client';
import React from "react";

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 bg-[var(--background)] text-[var(--foreground)]">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-mono font-bold text-center mb-4 sm:mb-6 md:mb-8">
        The Complete <span style={{ color: "var(--accent)" }}>MyFitnessPal</span>™ Alternatives List
      </h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center max-w-2xl mb-6 sm:mb-8 md:mb-10">
        Explore the best competitors to MyFitnessPal for your health and fitness tracking. Compare features, pricing, and find the perfect solution for your wellness journey.
      </p>
    </section>
  );
} 