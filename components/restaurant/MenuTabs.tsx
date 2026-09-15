"use client";
import { useState } from "react";
import { menuItems } from "@/data/menu";
import { Media } from "@/components/ui/Media";
const categories = ["Tea", "Signature Drinks", "Home-style Dishes", "Signature Dishes"] as const;
export function MenuTabs() { const [category, setCategory] = useState<(typeof categories)[number]>("Tea"); return <div><div className="menu-tabs" role="tablist" aria-label="Menu categories">{categories.map((item) => <button role="tab" aria-selected={category === item} onClick={() => setCategory(item)} key={item}>{item}</button>)}</div><div className="menu-grid">{menuItems.filter((item) => item.category === category).map((item) => <article className="menu-item" key={item.name}><Media src={item.image} alt={item.name} /><div><p className="menu-price text-caption">{item.price}</p><h3 className="text-menu-item">{item.name}</h3><p className="text-menu-description">{item.description}</p></div></article>)}</div></div>; }
