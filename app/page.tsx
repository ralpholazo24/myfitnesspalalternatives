'use client';
import Image from "next/image";
import Hero from "./components/Hero";
import Data from "./components/Data";
import FAQ from "./components/FAQ";
import Newsletter from "./components/Newsletter";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[var(--background)]">
      <Hero />
      <div className="flex-1 w-full">
        <Data />      
        <FAQ />
        <Newsletter />
      </div>
    </main>
  );
}
