import React from "react";

interface CatIconProps {
  kind: "keychain" | "car" | "figure" | "logo" | "home" | "bookmark";
  size?: number;
}

export function CatIcon({ kind, size = 40 }: CatIconProps) {
  const s = size;
  const props = {
    width: s,
    height: s,
    viewBox: "0 0 40 40",
    fill: "none",
    "aria-hidden": true as const,
  };

  switch (kind) {
    case "keychain":
      return (
        <svg {...props}>
          <circle cx="20" cy="14" r="8" stroke="#7C3AED" strokeWidth="2.5" fill="#EDE9FE"/>
          <circle cx="20" cy="14" r="3" fill="#7C3AED"/>
          <rect x="17" y="22" width="6" height="14" rx="3" fill="#7C3AED" opacity="0.7"/>
          <rect x="18.5" y="20" width="3" height="4" rx="1" fill="#9461F0"/>
        </svg>
      );
    case "car":
      return (
        <svg {...props}>
          <rect x="5" y="18" width="30" height="14" rx="4" fill="#FB923C" opacity="0.2"/>
          <path d="M8 20 L12 12 L28 12 L32 20 Z" fill="#F97316" opacity="0.8"/>
          <rect x="5" y="20" width="30" height="10" rx="3" fill="#EA580C"/>
          <circle cx="12" cy="32" r="3.5" fill="#1A1033"/>
          <circle cx="28" cy="32" r="3.5" fill="#1A1033"/>
          <rect x="14" y="14" width="5" height="5" rx="1" fill="#FFF" opacity="0.5"/>
          <rect x="21" y="14" width="5" height="5" rx="1" fill="#FFF" opacity="0.5"/>
        </svg>
      );
    case "figure":
      return (
        <svg {...props}>
          <circle cx="20" cy="10" r="6" fill="#7C3AED" opacity="0.8"/>
          <path d="M14 18 L20 16 L26 18 L28 32 L20 30 L12 32 Z" fill="#6228C2"/>
          <path d="M12 32 L8 36" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M28 32 L32 36" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="20" cy="10" r="3" fill="#C534B0" opacity="0.6"/>
        </svg>
      );
    case "logo":
      return (
        <svg {...props}>
          <rect x="6" y="6" width="28" height="28" rx="6" fill="#7C3AED" opacity="0.15"/>
          <path d="M10 28 L16 12 L20 22 L24 16 L30 28 Z" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinejoin="round"/>
          <circle cx="20" cy="10" r="3" fill="#F97316"/>
          <rect x="14" y="32" width="12" height="2" rx="1" fill="#7C3AED" opacity="0.5"/>
        </svg>
      );
    case "home":
      return (
        <svg {...props}>
          <path d="M6 20 L20 8 L34 20 L34 34 L6 34 Z" fill="#7C3AED" opacity="0.15"/>
          <path d="M6 20 L20 8 L34 20" stroke="#7C3AED" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
          <rect x="10" y="22" width="8" height="12" rx="1.5" fill="#9461F0" opacity="0.7"/>
          <rect x="22" y="22" width="8" height="12" rx="1.5" fill="#9461F0" opacity="0.7"/>
          <rect x="17" y="26" width="6" height="8" rx="1" fill="#7C3AED"/>
        </svg>
      );
    case "bookmark":
      return (
        <svg {...props}>
          <path d="M12 4 L28 4 L28 36 L20 28 L12 36 Z" fill="#F97316" opacity="0.8"/>
          <path d="M12 4 L28 4 L28 36 L20 28 L12 36 Z" stroke="#EA580C" strokeWidth="1.5" fill="none"/>
          <line x1="16" y1="13" x2="24" y2="13" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="16" y1="18" x2="22" y2="18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );
    default:
      return null;
  }
}

export default CatIcon;
