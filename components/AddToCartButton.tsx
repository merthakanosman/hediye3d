"use client";

import { useState } from "react";
import { Icon } from "./Icons";
import { useCart } from "./AppProviders";
import { useToast } from "./AppProviders";
import type { Product } from "@/lib/types";

interface AddToCartButtonProps {
  product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const [justAdded, setJustAdded] = useState(false);
  const { addToCart, isInCart } = useCart();
  const { showToast } = useToast();

  const inCart = isInCart(product.id);
  const added = justAdded || inCart;

  const handleAdd = () => {
    addToCart(product.id);
    showToast(`${product.name} sepete eklendi`);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  return (
    <button
      className="btn btn-primary"
      onClick={handleAdd}
      aria-label={added ? "Sepete eklendi" : "Sepete ekle"}
      style={{
        background: added ? "var(--success)" : undefined,
        boxShadow: added ? "none" : undefined,
      }}
    >
      <Icon name={added ? "check" : "cart"} size={16} />
      {added ? "Sepete Eklendi" : "Sepete Ekle"}
    </button>
  );
}

export default AddToCartButton;
