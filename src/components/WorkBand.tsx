import type { ReactNode } from "react";

export type WorkBandVariant = "github" | "product" | "studio";

type Props = {
  variant: WorkBandVariant;
  title: string;
  lede: string;
  icon: ReactNode;
  children: ReactNode;
};

export function WorkBand({ variant, title, lede, icon, children }: Props) {
  return (
    <div className={`work-band work-band--${variant}`}>
      <header className="work-band__header">
        <div className={`work-band__icon-badge work-band__icon-badge--${variant}`}>
          {icon}
        </div>
        <div className="work-band__titles">
          <h3 className="work-band__title">{title}</h3>
          <p className="work-band__lede">{lede}</p>
        </div>
      </header>
      {children}
    </div>
  );
}
