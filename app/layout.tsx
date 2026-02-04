import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://codebrew.tech"),
  title: "Code Brew — Monthly Tech Meetups",
  description:
    "Monthly meetups where software engineers, designers, founders, and tech professionals gather across Latin America and Spain to connect, share knowledge, and build relationships.",
  openGraph: {
    title: "Code Brew — Monthly Tech Meetups",
    description:
      "Building Latin America's most engaged tech community, one coffee at a time.",
    url: "https://codebrew.tech",
    siteName: "Code Brew",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Code Brew — Monthly Tech Meetups",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Code Brew — Monthly Tech Meetups",
    description:
      "Building Latin America's most engaged tech community, one coffee at a time.",
    images: ["/og-twitter.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
