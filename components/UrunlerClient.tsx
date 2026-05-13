"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CATEGORIES } from "@/data/categories";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function UrunlerClient() {
  const searchParams = useSearchParams();
  const [activeCat, setActiveCat] = useState<string | null>(null);

  useEffect(() => {
    const kat = searchParams.get("kategori");
    setActiveCat(kat);
  }, [searchParams]);

  const visible = activeCat
    ? PRODUCTS.filter((p) => p.cat === activeCat)
    : PRODUCTS;

  return (
    <div className="wrap" style={{ paddingBottom: "var(--s-10)" }}>
      {/* Category filter bar */}
      <div
        style={{
          display: "flex",
          gap: "var(--s-2)",
          marginBottom: "var(--s-7)",
          overflowX: "auto",
          paddingBottom: "var(--s-2)",
          flexWrap: "wrap",
        }}
        role="group"
        aria-label="Kategori filtresi"
      >
        <button
          className={"btn " + (!activeCat ? "btn-primary" : "btn-ghost")}
          onClick={() => setActiveCat(null)}
          aria-pressed={!activeCat}
        >
          Tümü
        </button>
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            className={"btn " + (activeCat === c.id ? "btn-primary" : "btn-ghost")}
            onClick={() => setActiveCat(activeCat === c.id ? null : c.id)}
            aria-pressed={activeCat === c.id}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Product count */}
      <p
        style={{
          fontSize: "var(--fs-13)",
          color: "var(--ink-400)",
          marginBottom: "var(--s-5)",
        }}
        aria-live="polite"
        aria-atomic="true"
      >
        {visible.length} ürün listeleniyor
        {activeCat && (
          <> · <button
            onClick={() => setActiveCat(null)}
            style={{
              color: "var(--purple-600)",
              fontWeight: 600,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              fontSize: "inherit",
            }}
          >
            Filtreyi Temizle ×
          </button></>
        )}
      </p>

      {visible.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "64px 0",
            color: "var(--ink-500)",
          }}
        >
          <p style={{ fontSize: "var(--fs-16)", marginBottom: "var(--s-4)" }}>
            Bu kategoride ürün bulunamadı.
          </p>
          <button className="btn btn-ghost" onClick={() => setActiveCat(null)}>
            Tüm Ürünleri Gör
          </button>
        </div>
      ) : (
        <div
          className="products"
          style={{ "--product-cols": 4 } as React.CSSProperties}
          role="list"
        >
          {visible.map((product) => (
            <div key={product.id} role="listitem">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UrunlerClient;
