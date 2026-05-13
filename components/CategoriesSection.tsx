"use client";

import { useState } from "react";
import { Categories } from "./Categories";
import { ProductGrid } from "./ProductGrid";

export function CategoriesSection() {
  const [activeCat, setActiveCat] = useState<string | null>(null);

  return (
    <>
      <section style={{ paddingBlock: "var(--s-10)" }}>
        <Categories activeId={activeCat} onSelect={setActiveCat} />
      </section>
      <ProductGrid filter={activeCat} />
    </>
  );
}

export default CategoriesSection;
