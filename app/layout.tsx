import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VigyanTra Tech - Innovative Software Solutions",
  description:
    "Custom Web, Mobile, and Cloud Development Services for Modern Businesses. Expert software development company specializing in cutting-edge technology solutions.",
  keywords:
    "software development, web development, mobile app development, cloud solutions, AI automation, VigyanTra Tech",
  authors: [{ name: "VigyanTra Tech" }],
  icons: {
    icon: [
      { url: "/favicon.png" },
      { url: "/icon.png", sizes: "any" },
    ],
    apple: "/icon.png",
  },
  openGraph: {
    title: "VigyanTra Tech - Innovative Software Solutions",
    description:
      "Custom Web, Mobile, and Cloud Development Services for Modern Businesses",
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
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
