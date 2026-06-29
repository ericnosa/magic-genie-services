import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Magic Genie Services Inc. | Cleaning, Contracting, Consulting & Marketing | Regina, SK",
  description:
    "Regina's premier service company offering professional cleaning, contracting, consulting and marketing solutions across Saskatchewan.",
  keywords:
    "cleaning services Regina, contracting Regina, business consulting Saskatchewan, digital marketing Regina, Magic Genie Services",
  authors: [{ name: "Magic Genie Services Inc." }],
  openGraph: {
    title: "Magic Genie Services Inc. | Regina, Saskatchewan",
    description:
      "Professional Cleaning, Contracting, Consulting & Marketing Solutions across Regina and Saskatchewan.",
    url: "https://magicgenieservices.ca",
    siteName: "Magic Genie Services Inc.",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Magic Genie Services Inc. | Regina, SK",
    description:
      "Regina's premier multi-service company offering cleaning, contracting, consulting and marketing.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://magicgenieservices.ca",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Magic Genie Services Inc.",
    description:
      "Professional Cleaning, Contracting, Consulting & Marketing Solutions in Regina, Saskatchewan.",
    url: "https://magicgenieservices.ca",
    telephone: "639-590-1059",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Regina",
      addressRegion: "SK",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.4452,
      longitude: -104.6189,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "500",
    },
  };

  return (
    <html lang="en-CA">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-ink text-porcelain antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[9999] bg-tangerine text-ink px-4 py-2 rounded-lg font-semibold font-body"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
