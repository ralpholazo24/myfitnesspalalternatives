'use client';
import React from "react";

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 md:py-24 px-4 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          The Complete MyFitnessPal™ Alternatives List 🏋️
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Explore the best competitors to MyFitnessPal for your health and fitness tracking. Compare features, pricing, and find the perfect solution for your wellness journey.
        </p>
      </div>
    </section>
  );
} 