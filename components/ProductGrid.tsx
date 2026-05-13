"use client";

import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { Icon } from "./Icons";
import { PRODUCTS } from "@/data/products";

interface ProductGridProps {
  filter?: string | null;
  cols?: number;
  title?: string;
}

const PAGE_SIZE = 6;

export function ProductGrid({
  filter = null,
  cols = 6,
  title = "En Çok Tercih Edilen Ürünler",
}: ProductGridProps) {
  const [page, setPage] = useState(0);

  const visible = filter
    ? PRODUCTS.filter((p) => p.cat === filter)
    : PRODUCTS;

  const totalPages = Math.ceil(visible.length / PAGE_SIZE);
  const paged = visible.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  return (
    <section className="wrap section" id="products" aria-label="Ürün Listesi">
      <div className="section-head">
        <span className="t-eyebrow">{title}</span>
        <div className="slide-nav" aria-label="Sayfa gezinme">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            aria-label="Önceki sayfa"
          >
            <Icon name="chevron-left" size={16} />
          </button>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page >= totalPages - 1}
            aria-label="Sonraki sayfa"
          >
            <Icon name="chevron-right" size={16} />
          </button>
        </div>
      </div>

      {visible.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "48px 0",
            color: "var(--ink-500)",
          }}
          role="status"
          aria-live="polite"
        >
          Bu kategoride ürün bulunamadı.
        </div>
      ) : (
        <div
          className="products"
          style={{ "--product-cols": cols } as React.CSSProperties}
          role="list"
          aria-label={`${visible.length} ürün listeleniyor`}
        >
          {paged.map((product) => (
            <div key={product.id} role="listitem">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "var(--s-2)",
            marginTop: "var(--s-6)",
          }}
          aria-label="Sayfa numaraları"
        >
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Sayfa ${i + 1}`}
              aria-current={page === i ? "page" : undefined}
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: page === i ? "var(--purple-600)" : "var(--purple-200)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "background var(--t-fast) var(--ease)",
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductGrid;
