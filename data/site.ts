import { ChefHat, Factory, Leaf, UtensilsCrossed, type LucideIcon } from "lucide-react";

export const images = {
  hero: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1800&q=85",
  salad: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1400&q=80",
  greens: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=80",
  restaurant: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1600&q=80",
  tea: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=1400&q=80",
  kitchen: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=80",
  farmer: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1400&q=80",
  factory: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80",
  leaves: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1600&q=80",
  dish: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1400&q=80",
  teaGarden: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80",
  prep: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=1400&q=80",
};

export const mapLink = "https://maps.app.goo.gl/CSZkdNGPuai3wCx89";
export const wazeLink = "https://waze.com/ul/hw28386yhm";

export type Role = { icon: LucideIcon; title: string; copy: string; image: string };
export const roles: Role[] = [
  { icon: UtensilsCrossed, title: "Restaurants", copy: "Show how menus, kitchens and preparation choices reflect ingredient integrity.", image: images.restaurant },
  { icon: Leaf, title: "Farmers", copy: "Demonstrate careful growing, harvesting and handling of raw ingredients.", image: images.farmer },
  { icon: Factory, title: "Factories", copy: "Present production practices that protect quality and minimize artificial additions.", image: images.factory },
  { icon: ChefHat, title: "Cooks", copy: "Recognize cooks who let honest raw ingredients lead the finished dish.", image: images.kitchen },
];

export const processSteps = [
  ["01", "Apply", "Submit your interest to FFC."],
  ["02", "Review", "We review your food practices and ingredient choices."],
  ["03", "Assessment", "FFC carries out a more thorough assessment."],
  ["04", "Recognition", "Qualified applicants receive FFC recognition."],
];
