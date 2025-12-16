import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NewMe Independent Living | Affordable Transitional Housing",
  description: "NewMe Independent Living provides safe, supportive, and affordable housing for independent seniors, veterans, and adults in transition. Drug-free home with 24/7 surveillance.",
  keywords: ["independent living", "transitional housing", "sober living", "veterans housing", "affordable housing", "drug-free home"],
  openGraph: {
    title: "NewMe Independent Living | Home Away From Home",
    description: "Safe, supportive, and affordable home environment for adults seeking independence with dignity.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NewMe Independent Living",
    "description": "Safe, supportive, and affordable home environment for adults seeking independence with dignity",
    "url": "https://newmeindependentliving.com",
    "logo": "https://newmeindependentliving.com/assets/logo.png",
    "telephone": "+1-682-559-3258",
    "email": "irednewme@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Forth Worth",
      "addressRegion": "TX",
      "postalCode": "76109",
      "streetAddress": "4801 Selkirk Drive"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ResidentialCareOrganization",
    "name": "NewMe Independent Living",
    "description": "Provides safe, supportive, and affordable home environment for independent seniors, military veterans, and adults in life transitions",
    "telephone": "+1-682-559-3258",
    "email": "irednewme@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Forth Worth",
      "addressRegion": "TX",
      "postalCode": "76109",
      "streetAddress": "4801 Selkirk Drive"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
