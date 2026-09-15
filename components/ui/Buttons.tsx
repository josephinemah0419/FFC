"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useLocale } from "@/components/i18n/LocaleProvider";
type Props = { href: string; children: ReactNode; variant?: "primary" | "ghost" | "text" | "light"; className?: string };
export function ActionLink({ href, children, variant = "primary", className = "" }: Props) { const { href: localHref } = useLocale(); return <Link className={`button text-button button-${variant} ${className}`} href={localHref(href)}>{children}</Link>; }
