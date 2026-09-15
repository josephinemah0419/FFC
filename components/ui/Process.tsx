import { processSteps } from "@/data/site";
export function Process({ compact = false }: { compact?: boolean }) { return <div className={`process ${compact ? "process-compact" : ""}`}>{processSteps.map(([number, title, copy]) => <div className="process-step" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></div>)}</div>; }
