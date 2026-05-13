import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/data/products";
import { CATEGORIES } from "@/data/categories";
import { ProductCard } from "@/components/ProductCard";
import { AddToCartButton } from "@/components/AddToCartButton";
import { AddTeklifButtonClient } from "@/components/AddTeklifButtonClient";
import { Icon } from "@/components/Icons";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return { title: "Ürün Bulunamadı" };
  }

  return {
    title: `${product.name} | Hediye3D`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Hediye3D`,
      description: product.description,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `https://hediye3d.com/urunler/${product.slug}`,
    },
  };
}

const ACCENT_COLORS: Record<string, { bg: string; color: string }> = {
  purple: { bg: "var(--purple-50)", color: "var(--purple-700)" },
  orange: { bg: "var(--orange-50)", color: "var(--orange-600)" },
  neutral: { bg: "var(--bg-2)", color: "var(--ink-500)" },
};

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) notFound();

  const category = CATEGORIES.find((c) => c.id === product.cat);
  const related = PRODUCTS.filter(
    (p) => p.cat === product.cat && p.id !== product.id
  ).slice(0, 4);

  const accent = ACCENT_COLORS[product.accent] || ACCENT_COLORS.neutral;
  const formattedPrice = `₺${product.price.toFixed(2).replace(".", ",")}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "TRY",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="wrap" style={{ paddingTop: "var(--s-7)" }}>
        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Sayfa yolu">
          <Link href="/">Ana Sayfa</Link>
          <Icon name="chevron-right" size={12} />
          <Link href="/urunler">Ürünler</Link>
          <Icon name="chevron-right" size={12} />
          {category && (
            <>
              <Link href={`/urunler?kategori=${category.id}`}>{category.label}</Link>
              <Icon name="chevron-right" size={12} />
            </>
          )}
          <span>{product.name}</span>
        </nav>

        {/* Product detail grid */}
        <div className="product-detail-grid">
          {/* Left: Visual */}
          <div className="product-detail-visual">
            <div
              className="ph"
              style={{
                width: "100%",
                height: "100%",
                minHeight: 420,
                borderRadius: "var(--r-xl)",
                background: `linear-gradient(135deg, ${accent.bg} 0%, var(--bg-2) 100%)`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "var(--s-4)",
              }}
              aria-label={`${product.name} ürün görseli`}
            >
              <div
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: product.accent === "orange" ? "50%" : 24,
                  background: accent.color,
                  opacity: 0.7,
                  boxShadow: `0 16px 40px ${accent.color}55`,
                }}
                aria-hidden="true"
              />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--fs-13)",
                  color: accent.color,
                  textAlign: "center",
                  maxWidth: 300,
                  padding: "0 var(--s-4)",
                }}
              >
                {product.label}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--fs-12)",
                  color: "var(--ink-400)",
                }}
              >
                3D baskı — premium kalite
              </span>
            </div>
          </div>

          {/* Right: Info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--s-3)", marginBottom: "var(--s-4)" }}>
              {category && (
                <span className="badge badge-purple">
                  {category.label}
                </span>
              )}
              {product.tag && (
                <span
                  className={
                    "badge badge-dot " +
                    (product.tag === "Yeni" ? "badge-orange" : "badge-purple")
                  }
                >
                  {product.tag}
                </span>
              )}
            </div>

            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(24px, 3vw, 36px)",
                letterSpacing: "-0.02em",
                color: "var(--ink-900)",
                marginBottom: "var(--s-4)",
                lineHeight: 1.1,
              }}
            >
              {product.name}
            </h1>

            <div
              className="price"
              style={{ fontSize: "var(--fs-40)", marginBottom: "var(--s-5)" }}
            >
              {formattedPrice}
            </div>

            <p
              style={{
                color: "var(--ink-500)",
                fontSize: "var(--fs-15)",
                lineHeight: 1.65,
                marginBottom: "var(--s-7)",
                maxWidth: 480,
              }}
            >
              {product.description}
            </p>

            {/* Action buttons */}
            <div style={{ display: "flex", gap: "var(--s-3)", flexWrap: "wrap", marginBottom: "var(--s-6)" }}>
              <AddToCartButton product={product} />
              <AddTeklifButtonClient />
            </div>

            {/* Features mini */}
            <div
              style={{
                background: "var(--bg-2)",
                border: "1px solid var(--line)",
                borderRadius: "var(--r-lg)",
                padding: "var(--s-5)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--s-3)",
              }}
            >
              {[
                { icon: "truck", text: "Ücretsiz kargo — 2-3 iş günü teslimat" },
                { icon: "shield", text: "Yüksek kalite PLA+ malzeme" },
                { icon: "pencil", text: "Kişiye özel özelleştirme mevcut" },
              ].map((item) => (
                <div
                  key={item.icon}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--s-3)",
                    fontSize: "var(--fs-13)",
                    color: "var(--ink-700)",
                  }}
                >
                  <span style={{ color: "var(--purple-600)" }}>
                    <Icon name={item.icon} size={16} />
                  </span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <section style={{ paddingBottom: "var(--s-10)" }} aria-label="Benzer Ürünler">
            <div className="section-head" style={{ marginBottom: "var(--s-5)" }}>
              <span className="t-eyebrow">Benzer Ürünler</span>
              <Link href="/urunler" className="btn btn-ghost btn-arrow">
                Tümünü Gör
                <Icon name="arrow-right" size={14} stroke={2.5} />
              </Link>
            </div>
            <div
              className="products"
              style={{ "--product-cols": Math.min(related.length, 4) } as React.CSSProperties}
            >
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
