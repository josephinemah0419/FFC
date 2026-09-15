"use client";
import { useState } from "react";
import { menuItems } from "@/data/menu";
import { Media } from "@/components/ui/Media";
import { useLocale } from "@/components/i18n/LocaleProvider";
const categories = ["Tea", "Signature Drinks", "Home-style Dishes", "Signature Dishes"] as const;
export function MenuTabs() {
  const [category, setCategory] = useState<(typeof categories)[number]>("Tea");
  const { t } = useLocale();
  const items = menuItems.filter((item) => item.category === category);

  return <div>
    <div className="menu-tabs" role="tablist" aria-label={t.menu.hero.title}>{categories.map((item, index) => <button role="tab" aria-selected={category === item} onClick={() => setCategory(item)} key={item}>{t.menu.categories[index]}</button>)}</div>
    <div className="menu-book"><div className="menu-book-page">
      <p className="menu-book-title">{t.menu.categories[categories.indexOf(category)]}</p>
      <div className="menu-grid">{items.map((item) => { const index = menuItems.indexOf(item); const [name, description] = t.menu.items[index]; return <article className="menu-item" key={item.id}><Media src={item.image} alt={name} /><div><p className="menu-price text-caption">{item.price}</p><h3 className="text-menu-item">{name}</h3><p className="text-menu-description">{description}</p></div></article>; })}</div>
    </div></div>
  </div>;
}
