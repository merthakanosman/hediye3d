"use client";

import Link from "next/link";
import { Icon } from "./Icons";
import { useModal } from "./AppProviders";

export function CtaBanner() {
  const { openModal } = useModal();

  return (
    <section className="wrap section" style={{ paddingTop: 0 }} aria-label="Özel Tasarım Teklifi">
      <div className="cta">
        {/* Left visual */}
        <div className="cta-media" aria-hidden="true">
          <div
            className="ph"
            style={{
              width: "100%",
              height: "100%",
              minHeight: 260,
              borderRadius: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              background:
                "linear-gradient(135deg, var(--purple-50) 0%, var(--purple-100) 100%)",
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: "var(--purple-600)",
                opacity: 0.6,
              }}
            />
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "var(--purple-400)",
                opacity: 0.5,
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--fs-12)",
                color: "var(--purple-700)",
              }}
            >
              3D printer nozzle close-up
            </span>
          </div>
        </div>

        {/* Center text */}
        <div className="cta-body">
          <span className="t-eyebrow">Kendi Tasarımını Yarat</span>
          <h2 className="t-h2">
            Hayalindeki Tasarımı
            <br />
            Birlikte Gerçeğe Dönüştürelim!
          </h2>
          <p>
            Özel tasarım talepleriniz için bizimle iletişime geçin. Size özel
            3D çözümler sunalım.
          </p>
          <div style={{ display: "flex", gap: "var(--s-3)", flexWrap: "wrap" }}>
            <button className="btn btn-primary btn-arrow" onClick={openModal}>
              Teklif Al
              <Icon name="arrow-right" size={14} stroke={2.5} />
            </button>
            <Link href="/iletisim" className="btn btn-ghost btn-arrow">
              İletişime Geç
              <Icon name="arrow-right" size={14} stroke={2.5} />
            </Link>
          </div>
        </div>

        {/* Right visual */}
        <div className="cta-media" aria-hidden="true">
          <div
            className="ph"
            style={{
              width: "100%",
              height: "100%",
              minHeight: 260,
              borderRadius: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              background:
                "linear-gradient(135deg, var(--orange-50) 0%, var(--orange-100) 100%)",
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "var(--orange-500)",
                opacity: 0.6,
              }}
            />
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "var(--orange-400)",
                opacity: 0.5,
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--fs-12)",
                color: "var(--orange-600)",
              }}
            >
              3D printer in action
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaBanner;
