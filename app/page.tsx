'use client';
import Image from "next/image";
import Hero from "./components/Hero";
import Data from "./components/Data";
import FAQ from "./components/FAQ";
import Newsletter from "./components/Newsletter";
import NotificationBar from "./components/NotificationBar";
import ScrollToTop from "./components/ScrollToTop";

export const metadata = {
  title: "Best MyFitnessPal Alternatives – Compare Top Fitness & Nutrition Apps",
  description: "Discover the best MyFitnessPal alternatives for tracking nutrition, fitness, and health. Compare features, pricing, and find the perfect app for your wellness journey.",
  openGraph: {
    title: "Best MyFitnessPal Alternatives – Compare Top Fitness & Nutrition Apps",
    description: "Discover the best MyFitnessPal alternatives for tracking nutrition, fitness, and health. Compare features, pricing, and find the perfect app for your wellness journey.",
    url: "https://myfitnesspalalternatives.app/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best MyFitnessPal Alternatives – Compare Top Fitness & Nutrition Apps",
    description: "Discover the best MyFitnessPal alternatives for tracking nutrition, fitness, and health. Compare features, pricing, and find the perfect app for your wellness journey.",
  },
};

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
