"use client";

import { useState } from "react";
import { Icon } from "./Icons";
import { useToast } from "./AppProviders";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: ContactForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export function IletisimForm() {
  const [form, setForm] = useState<ContactForm>(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);
  const { showToast } = useToast();

  const set = (k: keyof ContactForm, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setForm(INITIAL_FORM);
    showToast("Mesajınız gönderildi. En kısa sürede dönüş yapacağız.");
  };

  return (
    <div
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--line)",
        borderRadius: "var(--r-xl)",
        padding: "var(--s-7)",
      }}
    >
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "var(--fs-24)",
          letterSpacing: "-0.015em",
          marginBottom: "var(--s-2)",
          color: "var(--ink-900)",
        }}
      >
        Mesaj Gönder
      </h2>
      <p style={{ color: "var(--ink-500)", fontSize: "var(--fs-14)", marginBottom: "var(--s-6)" }}>
        Tüm alanları doldurun, size en kısa sürede ulaşalım.
      </p>

      <form onSubmit={handleSubmit}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--s-3)" }}>
          <div className="field">
            <label htmlFor="contact-name">Ad Soyad *</label>
            <input
              id="contact-name"
              type="text"
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder="Adınız ve soyadınız"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="contact-email">E-posta *</label>
            <input
              id="contact-email"
              type="email"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              placeholder="ornek@email.com"
              required
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="contact-phone">Telefon</label>
          <input
            id="contact-phone"
            type="tel"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            placeholder="0 (5__) ___ __ __"
          />
        </div>

        <div className="field">
          <label htmlFor="contact-subject">Konu *</label>
          <input
            id="contact-subject"
            type="text"
            value={form.subject}
            onChange={(e) => set("subject", e.target.value)}
            placeholder="Mesajınızın konusu"
            required
          />
        </div>

        <div className="field">
          <label htmlFor="contact-message">Mesaj *</label>
          <textarea
            id="contact-message"
            value={form.message}
            onChange={(e) => set("message", e.target.value)}
            placeholder="Mesajınızı buraya yazın..."
            style={{ minHeight: 140 }}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-arrow"
          style={{ width: "100%", justifyContent: "center" }}
          disabled={submitting}
        >
          {submitting ? (
            "Gönderiliyor..."
          ) : (
            <>
              Mesajı Gönder
              <Icon name="arrow-right" size={14} stroke={2.5} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default IletisimForm;
