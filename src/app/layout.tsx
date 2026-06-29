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
    default: "TezKaam | Team Management Software for Pakistani SMEs",
    template: "%s | TezKaam",
  },
  description:
    "TezKaam is a team management platform for small and medium businesses in Pakistan. Organize your company, manage your team, assign tasks, and stay aligned.",
  keywords: [
    "TezKaam",
    "team management",
    "SME software",
    "Pakistan",
    "task management",
    "workspace",
    "team collaboration",
    "small business software",
  ],
  authors: [{ name: "TezKaam" }],
  creator: "TezKaam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "TezKaam",
    title: "TezKaam | Team Management Software for Pakistani SMEs",
    description:
      "TezKaam is a team management platform for small and medium businesses in Pakistan. Organize your company, manage your team, assign tasks, and stay aligned.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TezKaam | Team Management Software for Pakistani SMEs",
    description:
      "TezKaam is a team management platform for small and medium businesses in Pakistan. Organize your company, manage your team, assign tasks, and stay aligned.",
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
