import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://tezkaam.tech";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TezKaam | Digital Solutions for Growing Businesses",
    template: "%s | TezKaam",
  },
  description:
    "TezKaam helps businesses design, build, and scale reliable digital products, web platforms, automation systems, and cloud-powered solutions.",
  keywords: [
    "TezKaam",
    "digital solutions",
    "web development",
    "business automation",
    "cloud solutions",
    "UI/UX design",
    "digital strategy",
    "software development",
  ],
  authors: [{ name: "TezKaam" }],
  creator: "TezKaam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "TezKaam",
    title: "TezKaam | Digital Solutions for Growing Businesses",
    description:
      "TezKaam helps businesses design, build, and scale reliable digital products, web platforms, automation systems, and cloud-powered solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TezKaam | Digital Solutions for Growing Businesses",
    description:
      "TezKaam helps businesses design, build, and scale reliable digital products, web platforms, automation systems, and cloud-powered solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#0a0a0a] text-white">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
