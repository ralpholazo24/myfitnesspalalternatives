'use client';
import Image from "next/image";
import Hero from "./components/Hero";
import Data from "./components/Data";
import FAQ from "./components/FAQ";
import Newsletter from "./components/Newsletter";
import NotificationBar from "./components/NotificationBar";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <main className="flex flex-col bg-[var(--background)]">
      <NotificationBar />
      <Hero />
      <div className="flex-1 w-full">
        <Data />      
        <FAQ />
        <Newsletter />
      </div>
      <ScrollToTop />
    </main>
  );
}
