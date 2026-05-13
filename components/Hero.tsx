"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icons";
import { useModal } from "./AppProviders";

export function Hero() {
  const { openModal } = useModal();

  return (
    <section className="hero wrap" id="home" aria-label="Ana Sayfa Hero">
      <div className="hero-book">
        <div className="hero-pages">
          <div className="hero-grid">
            {/* Top: Text + CTA */}
            <div className="hero-left">
              <div className="hero-left-inner">
                <span className="t-eyebrow" style={{ display: "block", marginBottom: 20 }}>
                  Kataloğumuz
                </span>
                <h1>
                  <span className="line-1">3D BASKI</span>{" "}
                  <span className="line-2">ANAHTARLIKLAR</span>
                  <span className="line-3">VE DAHA FAZLASI</span>
                </h1>
                <p className="lede">
                  Hayal edin, tasarlayalım, 3D baskı ile gerçeğe dönüştürelim.
                  Kişiye özel, kaliteli ve dayanıklı ürünler.
                </p>
                <div className="hero-ctas">
                  <Link href="/urunler" className="btn btn-primary btn-arrow">
                    Ürünleri Keşfet
                    <Icon name="arrow-right" size={14} stroke={2.5} />
                  </Link>
                  <Link href="/koleksiyonlar" className="btn btn-ghost btn-arrow">
                    Koleksiyonlara Göz At
                    <Icon name="arrow-right" size={14} stroke={2.5} />
                  </Link>
                </div>
              </div>

              {/* Hero nozzle — sol alt köşe */}
              <div className="hero-nozzle" aria-hidden="true">
                <Image
                  src="/heronozzel.png"
                  alt="3D printer nozzle"
                  width={220}
                  height={260}
                  style={{ width: "100%", height: "auto" }}
                  priority
                  unoptimized
                />
              </div>
            </div>

            {/* Bottom: Visual placeholder + Quote */}
            <div className="hero-right">
              {/* Gradient image placeholder */}
              <div
                className="ph"
                style={{
                  width: "100%",
                  minHeight: 320,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "var(--s-3)",
                }}
                aria-label="3D baskı anahtarlık koleksiyonu görseli"
              >
                {/* Decorative 3D shapes */}
                <div style={{ display: "flex", gap: 16, marginBottom: 8 }}>
                  {["#7C3AED", "#C534B0", "#F97316"].map((color, i) => (
                    <div
                      key={i}
                      style={{
                        width: 64 - i * 8,
                        height: 64 - i * 8,
                        borderRadius: i === 1 ? "50%" : 12,
                        background: color,
                        opacity: 0.8 - i * 0.1,
                        boxShadow: `0 8px 24px ${color}44`,
                      }}
                    />
                  ))}
                </div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-12)", color: "var(--purple-700)" }}>
                  3D printed keychain collection
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-12)", color: "var(--ink-400)" }}>
                  hero shot — premium quality
                </span>
              </div>

              {/* Quote card */}
              <div className="hero-quote" role="blockquote">
                <span className="qm" aria-hidden="true">
                  <Icon name="quote" size={28} />
                </span>
                <div>"Hayal et, tasarla, 3D baskı ile gerçeğe dönüştür."</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
