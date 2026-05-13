import { Icon } from "./Icons";

const FEATURES = [
  {
    icon: "shield",
    title: "Yüksek Kalite",
    body: "Dayanıklı ve uzun ömürlü malzemeler kullanıyoruz.",
  },
  {
    icon: "printer-3d",
    title: "3D Baskı Teknolojisi",
    body: "Modern 3D yazıcılarımızla yüksek detaylı üretim.",
  },
  {
    icon: "pencil",
    title: "Kişiye Özel Tasarım",
    body: "İstediğiniz isim, logo veya tasarımı üretebiliriz.",
  },
  {
    icon: "truck",
    title: "Hızlı Kargo",
    body: "Siparişiniz hızlı ve güvenli şekilde kapınızda.",
  },
] as const;

export function Features() {
  return (
    <section className="wrap section" style={{ paddingTop: 0 }} aria-label="Özelliklerimiz">
      <div className="features" role="list">
        {FEATURES.map((f) => (
          <div key={f.title} className="feature" role="listitem">
            <div className="feature-icon" aria-hidden="true">
              <Icon name={f.icon} size={20} />
            </div>
            <div>
              <h4>{f.title}</h4>
              <p>{f.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
