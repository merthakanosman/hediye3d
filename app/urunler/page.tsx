import type { Metadata } from "next";
import { Suspense } from "react";
import { UrunlerClient } from "@/components/UrunlerClient";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Ürünler | Hediye3D",
  description:
    "Tüm 3D baskı ürünlerimizi keşfedin. Anahtarlıklar, figürler, araç aksesuarları, ev dekorasyonu ve daha fazlası.",
  alternates: {
    canonical: "https://hediye3d.com/urunler",
  },
  openGraph: {
    title: "Ürünler | Hediye3D",
    description:
      "Tüm 3D baskı ürünlerimizi keşfedin. Anahtarlıklar, figürler, araç aksesuarları ve daha fazlası.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function UrunlerPage() {
  return (
    <>
      {/* Page header */}
      <div className="page-hero">
        <div className="wrap">
          <span className="t-eyebrow" style={{ display: "block", marginBottom: "var(--s-3)" }}>
            Koleksiyonumuz
          </span>
          <h1>
            Tüm <span className="grad-text">Ürünlerimiz</span>
          </h1>
          <p style={{ marginTop: "var(--s-3)" }}>
            3D baskı teknolojisiyle üretilen kişiye özel ürünleri keşfedin.
            Herkes için bir tasarım, her an bir hediye.
          </p>
        </div>
      </div>

      <Suspense fallback={
        <div className="wrap" style={{ padding: "var(--s-10) 0", textAlign: "center", color: "var(--ink-400)" }}>
          Ürünler yükleniyor...
        </div>
      }>
        <UrunlerClient />
      </Suspense>
      <CtaBanner />
    </>
  );
}
