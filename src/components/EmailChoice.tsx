import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { gmailComposeHref, mailtoHref } from "../content";

type Props = {
  label: string;
  buttonClassName?: string;
};

function IconGmail() {
  return (
    <svg
      className="email-modal__icon-svg email-modal__icon-svg--gmail"
      viewBox="0 0 24 24"
      width="36"
      height="36"
      aria-hidden
    >
      <path
        fill="#EA4335"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#4285F4"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function IconMailApp() {
  return (
    <svg
      className="email-modal__icon-svg email-modal__icon-svg--mail"
      viewBox="0 0 24 24"
      width="36"
      height="36"
      fill="none"
      aria-hidden
    >
      <rect
        x="2.5"
        y="4.5"
        width="19"
        height="15"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="m22 7.5-9.2 5.84a1.7 1.7 0 0 1-1.8 0L2 7.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function EmailChoice({
  label,
  buttonClassName = "btn btn--primary",
}: Props) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const descId = useId();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  const modal = open ? (
    <>
      <div
        className="email-modal__backdrop"
        aria-hidden
        onClick={close}
      />
      <div
        className="email-modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
      >
        <button
          type="button"
          className="email-modal__close"
          onClick={close}
          aria-label="Close"
        >
          ×
        </button>
        <h2 id={titleId} className="email-modal__title">
          Let&apos;s connect
        </h2>
        <p id={descId} className="email-modal__desc">
          Pick how you&apos;d like to open your message.
        </p>
        <div className="email-modal__actions">
          <a
            href={gmailComposeHref}
            className="email-modal__btn email-modal__btn--gmail"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            <span className="email-modal__btn-icon" aria-hidden>
              <IconGmail />
            </span>
            <span className="email-modal__btn-label">Gmail</span>
          </a>
          <a href={mailtoHref} className="email-modal__btn email-modal__btn--mail" onClick={close}>
            <span className="email-modal__btn-icon" aria-hidden>
              <IconMailApp />
            </span>
            <span className="email-modal__btn-label">Mail app</span>
          </a>
        </div>
      </div>
    </>
  ) : null;

  return (
    <div className="email-choice">
      <button
        type="button"
        className={buttonClassName}
        onClick={() => setOpen(true)}
      >
        {label}
      </button>
      {typeof document !== "undefined" && modal
        ? createPortal(modal, document.body)
        : null}
    </div>
  );
}
