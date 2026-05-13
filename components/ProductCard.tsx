"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "./Icons";
import { useCart } from "./AppProviders";
import { useToast } from "./AppProviders";
import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

const ACCENT_COLORS: Record<string, { bg: string; color: string }> = {
  purple: { bg: "var(--purple-50)", color: "var(--purple-700)" },
  orange: { bg: "var(--orange-50)", color: "var(--orange-600)" },
  neutral: { bg: "var(--bg-2)", color: "var(--ink-500)" },
};

export function ProductCard({ product }: ProductCardProps) {
  const [justAdded, setJustAdded] = useState(false);
  const { addToCart, isInCart } = useCart();
  const { showToast } = useToast();

  const inCart = isInCart(product.id);
  const added = justAdded || inCart;
  const accent = ACCENT_COLORS[product.accent] || ACCENT_COLORS.neutral;

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product.id);
    showToast(`${product.name} sepete eklendi`);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  const formattedPrice = `₺${product.price.toFixed(2).replace(".", ",")}`;

  return (
    <article className="product">
      {product.tag && (
        <span
          className={
            "badge product-tag badge-dot " +
            (product.tag === "Yeni" ? "badge-orange" : "badge-purple")
          }
        >
          {product.tag}
        </span>
      )}

      <Link href={`/urunler/${product.slug}`} aria-label={`${product.name} ürün detayı`}>
        <div className="product-media">
          {/* Stylised gradient placeholder */}
          <div
            className="ph"
            style={{
              width: "100%",
              height: "100%",
              minHeight: 180,
              borderRadius: 0,
              background: `linear-gradient(135deg, ${accent.bg} 0%, var(--bg-2) 100%)`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
            aria-label={product.label}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: product.accent === "orange" ? "50%" : 14,
                background: accent.color,
                opacity: 0.7,
                boxShadow: `0 8px 20px ${accent.color}44`,
              }}
              aria-hidden="true"
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--fs-12)",
                color: accent.color,
                textAlign: "center",
                padding: "0 8px",
              }}
            >
              {product.label}
            </span>
          </div>
        </div>
      </Link>

      <div className="product-body">
        <Link href={`/urunler/${product.slug}`}>
          <h3 className="product-name">{product.name}</h3>
        </Link>
        <div className="product-foot">
          <span className="price">{formattedPrice}</span>
          <button
            className={"add" + (added ? " added" : "")}
            onClick={handleAdd}
            aria-label={added ? `${product.name} sepete eklendi` : `${product.name} sepete ekle`}
          >
            <Icon name={added ? "check" : "plus"} size={16} stroke={3} />
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
