"use client";

import Link from "next/link";
import { CatIcon } from "./CatIcon";
import { Icon } from "./Icons";
import { CATEGORIES } from "@/data/categories";

interface CategoriesProps {
  activeId?: string | null;
  onSelect?: (id: string | null) => void;
}

export function Categories({ activeId = null, onSelect }: CategoriesProps) {
  const handleClick = (id: string) => {
    if (onSelect) {
      onSelect(activeId === id ? null : id);
    }
  };

  return (
    <section className="wrap" id="categories" aria-label="Ürün Kategorileri">
      <div className="section-head">
        <span className="t-eyebrow">Kategoriler</span>
        <Link href="/koleksiyonlar" className="btn btn-ghost btn-arrow">
          Tüm Kategorileri Gör
          <Icon name="arrow-right" size={14} stroke={2.5} />
        </Link>
      </div>
      <div className="cats" role="list">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            className={"cat" + (activeId === c.id ? " active" : "")}
            onClick={() => handleClick(c.id)}
            aria-pressed={activeId === c.id}
            aria-label={c.label}
            role="listitem"
          >
            <div className="cat-icon" aria-hidden="true">
              <CatIcon kind={c.kind} size={40} />
            </div>
            <span className="cat-label">{c.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default Categories;
