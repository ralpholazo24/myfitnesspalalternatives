'use client';
import React from "react";

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-24 px-4 bg-[var(--background)] text-[var(--foreground)]">
      <h1 className="text-4xl md:text-6xl font-mono font-bold text-center mb-6 max-w-5xl">
        The Complete MyFitnessPal™ Alternatives List 🏋️
      </h1>
      <p className="text-lg md:text-xl text-center max-w-2xl mb-8 font-mono">
        Explore the best competitors to MyFitnessPal for your health and fitness tracking. Compare features, pricing, and find the perfect solution for your wellness journey.
      </p>
    </section>
  );
} 