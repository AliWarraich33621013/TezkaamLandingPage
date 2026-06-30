import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://tezkaam.tech";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "tezkaam — the workspace that keeps up",
    template: "%s | tezkaam",
  },
  description:
    "Projects, tasks, calendar, reports, team and notes in one fast, uncluttered workspace. tez means fast. kaam means work.",
  keywords: [
    "tezkaam",
    "team management",
    "workspace",
    "tasks",
    "Pakistan",
    "SME",
    "project management",
  ],
  authors: [{ name: "tezkaam" }],
  creator: "tezkaam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "tezkaam",
    title: "tezkaam — the workspace that keeps up",
    description:
      "Projects, tasks, calendar, reports, team and notes in one fast, uncluttered workspace. tez means fast. kaam means work.",
  },
  twitter: {
    card: "summary_large_image",
    title: "tezkaam — the workspace that keeps up",
    description:
      "Projects, tasks, calendar, reports, team and notes in one fast, uncluttered workspace. tez means fast. kaam means work.",
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
    <html lang="en" className="js">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700,500&f[]=general-sans@400,500,600&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
