import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vigyantratech.com"),
  title: {
    default: "VigyanTra Tech - Innovative Software Solutions",
    template: "%s | VigyanTra Tech",
  },
  description:
    "Custom Web, Mobile, and Cloud Development Services for Modern Businesses. Expert software development company specializing in cutting-edge technology solutions, AI automation, and digital transformation.",
  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "cloud solutions",
    "AI automation",
    "digital transformation",
    "custom software",
    "enterprise solutions",
    "React development",
    "Next.js development",
    "Node.js development",
    "VigyanTra Tech",
  ],
  authors: [{ name: "VigyanTra Tech", url: "https://vigyantratech.com" }],
  creator: "VigyanTra Tech",
  publisher: "VigyanTra Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.png" },
      { url: "/icon.png", sizes: "any" },
    ],
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vigyantratech.com",
    title: "VigyanTra Tech - Innovative Software Solutions",
    description:
      "Custom Web, Mobile, and Cloud Development Services for Modern Businesses. Expert software development company specializing in cutting-edge technology solutions.",
    siteName: "VigyanTra Tech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VigyanTra Tech - Innovative Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VigyanTra Tech - Innovative Software Solutions",
    description:
      "Custom Web, Mobile, and Cloud Development Services for Modern Businesses.",
    images: ["/og-image.png"],
    creator: "@vigyantratech",
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
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: "https://vigyantratech.com",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "VigyanTra Tech",
              url: "https://vigyantratech.com",
              logo: "https://vigyantratech.com/icon.png",
              description:
                "Expert software development company specializing in web, mobile, and cloud solutions.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Tech Street",
                addressLocality: "Silicon Valley",
                addressRegion: "CA",
                postalCode: "94025",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-123-4567",
                contactType: "Customer Service",
                email: "info@vigyantratech.com",
                availableLanguage: ["English"],
              },
              sameAs: [
                "https://www.facebook.com/vigyantratech",
                "https://twitter.com/vigyantratech",
                "https://www.linkedin.com/company/vigyantratech",
                "https://github.com/vigyantratech",
              ],
            }),
          }}
        />
        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "VigyanTra Tech",
              url: "https://vigyantratech.com",
              description:
                "Custom Web, Mobile, and Cloud Development Services for Modern Businesses",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://vigyantratech.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        {/* Structured Data - Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "VigyanTra Tech",
              image: "https://vigyantratech.com/icon.png",
              "@id": "https://vigyantratech.com",
              url: "https://vigyantratech.com",
              telephone: "+1-555-123-4567",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Tech Street",
                addressLocality: "Silicon Valley",
                addressRegion: "CA",
                postalCode: "94025",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 37.3861,
                longitude: -122.0839,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "10:00",
                  closes: "16:00",
                },
              ],
              sameAs: [
                "https://www.facebook.com/vigyantratech",
                "https://twitter.com/vigyantratech",
                "https://www.linkedin.com/company/vigyantratech",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
