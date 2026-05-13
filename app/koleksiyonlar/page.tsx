import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORIES } from "@/data/categories";
import { PRODUCTS } from "@/data/products";
import { CatIcon } from "@/components/CatIcon";
import { Icon } from "@/components/Icons";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Koleksiyonlar | Hediye3D",
  description:
    "Hediye3D 3D baskı ürün koleksiyonlarını keşfedin. Anahtarlıklar, figürler, araç aksesuarları, ev dekorasyonu ve daha fazla kategori.",
  alternates: {
    canonical: "https://hediye3d.com/koleksiyonlar",
  },
  openGraph: {
    title: "Koleksiyonlar | Hediye3D",
    description:
      "Hediye3D 3D baskı ürün koleksiyonlarını keşfedin.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const GRADIENT_PRESETS = [
  "linear-gradient(135deg, #7C3AED 0%, #C534B0 100%)",
  "linear-gradient(135deg, #F97316 0%, #FB923C 100%)",
  "linear-gradient(135deg, #7C3AED 0%, #5021A0 100%)",
  "linear-gradient(135deg, #C534B0 0%, #F97316 100%)",
  "linear-gradient(135deg, #9461F0 0%, #C534B0 100%)",
  "linear-gradient(135deg, #EA580C 0%, #7C3AED 100%)",
];

export default function KoleksiyonlarPage() {
  const categoriesWithCount = CATEGORIES.map((cat) => ({
    ...cat,
    count: PRODUCTS.filter((p) => p.cat === cat.id).length,
  }));

  return (
    <>
      {/* Page hero */}
      <div className="page-hero">
        <div className="wrap">
          <span className="t-eyebrow" style={{ display: "block", marginBottom: "var(--s-3)" }}>
            Kategorilerimiz
          </span>
          <h1>
            <span className="grad-text">Koleksiyonlar</span>
          </h1>
          <p style={{ marginTop: "var(--s-3)" }}>
            İlgi alanınıza göre koleksiyonlarımızı keşfedin.
            Her kategori özenle tasarlanmış 3D baskı ürünler içerir.
          </p>
        </div>
      </div>

      <div className="wrap" style={{ paddingBottom: "var(--s-10)" }}>
        <div className="collection-grid">
          {categoriesWithCount.map((cat, i) => (
            <Link
              key={cat.id}
              href={`/urunler?kategori=${cat.id}`}
              className="collection-card"
              aria-label={`${cat.label} koleksiyonunu görüntüle`}
            >
              {/* Visual area */}
              <div
                className="collection-card-visual"
                style={{ background: GRADIENT_PRESETS[i % GRADIENT_PRESETS.length] }}
              >
                <div
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    borderRadius: "var(--r-xl)",
                    padding: "var(--s-4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CatIcon kind={cat.kind} size={52} />
                </div>
                <span
                  style={{
                    color: "white",
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "var(--fs-20)",
                    letterSpacing: "-0.01em",
                    textAlign: "center",
                  }}
                >
                  {cat.label}
                </span>
              </div>

              {/* Body */}
              <div className="collection-card-body">
                <p
                  style={{
                    fontSize: "var(--fs-13)",
                    color: "var(--ink-500)",
                    lineHeight: 1.55,
                    marginBottom: "var(--s-4)",
                  }}
                >
                  {cat.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    className="badge badge-purple"
                    style={{ fontSize: "var(--fs-12)" }}
                  >
                    {cat.count} ürün
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      color: "var(--purple-600)",
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "var(--fs-13)",
                    }}
                  >
                    Görüntüle
                    <Icon name="arrow-right" size={14} stroke={2.5} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <CtaBanner />
    </>
  );
}
