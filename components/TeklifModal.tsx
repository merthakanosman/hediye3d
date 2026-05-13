"use client";

import { useState } from "react";
import { Icon } from "./Icons";
import { CATEGORIES } from "@/data/categories";

interface TeklifForm {
  name: string;
  email: string;
  type: string;
  brief: string;
}

interface TeklifModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (form: TeklifForm) => void;
}

export function TeklifModal({ open, onClose, onSubmit }: TeklifModalProps) {
  const [form, setForm] = useState<TeklifForm>({
    name: "",
    email: "",
    type: "Anahtarlık",
    brief: "",
  });

  const set = (k: keyof TeklifForm, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: "", email: "", type: "Anahtarlık", brief: "" });
  };

  return (
    <div
      className={"modal-backdrop" + (open ? " show" : "")}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Teklif Al"
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "var(--s-5)" }}>
          <div>
            <span className="t-eyebrow" style={{ display: "block", marginBottom: 6 }}>Özel Sipariş</span>
            <h3 className="t-h2" style={{ fontSize: 24, margin: 0 }}>Teklif Al</h3>
            <p style={{ color: "var(--ink-500)", margin: "var(--s-2) 0 0" }}>
              Tasarımını anlat, 24 saat içinde fiyat ve termin bildirelim.
            </p>
          </div>
          <button className="btn-icon" onClick={onClose} aria-label="Kapat" style={{ flexShrink: 0 }}>
            <Icon name="x" size={16} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="teklif-name">Ad Soyad</label>
            <input
              id="teklif-name"
              type="text"
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder="Adınız ve soyadınız"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="teklif-email">E-posta</label>
            <input
              id="teklif-email"
              type="email"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              placeholder="ornek@email.com"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="teklif-type">Ürün Tipi</label>
            <select
              id="teklif-type"
              value={form.type}
              onChange={(e) => set("type", e.target.value)}
            >
              {CATEGORIES.map((c) => (
                <option key={c.id} value={c.label}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="teklif-brief">Tasarım Açıklaması</label>
            <textarea
              id="teklif-brief"
              value={form.brief}
              onChange={(e) => set("brief", e.target.value)}
              placeholder="Renk, ölçü, isim, logo… aklınızdaki her detayı yazın."
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-arrow"
            style={{ width: "100%", justifyContent: "center" }}
          >
            Teklifi Gönder
            <Icon name="arrow-right" size={14} stroke={2.5} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default TeklifModal;
