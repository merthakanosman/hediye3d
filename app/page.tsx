import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { CategoriesSection } from "@/components/CategoriesSection";
import { Features } from "@/components/Features";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Ana Sayfa | Hediye3D",
  description:
    "3D baskı teknolojisiyle üretilen kişiye özel anahtarlıklar, figürler ve dekorasyon ürünleri. Hayal et, tasarla, gerçeğe dönüştür.",
  alternates: {
    canonical: "https://hediye3d.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hediye3D",
  url: "https://hediye3d.com",
  logo: "https://hediye3d.com/logo.png",
  description:
    "3D baskı teknolojisiyle üretilen kişiye özel anahtarlıklar, figürler ve dekorasyon ürünleri.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+90-555-123-45-67",
    contactType: "customer service",
    areaServed: "TR",
    availableLanguage: "Turkish",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Örnek Mah. 3D Sk. No:10",
    addressLocality: "İstanbul",
    addressCountry: "TR",
  },
  sameAs: [
    "https://instagram.com/hediye3d",
    "https://facebook.com/hediye3d",
    "https://tiktok.com/@hediye3d",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <CategoriesSection />
      <Features />
      <CtaBanner />
    </>
  );
}
