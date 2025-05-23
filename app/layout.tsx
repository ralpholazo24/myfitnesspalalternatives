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
  title: "The Complete MyFitnessPal Alternatives List",
  description: "Explore the best competitors to MyFitnessPal for your health and fitness tracking. Compare features, pricing, and find the perfect solution for your wellness journey.",
  openGraph: {
    title: "The Complete MyFitnessPal Alternatives List",
    description: "Explore the best competitors to MyFitnessPal for your health and fitness tracking. Compare features, pricing, and find the perfect solution for your wellness journey.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Complete MyFitnessPal Alternatives List"
      }
    ],
    type: "website",
    locale: "en_US",
    siteName: "MyFitnessPal Alternatives"
  },
  twitter: {
    card: "summary_large_image",
    title: "The Complete MyFitnessPal Alternatives List",
    description: "Explore the best competitors to MyFitnessPal for your health and fitness tracking. Compare features, pricing, and find the perfect solution for your wellness journey.",
    images: ["/og-image.jpg"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
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
