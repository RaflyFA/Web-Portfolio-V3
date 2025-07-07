import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rafly FA - Web Developer & UI/UX Designer",
  description:
    "Portfolio website of Rafly FA, a passionate Web Developer and UI/UX Designer creating meaningful digital experiences with modern technologies like React, Next.js, and innovative design principles.",
  keywords: [
    "web developer",
    "ui/ux designer",
    "react developer",
    "next.js developer",
    "frontend developer",
    "portfolio",
    "rafly fa",
    "web design",
    "mobile app developer",
  ],
  authors: [{ name: "Rafly FA", url: "https://rafly-fa.vercel.app" }],
  creator: "Rafly FA",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://rafly-fa.vercel.app",
    title: "Rafly FA - Web Developer & UI/UX Designer",
    description:
      "Portfolio website of Rafly FA, a passionate Web Developer and UI/UX Designer creating meaningful digital experiences.",
    siteName: "Rafly FA Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rafly FA Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafly FA - Web Developer & UI/UX Designer",
    description:
      "Portfolio website of Rafly FA, a passionate Web Developer and UI/UX Designer creating meaningful digital experiences.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.jpg" type="image/jpg" />
        <link rel="apple-touch-icon" href="/favicon.jpg" />
        <link
          rel="icon"
          type="image/jpg"
          sizes="32x32"
          href="/favicon-32x32.jpg"
        />
        <link
          rel="icon"
          type="image/jpg"
          sizes="16x16"
          href="/favicon-16x16.jpg"
        />
        <link rel="shortcut icon" href="/favicon.jpg" />
        <meta name="theme-color" content="#8B5CF6" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
