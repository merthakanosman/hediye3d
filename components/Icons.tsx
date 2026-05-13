import React from "react";

interface IconProps {
  name: string;
  size?: number;
  stroke?: number;
  className?: string;
}

export function Icon({ name, size = 18, stroke = 2, className }: IconProps) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: stroke,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "chevron-down":
      return <svg {...props}><path d="m6 9 6 6 6-6"/></svg>;
    case "chevron-right":
      return <svg {...props}><path d="m9 6 6 6-6 6"/></svg>;
    case "chevron-left":
      return <svg {...props}><path d="m15 6-6 6 6 6"/></svg>;
    case "arrow-right":
      return <svg {...props}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>;
    case "search":
      return <svg {...props}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>;
    case "cart":
      return (
        <svg {...props}>
          <circle cx="9" cy="20" r="1.5"/>
          <circle cx="18" cy="20" r="1.5"/>
          <path d="M3 4h2l2.5 12h12l2-8H6.5"/>
        </svg>
      );
    case "plus":
      return <svg {...props}><path d="M12 5v14M5 12h14"/></svg>;
    case "check":
      return <svg {...props}><path d="M20 6 9 17l-5-5"/></svg>;
    case "x":
      return <svg {...props}><path d="M18 6 6 18M6 6l12 12"/></svg>;
    case "phone":
      return (
        <svg {...props}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.97.37 1.92.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.89.33 1.84.57 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      );
    case "mail":
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="14" rx="2"/>
          <path d="m3 7 9 6 9-6"/>
        </svg>
      );
    case "pin":
      return (
        <svg {...props}>
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      );
    case "shield":
      return <svg {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
    case "printer-3d":
      return (
        <svg {...props}>
          <rect x="4" y="9" width="16" height="9" rx="1.5"/>
          <path d="M4 13h16"/>
          <path d="M9 18v3M15 18v3M9 9V6h6v3"/>
        </svg>
      );
    case "pencil":
      return (
        <svg {...props}>
          <path d="M12 20h9"/>
          <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/>
        </svg>
      );
    case "truck":
      return (
        <svg {...props}>
          <path d="M3 7h11v10H3z"/>
          <path d="M14 10h4l3 3v4h-7"/>
          <circle cx="7" cy="18" r="2"/>
          <circle cx="17" cy="18" r="2"/>
        </svg>
      );
    case "instagram":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
        </svg>
      );
    case "facebook":
      return (
        <svg {...props}>
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      );
    case "tiktok":
      return <svg {...props}><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>;
    case "quote":
      return (
        <svg {...props} strokeWidth={0} fill="currentColor">
          <path d="M7 7h4v4H8c0 2 1 3 3 3v3c-4 0-6-2-6-6V7zm9 0h4v4h-3c0 2 1 3 3 3v3c-4 0-6-2-6-6V7z"/>
        </svg>
      );
    case "spark":
      return (
        <svg {...props}>
          <path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M5 19l4-4M15 9l4-4"/>
        </svg>
      );
    case "menu":
      return <svg {...props}><path d="M3 6h18M3 12h18M3 18h18"/></svg>;
    default:
      return null;
  }
}

export default Icon;
