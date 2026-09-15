export type MenuItem = { id: string; category: "Tea" | "Signature Drinks" | "Home-style Dishes" | "Signature Dishes"; price: string; image: string };

export const menuItems: MenuItem[] = [
  { id: "house-tea", category: "Tea", price: "RM —", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=80" },
  { id: "garden-herb-tea", category: "Tea", price: "RM —", image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=900&q=80" },
  { id: "citrus-tea-cooler", category: "Signature Drinks", price: "RM —", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=80" },
  { id: "seasonal-vegetables", category: "Home-style Dishes", price: "RM —", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80" },
  { id: "comfort-bowl", category: "Home-style Dishes", price: "RM —", image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80" },
  { id: "ffc-signature", category: "Signature Dishes", price: "RM —", image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80" },
];
