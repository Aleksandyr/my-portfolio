import type { FC } from "react";
import type { ServiceIconId } from "../content";

const s = {
  stroke: "currentColor",
  strokeWidth: 1.65,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none" as const,
};

function IconFrontend() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden>
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" {...s} />
    </svg>
  );
}

function IconRedesign() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden>
      <path
        d="M12 2v2.5M12 19.5V22M3.5 12H2M22 12h-1.5M5.2 5.2L4 4m15 15-1.2-1.2M5.2 18.8 4 20M20 4l-1.2 1.2"
        {...s}
      />
      <circle cx="12" cy="12" r="3.5" {...s} />
    </svg>
  );
}

function IconComponents() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden>
      <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" {...s} />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" {...s} />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" {...s} />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" {...s} />
    </svg>
  );
}

function IconLanding() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="2.5" {...s} />
      <path d="M2 9h20" {...s} />
      <circle cx="5.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="8" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      <path d="M6 13h6M6 16.5h10" {...s} opacity={0.9} />
    </svg>
  );
}

const byId: Record<ServiceIconId, FC> = {
  frontend: IconFrontend,
  redesign: IconRedesign,
  components: IconComponents,
  landing: IconLanding,
};

export function ServiceIcon({ id }: { id: ServiceIconId }) {
  const Cmp = byId[id];
  return <Cmp />;
}
