import type { Metadata } from "next";
import { Icon } from "@/components/Icons";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Hakkımızda | Hediye3D",
  description:
    "Hediye3D hakkında bilgi edinin. 3D baskı teknolojisiyle kişiye özel ürünler üretiyoruz. Misyonumuz, vizyonumuz ve değerlerimiz.",
  alternates: {
    canonical: "https://hediye3d.com/hakkimizda",
  },
  openGraph: {
    title: "Hakkımızda | Hediye3D",
    description:
      "3D baskı teknolojisiyle kişiye özel ürünler üretiyoruz. Misyonumuz ve değerlerimiz.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const STATS = [
  { number: "500+", label: "Mutlu Müşteri", icon: "spark" },
  { number: "1000+", label: "Üretilen Ürün", icon: "printer-3d" },
  { number: "3+", label: "Yıl Deneyim", icon: "shield" },
];

const VALUES = [
  {
    icon: "shield",
    title: "Kalite",
    desc: "Her üründe premium PLA+ malzeme kullanarak uzun ömürlü ve dayanıklı ürünler üretiyoruz.",
  },
  {
    icon: "pencil",
    title: "Kişiselleştirme",
    desc: "Her müşterimizin isteğine göre özel tasarım yapıyor, hayalleri gerçeğe dönüştürüyoruz.",
  },
  {
    icon: "spark",
    title: "Yaratıcılık",
    desc: "Yenilikçi tasarım anlayışımızla sıradan ürünleri sanat eserlerine dönüştürüyoruz.",
  },
  {
    icon: "truck",
    title: "Hız",
    desc: "Hızlı üretim ve güvenilir kargo partnerlerimizle ürünlerinizi zamanında teslim ediyoruz.",
  },
];

export default function HakkimizdaPage() {
  return (
    <>
      {/* Page hero */}
      <div className="page-hero">
        <div className="wrap">
          <span className="t-eyebrow" style={{ display: "block", marginBottom: "var(--s-3)" }}>
            Bizim Hikayemiz
          </span>
          <h1>
            Hediye3D{" "}
            <span className="grad-text">Hakkında</span>
          </h1>
          <p style={{ marginTop: "var(--s-3)" }}>
            3D baskı teknolojisiyle hayalleri gerçeğe dönüştürüyoruz.
            Kişiye özel, kaliteli ve anlamlı ürünler üretmek bizim tutkumuz.
          </p>
        </div>
      </div>

      {/* Mission / Vision */}
      <section className="wrap section" style={{ paddingTop: 0 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--s-5)",
          }}
        >
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--line)",
              borderRadius: "var(--r-xl)",
              padding: "var(--s-7)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 4,
                background: "var(--grad-brand)",
              }}
              aria-hidden="true"
            />
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "var(--purple-100)",
                color: "var(--purple-700)",
                display: "grid",
                placeItems: "center",
                marginBottom: "var(--s-4)",
              }}
            >
              <Icon name="spark" size={20} />
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "var(--fs-24)",
                letterSpacing: "-0.015em",
                marginBottom: "var(--s-3)",
                color: "var(--ink-900)",
              }}
            >
              Misyonumuz
            </h2>
            <p style={{ color: "var(--ink-500)", lineHeight: 1.65, fontSize: "var(--fs-15)" }}>
              Müşterilerimizin hayal gücünü 3D baskı teknolojisiyle
              somut ürünlere dönüştürmek. Her kişinin kendine özel,
              anlamlı bir hediye almasını sağlamak için çalışıyoruz.
            </p>
          </div>

          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--line)",
              borderRadius: "var(--r-xl)",
              padding: "var(--s-7)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 4,
                background: "var(--grad-brand-soft)",
              }}
              aria-hidden="true"
            />
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "var(--orange-100)",
                color: "var(--orange-600)",
                display: "grid",
                placeItems: "center",
                marginBottom: "var(--s-4)",
              }}
            >
              <Icon name="printer-3d" size={20} />
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "var(--fs-24)",
                letterSpacing: "-0.015em",
                marginBottom: "var(--s-3)",
                color: "var(--ink-900)",
              }}
            >
              Vizyonumuz
            </h2>
            <p style={{ color: "var(--ink-500)", lineHeight: 1.65, fontSize: "var(--fs-15)" }}>
              Türkiye&apos;nin en güvenilir kişiselleştirilmiş 3D baskı markası
              olmak. Teknoloji ve sanatı bir araya getirerek sektörde
              öncü olmayı hedefliyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="wrap section" style={{ paddingTop: 0 }} aria-label="Rakamlarla Hediye3D">
        <div className="section-head">
          <span className="t-eyebrow">Rakamlarla Biz</span>
        </div>
        <div className="stats-grid">
          {STATS.map((stat) => (
            <div key={stat.label} className="stat-card">
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  background: "var(--purple-100)",
                  color: "var(--purple-700)",
                  display: "grid",
                  placeItems: "center",
                  margin: "0 auto var(--s-4)",
                }}
              >
                <Icon name={stat.icon} size={22} />
              </div>
              <span className="stat-number">{stat.number}</span>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "var(--fs-15)",
                  color: "var(--ink-700)",
                  margin: 0,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="wrap section" style={{ paddingTop: 0 }} aria-label="Değerlerimiz">
        <div className="section-head">
          <span className="t-eyebrow">Değerlerimiz</span>
        </div>
        <div className="values-grid">
          {VALUES.map((v) => (
            <div key={v.title} className="value-card">
              <div style={{ display: "flex", alignItems: "center", gap: "var(--s-3)", marginBottom: "var(--s-3)" }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "var(--purple-100)",
                    color: "var(--purple-700)",
                    display: "grid",
                    placeItems: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon name={v.icon} size={18} />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "var(--fs-18)",
                    color: "var(--ink-900)",
                    margin: 0,
                  }}
                >
                  {v.title}
                </h3>
              </div>
              <p style={{ color: "var(--ink-500)", fontSize: "var(--fs-14)", lineHeight: 1.6, margin: 0 }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Story section */}
      <section className="wrap section" style={{ paddingTop: 0 }}>
        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--line)",
            borderRadius: "var(--r-xl)",
            padding: "var(--s-9) var(--s-10)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--s-8)",
            alignItems: "center",
          }}
        >
          <div>
            <span className="t-eyebrow" style={{ display: "block", marginBottom: "var(--s-3)" }}>
              Hikayemiz
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "var(--fs-32)",
                letterSpacing: "-0.015em",
                marginBottom: "var(--s-4)",
                lineHeight: 1.1,
              }}
            >
              3D Baskı Sevgisiyle{" "}
              <span className="grad-text">Başladı</span>
            </h2>
            <p style={{ color: "var(--ink-500)", fontSize: "var(--fs-15)", lineHeight: 1.65, marginBottom: "var(--s-4)" }}>
              Hediye3D, 2021 yılında küçük bir garajda, büyük bir tutkuyla başladı.
              3D baskı teknolojisinin insanlara sunduğu sonsuz imkânları keşfettikçe,
              bunu herkesle paylaşmak istedik.
            </p>
            <p style={{ color: "var(--ink-500)", fontSize: "var(--fs-15)", lineHeight: 1.65 }}>
              Bugün yüzlerce mutlu müşteriyle çalışıyor, her biri için özel
              tasarımlar üretiyoruz. Küçük şeylerin büyük anlamlar taşıyabileceğine
              inanıyoruz.
            </p>
          </div>

          {/* Visual placeholder */}
          <div
            className="ph"
            style={{
              minHeight: 320,
              borderRadius: "var(--r-xl)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "var(--s-4)",
            }}
            aria-label="Atölye görseli"
          >
            <div style={{ display: "flex", gap: "var(--s-4)" }}>
              {["#7C3AED", "#C534B0", "#F97316"].map((color, i) => (
                <div
                  key={i}
                  style={{
                    width: 64 - i * 8,
                    height: 64 - i * 8,
                    borderRadius: i === 1 ? "50%" : 14,
                    background: color,
                    opacity: 0.75,
                    boxShadow: `0 8px 24px ${color}44`,
                  }}
                  aria-hidden="true"
                />
              ))}
            </div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--fs-12)",
                color: "var(--purple-700)",
              }}
            >
              Atölye — 3D baskı makineleri
            </span>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
