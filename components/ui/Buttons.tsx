import Link from "next/link";
import type { ReactNode } from "react";
type Props = { href: string; children: ReactNode; variant?: "primary" | "ghost" | "text" | "light"; className?: string };
export function ActionLink({ href, children, variant = "primary", className = "" }: Props) { return <Link className={`button text-button button-${variant} ${className}`} href={href}>{children}</Link>; }
