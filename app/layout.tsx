import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./components/Providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PurwaWeb - Solusi Digital Terpercaya untuk Web, Mobile, dan Desktop",
  description: "PurwaWeb adalah partner digital terpercaya yang menyediakan layanan pengembangan aplikasi Web, Mobile, dan Desktop dengan kualitas tinggi dan support berkelanjutan.",
  keywords: ["web development", "mobile app", "desktop application", "software development", "PurwaWeb"],
  authors: [{ name: "PurwaWeb" }],
  openGraph: {
    title: "PurwaWeb - Solusi Digital Terpercaya",
    description: "Partner digital terpercaya untuk solusi teknologi berkelanjutan",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

