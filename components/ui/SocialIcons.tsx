import type { SVGProps } from "react";

type SocialIconProps = SVGProps<SVGSVGElement>;

export function FacebookIcon(props: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
      <path d="M13.72 21v-8.21h2.75l.41-3.2h-3.16V7.55c0-.93.26-1.56 1.59-1.56H17V3.12A23.06 23.06 0 0 0 14.44 3c-2.53 0-4.26 1.54-4.26 4.37v2.22H7.32v3.2h2.86V21h3.54Z" />
    </svg>
  );
}

export function InstagramIcon(props: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true" focusable="false" {...props}>
      <rect x="3.3" y="3.3" width="17.4" height="17.4" rx="5.1" />
      <circle cx="12" cy="12" r="4.05" />
      <circle cx="17.55" cy="6.55" r=".85" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WhatsAppIcon(props: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>
      <path d="M20.15 11.7A8.15 8.15 0 0 1 8.1 18.9L3.85 20.15l1.3-4.1A8.15 8.15 0 1 1 20.15 11.7Z" />
      <path d="M9.2 8.35c.18-.43.37-.44.64-.44h.55c.18 0 .38.02.5.3l.71 1.67c.1.25.05.43-.05.6l-.3.39c-.1.13-.2.24-.08.46.12.21.53.88 1.15 1.43.79.71 1.46.93 1.67 1.04.2.1.32.08.44-.05l.55-.65c.14-.17.29-.14.49-.07l1.72.81c.27.13.45.19.51.3.07.1.07.61-.14 1.2-.2.59-1.17 1.12-1.61 1.19-.42.06-.94.09-1.51-.1-.34-.11-.78-.26-1.34-.5-2.34-1-3.87-3.37-3.99-3.53-.12-.16-.95-1.27-.95-2.43 0-1.15.61-1.72.82-1.95Z" />
    </svg>
  );
}
