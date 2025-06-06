import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { CookieConsent } from "./components/cookie-consent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best MyFitnessPal Alternatives – Compare Top Fitness & Nutrition Apps",
  description: "Discover the best MyFitnessPal alternatives for tracking nutrition, fitness, and health. Compare features, pricing, and find the perfect app for your wellness journey.",
  openGraph: {
    title: "Best MyFitnessPal Alternatives – Compare Top Fitness & Nutrition Apps",
    description: "Discover the best MyFitnessPal alternatives for tracking nutrition, fitness, and health. Compare features, pricing, and find the perfect app for your wellness journey.",
    url: "https://myfitnesspalalternatives.app/",
    type: "website",
    images: [
      {
        url: "https://myfitnesspalalternatives.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MyFitnessPal Alternatives - Compare Top Fitness & Nutrition Apps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best MyFitnessPal Alternatives – Compare Top Fitness & Nutrition Apps",
    description: "Discover the best MyFitnessPal alternatives for tracking nutrition, fitness, and health. Compare features, pricing, and find the perfect app for your wellness journey.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <link rel="canonical" href="https://myfitnesspalalternatives.app/" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9MZE0BC8JD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9MZE0BC8JD', {
              'cookie_flags': 'SameSite=None;Secure'
            });
          `}
        </Script>
        <Analytics />
        <ThemeProvider>
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}