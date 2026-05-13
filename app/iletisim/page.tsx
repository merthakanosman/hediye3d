import type { Metadata } from "next";
import { Icon } from "@/components/Icons";
import { IletisimForm } from "@/components/IletisimForm";

export const metadata: Metadata = {
  title: "İletişim | Hediye3D",
  description:
    "Hediye3D ile iletişime geçin. Özel sipariş talepleriniz, sorularınız ve iş birliği teklifleri için bize ulaşın.",
  alternates: {
    canonical: "https://hediye3d.com/iletisim",
  },
  openGraph: {
    title: "İletişim | Hediye3D",
    description:
      "Hediye3D ile iletişime geçin. Özel sipariş talepleriniz için bize yazın.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function IletisimPage() {
  return (
    <>
      {/* Page hero */}
      <div className="page-hero">
        <div className="wrap">
          <span className="t-eyebrow" style={{ display: "block", marginBottom: "var(--s-3)" }}>
            Bize Ulaşın
          </span>
          <h1>
            <span className="grad-text">İletişim</span>
          </h1>
          <p style={{ marginTop: "var(--s-3)" }}>
            Sorularınız, özel sipariş talepleriniz veya iş birliği teklifleriniz
            için bize yazın. En kısa sürede dönüş yapacağız.
          </p>
        </div>
      </div>

      <div className="wrap" style={{ paddingBottom: "var(--s-10)" }}>
        <div className="contact-grid">
          {/* Left: Form */}
          <IletisimForm />

          {/* Right: Contact info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--s-4)" }}>
            <div className="contact-info-card">
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "var(--fs-18)",
                  marginBottom: "var(--s-5)",
                  color: "var(--ink-900)",
                }}
              >
                İletişim Bilgileri
              </h3>

              <div className="contact-row">
                <Icon name="phone" size={18} />
                <div>
                  <p style={{ fontWeight: 600, marginBottom: 2, color: "var(--ink-900)" }}>Telefon</p>
                  <a href="tel:+905551234567" style={{ color: "var(--ink-500)", fontSize: "var(--fs-14)" }}>
                    0 (555) 123 45 67
                  </a>
                </div>
              </div>

              <div className="contact-row">
                <Icon name="mail" size={18} />
                <div>
                  <p style={{ fontWeight: 600, marginBottom: 2, color: "var(--ink-900)" }}>E-posta</p>
                  <a href="mailto:info@hediye3d.com" style={{ color: "var(--ink-500)", fontSize: "var(--fs-14)" }}>
                    info@hediye3d.com
                  </a>
                </div>
              </div>

              <div className="contact-row">
                <Icon name="pin" size={18} />
                <div>
                  <p style={{ fontWeight: 600, marginBottom: 2, color: "var(--ink-900)" }}>Adres</p>
                  <p style={{ color: "var(--ink-500)", fontSize: "var(--fs-14)" }}>
                    Örnek Mah. 3D Sk. No:10
                    <br />
                    İstanbul / Türkiye
                  </p>
                </div>
              </div>
            </div>

            {/* Social media */}
            <div className="contact-info-card">
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "var(--fs-18)",
                  marginBottom: "var(--s-4)",
                  color: "var(--ink-900)",
                }}
              >
                Sosyal Medya
              </h3>
              <div style={{ display: "flex", gap: "var(--s-3)" }}>
                {[
                  { name: "instagram", label: "Instagram", url: "https://instagram.com/hediye3d" },
                  { name: "facebook", label: "Facebook", url: "https://facebook.com/hediye3d" },
                  { name: "tiktok", label: "TikTok", url: "https://tiktok.com/@hediye3d" },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-icon"
                    style={{ width: 44, height: 44, flexShrink: 0 }}
                    aria-label={`${s.label}&apos;da takip et`}
                  >
                    <Icon name={s.name} size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="contact-info-card" style={{ padding: 0, overflow: "hidden" }}>
              <div
                className="ph"
                style={{
                  width: "100%",
                  minHeight: 220,
                  borderRadius: "var(--r-xl)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "var(--s-3)",
                }}
                aria-label="Harita — İstanbul ofis konumu"
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "var(--purple-200)",
                    display: "grid",
                    placeItems: "center",
                    color: "var(--purple-700)",
                  }}
                  aria-hidden="true"
                >
                  <Icon name="pin" size={22} />
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--fs-12)",
                    color: "var(--purple-700)",
                    textAlign: "center",
                  }}
                >
                  Harita — İstanbul
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--fs-12)",
                    color: "var(--ink-400)",
                    textAlign: "center",
                  }}
                >
                  Örnek Mah. 3D Sk. No:10
                </span>
              </div>
            </div>

            {/* Working hours */}
            <div className="contact-info-card">
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "var(--fs-18)",
                  marginBottom: "var(--s-4)",
                  color: "var(--ink-900)",
                }}
              >
                Çalışma Saatleri
              </h3>
              {[
                { day: "Pazartesi – Cuma", hours: "09:00 – 18:00" },
                { day: "Cumartesi", hours: "10:00 – 15:00" },
                { day: "Pazar", hours: "Kapalı" },
              ].map((row) => (
                <div
                  key={row.day}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "var(--s-2) 0",
                    borderBottom: "1px solid var(--line)",
                    fontSize: "var(--fs-14)",
                  }}
                >
                  <span style={{ color: "var(--ink-700)" }}>{row.day}</span>
                  <span
                    style={{
                      color: row.hours === "Kapalı" ? "var(--danger)" : "var(--success)",
                      fontWeight: 600,
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {row.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
