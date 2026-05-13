import type { Category } from "@/lib/types";

export const CATEGORIES: Category[] = [
  {
    id: "anahtarlik",
    label: "Anahtarlıklar",
    kind: "keychain",
    description: "Kişiye özel 3D baskı anahtarlıklar. Farklı şekil ve tasarımlarda.",
  },
  {
    id: "arac",
    label: "Araç Aksesuarları",
    kind: "car",
    description: "Araç içi 3D baskı aksesuarlar ve kişiselleştirme ürünleri.",
  },
  {
    id: "figur",
    label: "Figür & Karakter",
    kind: "figure",
    description: "Geometrik ve karakterli 3D baskı figürler, hayvan ve karakter modelleri.",
  },
  {
    id: "ozel",
    label: "Özel Tasarım Ürünler",
    kind: "logo",
    description: "İsim, logo veya özel tasarımınızla üretilen kişiye özel ürünler.",
  },
  {
    id: "ev",
    label: "Ev & Dekorasyon",
    kind: "home",
    description: "Ev dekorasyonu için 3D baskı ürünler, organizasyon ve dekor aksesuarları.",
  },
  {
    id: "kitap",
    label: "Kitap Ayracı",
    kind: "bookmark",
    description: "Renkli ve dayanıklı 3D baskı kitap ayraçları, kişiye özel seçeneklerle.",
  },
];
