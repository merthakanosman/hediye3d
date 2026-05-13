import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
}

export function Logo({ size = "md" }: LogoProps) {
  const markSize = size === "sm" ? 36 : size === "lg" ? 52 : 44;
  const fontSize = size === "sm" ? 16 : size === "lg" ? 24 : 20;
  const markFontSize = size === "sm" ? 14 : size === "lg" ? 21 : 18;

  return (
    <Link
      href="/"
      className="logo"
      aria-label="Hediye3D Ana Sayfa"
      style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
    >
      <span
        className="logo-mark"
        style={{
          width: markSize,
          height: markSize,
          fontSize: markFontSize,
        }}
      >
        H3D
      </span>
      <span
        className="logo-text"
        style={{ fontSize }}
      >
        HEDİYE3D
      </span>
    </Link>
  );
}

export default Logo;
