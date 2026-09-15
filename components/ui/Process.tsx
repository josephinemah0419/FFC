"use client";

import { useLocale } from "@/components/i18n/LocaleProvider";
export function Process({ compact = false }: { compact?: boolean }) { const { t } = useLocale(); return <div className={`process ${compact ? "process-compact" : ""}`}>{t.certification.process.steps.map(([number, title, copy]) => <div className="process-step" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></div>)}</div>; }
