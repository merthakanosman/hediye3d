"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { Icon } from "./Icons";
import { CATEGORIES } from "@/data/categories";
import { useToast } from "./AppProviders";

export function Footer() {
  const [email, setEmail] = useState("");
  const { showToast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      showToast(`${email} bültene kaydedildi.`);
      setEmail("");
    }
  };

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          {/* Col 1: Logo + Açıklama + Sosyal */}
          <div className="foot-col">
            <Logo />
            <p style={{ color: "var(--ink-500)", fontSize: 14, marginTop: 16, lineHeight: 1.55 }}>
              3D baskı teknolojisiyle üretilen kişiye özel anahtarlıklar
              ve daha fazlası için doğru adres.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
              {(["instagram", "facebook", "tiktok"] as const).map((s) => (
                <a
                  key={s}
                  href={`https://${s}.com/hediye3d`}
                  className="btn-icon"
                  style={{ width: 34, height: 34 }}
                  aria-label={`${s.charAt(0).toUpperCase() + s.slice(1)}'da takip et`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name={s} size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Kurumsal */}
          <div className="foot-col">
            <h5>Kurumsal</h5>
            <ul>
              <li><Link href="/hakkimizda">Hakkımızda</Link></li>
              <li><Link href="/iletisim">Sıkça Sorulan Sorular</Link></li>
              <li><Link href="/iletisim">Gizlilik Politikası</Link></li>
              <li><Link href="/iletisim">İade &amp; Değişim</Link></li>
              <li><Link href="/iletisim">Kullanım Şartları</Link></li>
            </ul>
          </div>

          {/* Col 3: Kategoriler */}
          <div className="foot-col">
            <h5>Kategoriler</h5>
            <ul>
              {CATEGORIES.map((c) => (
                <li key={c.id}>
                  <Link href={`/urunler?kategori=${c.id}`}>{c.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: İletişim */}
          <div className="foot-col">
            <h5>İletişim</h5>
            <div className="contact-row">
              <Icon name="phone" size={16} />
              <span>0 (555) 123 45 67</span>
            </div>
            <div className="contact-row">
              <Icon name="mail" size={16} />
              <span>info@hediye3d.com</span>
            </div>
            <div className="contact-row">
              <Icon name="pin" size={16} />
              <span>
                Örnek Mah. 3D Sk. No:10
                <br />
                İstanbul / Türkiye
              </span>
            </div>
          </div>

          {/* Col 5: E-Bülten */}
          <div className="foot-col">
            <h5>E-Bülten</h5>
            <p style={{ color: "var(--ink-500)", fontSize: 14, margin: 0 }}>
              Kampanyalardan ve yeni ürünlerden haberdar olmak için kaydolun.
            </p>
            <form className="newsletter" onSubmit={handleSubscribe} style={{ marginTop: "var(--s-3)" }}>
              <input
                type="email"
                placeholder="E-posta adresiniz"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="E-posta adresi"
                required
              />
              <button type="submit" aria-label="Abone ol">
                <Icon name="arrow-right" size={14} stroke={2.5} />
              </button>
            </form>
          </div>
        </div>

        <div className="foot-meta">
          © 2024–2026 Hediye3D. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
