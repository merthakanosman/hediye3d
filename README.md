# Hediye3D

Kişiselleştirilmiş 3D baskı ürünleri e-ticaret sitesi. Next.js 15 App Router ve TypeScript ile geliştirilmiştir.

## Özellikler

- Ürün listeleme ve kategori filtreleme
- Ürün detay sayfaları
- Koleksiyon sayfası
- Teklif alma formu (modal)
- Sepet yönetimi (Context API)
- İletişim formu
- Tam responsive tasarım

## Teknoloji Stack

- **Framework:** Next.js 16 (App Router)
- **Dil:** TypeScript
- **Stil:** CSS Variables (Tailwind yok)
- **State:** React Context API (Cart, Toast, Modal)
- **Veri:** Static JSON data (backend yok)
- **Fontlar:** Plus Jakarta Sans, Inter, JetBrains Mono

## Sayfalar

| Rota | Açıklama |
|------|----------|
| `/` | Ana sayfa — Hero, Kategoriler, Öne Çıkan Ürünler, CTA |
| `/urunler` | Tüm ürünler + kategori filtresi |
| `/urunler/[slug]` | Ürün detay sayfası |
| `/koleksiyonlar` | Koleksiyon kartları |
| `/hakkimizda` | Kurumsal sayfa |
| `/iletisim` | İletişim formu ve bilgileri |

## Kurulum

```bash
npm install
npm run dev
```

Uygulama [http://localhost:3000](http://localhost:3000) adresinde açılır.

## Build

```bash
npm run build
npm run start
```

## Design Tokens

```
Krem yüzey:  #F4E8D0
Mor:         #7C3AED
Turuncu:     #F97316
Gradient:    linear-gradient(135deg, #7C3AED 0%, #C534B0 45%, #F97316 100%)
```

Tüm tokenlar `app/globals.css` dosyasında tanımlıdır.
