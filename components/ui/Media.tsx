import Image from "next/image";
type Props = { src: string; alt: string; className?: string; priority?: boolean };
export function Media({ src, alt, className = "", priority = false }: Props) { return <div className={`media ${className}`}><Image src={src} alt={alt} fill priority={priority} sizes="(max-width: 720px) 100vw, 60vw" /></div>; }
