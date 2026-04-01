import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import type { Testimonial } from "../content";

/** First slide shown on load (0-based). */
const INITIAL_INDEX = 1;

function initialActiveIndex(length: number) {
  if (length <= 1) return 0;
  return Math.min(INITIAL_INDEX, length - 1);
}

type Props = {
  items: Testimonial[];
  linkedinRecommendationsUrl: string;
};

export function RecommendationsCarousel({
  items,
  linkedinRecommendationsUrl,
}: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(() => initialActiveIndex(items.length));

  const updateActive = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mid = r.left + r.width / 2;
    const cards = el.querySelectorAll<HTMLElement>("[data-rec-index]");
    let best = 0;
    let bestDist = Infinity;
    cards.forEach((card, i) => {
      const cr = card.getBoundingClientRect();
      const c = cr.left + cr.width / 2;
      const d = Math.abs(c - mid);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setActive(best);
  }, []);

  useLayoutEffect(() => {
    const el = scrollerRef.current;
    if (!el || items.length === 0) return;
    const idx = initialActiveIndex(items.length);
    const card = el.querySelector<HTMLElement>(`[data-rec-index="${idx}"]`);
    if (!card) return;
    const left =
      card.offsetLeft - el.clientWidth / 2 + card.offsetWidth / 2;
    el.scrollTo({ left: Math.max(0, left), behavior: "auto" });
    setActive(idx);
  }, [items.length]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateActive();
    el.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      el.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [updateActive, items.length]);

  const scrollTo = (i: number) => {
    const el = scrollerRef.current;
    const card = el?.querySelector<HTMLElement>(`[data-rec-index="${i}"]`);
    if (!el || !card) return;
    const left =
      card.offsetLeft - el.clientWidth / 2 + card.offsetWidth / 2;
    el.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
  };

  return (
    <div className="rec-carousel">
      <div
        className="rec-carousel__scroller"
        ref={scrollerRef}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Recommendations"
      >
        {items.map((t, i) => (
          <figure
            key={i}
            data-rec-index={i}
            className={`quote-card rec-carousel__card ${
              i === active ? "rec-carousel__card--active" : ""
            } ${t.placeholder && !t.quote.trim() ? "quote-card--empty" : ""}`}
            tabIndex={0}
            onFocus={() => setActive(i)}
          >
            {t.placeholder && !t.quote.trim() ? (
              <p className="rec-carousel__placeholder-text">
                Paste the full recommendation from your LinkedIn{" "}
                <a href={linkedinRecommendationsUrl}>Recommendations</a> into{" "}
                <code className="inline-code">src/content.ts</code> (entry{" "}
                {i + 1}).
              </p>
            ) : (
              <blockquote>{t.quote}</blockquote>
            )}
            <figcaption>
              {t.author ? (
                <>
                  {t.profileUrl ? (
                    <a className="author" href={t.profileUrl}>
                      {t.author}
                    </a>
                  ) : (
                    <span className="author">{t.author}</span>
                  )}
                  <span className="relation"> · {t.relation}</span>
                </>
              ) : t.placeholder && !t.quote.trim() ? (
                <span className="relation">Awaiting paste · LinkedIn</span>
              ) : (
                <span className="relation">{t.relation || "LinkedIn"}</span>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="rec-carousel__nav" aria-hidden="true">
        <button
          type="button"
          className="rec-carousel__arrow"
          aria-label="Previous recommendation"
          disabled={active <= 0}
          onClick={() => scrollTo(active - 1)}
        >
          ‹
        </button>
        <div className="rec-carousel__dots">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`rec-carousel__dot ${i === active ? "is-active" : ""}`}
              aria-label={`Recommendation ${i + 1} of ${items.length}`}
              aria-current={i === active ? "true" : undefined}
              onClick={() => scrollTo(i)}
            />
          ))}
        </div>
        <button
          type="button"
          className="rec-carousel__arrow"
          aria-label="Next recommendation"
          disabled={active >= items.length - 1}
          onClick={() => scrollTo(active + 1)}
        >
          ›
        </button>
      </div>
    </div>
  );
}
