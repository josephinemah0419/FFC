import Image from "next/image";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "", priority = false }: LogoProps) {
  return (
    <Image
      src="/ffc-logo.png"
      alt="Foodie & Friend Cuisine"
      width={650}
      height={650}
      priority={priority}
      className={`brand-logo ${className}`}
    />
  );
}
