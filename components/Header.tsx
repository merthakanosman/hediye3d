"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Icon } from "./Icons";

const NAV_LINKS = [
  { id: "home", label: "Ana Sayfa", href: "/" },
  { id: "products", label: "Ürünler", href: "/urunler", caret: true },
  { id: "coll", label: "Koleksiyonlar", href: "/koleksiyonlar" },
  { id: "about", label: "Hakkımızda", href: "/hakkimizda" },
  { id: "contact", label: "İletişim", href: "/iletisim" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => inputRef.current?.focus(), 60);
    } else {
      setQuery("");
    }
  }, [searchOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="site-header">
      <div className="wrap">
        <Logo />

        {/* Desktop Nav */}
        <nav className="nav" aria-label="Ana Navigasyon">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.id}
              href={l.href}
              className={isActive(l.href) ? "active" : ""}
              aria-current={isActive(l.href) ? "page" : undefined}
            >
              {l.label}
              {l.caret && <Icon name="chevron-down" size={14} stroke={2.5} />}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          {/* Expanding search */}
          <div className={"search-widget" + (searchOpen ? " open" : "")} role="search">
            <input
              ref={inputRef}
              type="search"
              placeholder="Ürün ara…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Ürün ara"
              tabIndex={searchOpen ? 0 : -1}
            />
            <button
              className="search-btn"
              aria-label={searchOpen ? "Aramayı kapat" : "Ara"}
              onClick={() => setSearchOpen((v) => !v)}
            >
              <Icon name={searchOpen ? "x" : "search"} size={16} />
            </button>
          </div>

          <a
            href="https://www.shopier.com/hediye3dbaski"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-arrow"
          >
            Mağazamız
            <Icon name="arrow-right" size={14} stroke={2.5} />
          </a>

          {/* Mobile Hamburger */}
          <button
            className="btn-icon mobile-menu-btn"
            aria-label={menuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
            onClick={() => setMenuOpen((v) => !v)}
            style={{ display: "none" }}
          >
            <Icon name={menuOpen ? "x" : "menu"} size={18} />
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Nav */}
      <div className={"mobile-nav" + (menuOpen ? " open" : "")} aria-hidden={!menuOpen}>
        <nav aria-label="Mobil Navigasyon">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.id}
              href={l.href}
              className={isActive(l.href) ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://www.shopier.com/hediye3dbaski"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-arrow"
            onClick={() => setMenuOpen(false)}
            style={{ marginTop: "var(--s-3)", width: "100%", justifyContent: "center" }}
          >
            Mağazamız
            <Icon name="arrow-right" size={14} stroke={2.5} />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
