export type MenuItem = { category: "Tea" | "Signature Drinks" | "Home-style Dishes" | "Signature Dishes"; name: string; description: string; price: string; image: string };
export const menuItems: MenuItem[] = [
  { category: "Tea", name: "House Tea Selection", description: "A rotating selection of comforting teas, served with care.", price: "RM —", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=80" },
  { category: "Tea", name: "Garden Herb Tea", description: "A fragrant, gently steeped herbal cup.", price: "RM —", image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=900&q=80" },
  { category: "Signature Drinks", name: "Citrus Tea Cooler", description: "Bright citrus and tea, made for an easy afternoon.", price: "RM —", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=80" },
  { category: "Home-style Dishes", name: "Seasonal Vegetable Plate", description: "A satisfying plate shaped by seasonal ingredients.", price: "RM —", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80" },
  { category: "Home-style Dishes", name: "Comfort Bowl", description: "Home-style cooking with warm, familiar flavours.", price: "RM —", image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80" },
  { category: "Signature Dishes", name: "FFC Signature Dish", description: "Our approach in one thoughtful, ingredient-led dish.", price: "RM —", image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80" },
];
