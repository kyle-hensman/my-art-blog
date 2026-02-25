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

export const metadata: Metadata = {
  title: "Artist Studio - Contemporary Art Gallery | Prince Edward Island",
  description: "Discover vibrant contemporary paintings and artwork celebrating Prince Edward Island's natural beauty. Explore our gallery of oil, acrylic, watercolor, and mixed media pieces.",
  keywords: ["art gallery", "contemporary art", "Prince Edward Island", "paintings", "local artist"],
  openGraph: {
    title: "Artist Studio - Contemporary Art Gallery",
    description: "Vibrant contemporary paintings celebrating Prince Edward Island",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-slate-900 text-amber-950 dark:text-amber-50`}
      >
        {children}
      </body>
    </html>
  );
}
