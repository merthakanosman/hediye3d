export interface Product {
  id: string;
  name: string;
  price: number;
  cat: string;
  accent: "purple" | "orange" | "neutral";
  tag: string | null;
  label: string;
  slug: string;
  description: string;
}

export interface Category {
  id: string;
  label: string;
  kind: "keychain" | "car" | "figure" | "logo" | "home" | "bookmark";
  description: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
}
