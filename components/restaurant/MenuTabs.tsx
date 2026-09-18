"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CupSoda, UtensilsCrossed } from "lucide-react";
import { menuCategories, menuItems, type MenuCategory } from "@/data/menu";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { Media } from "@/components/ui/Media";

const menuGroups = ["food", "drinks"] as const;
const menuGroupIcons = [UtensilsCrossed, CupSoda];

export function MenuTabs() {
  const searchParams = useSearchParams();
  const requestedGroup = searchParams.get("group") === "drinks" ? "drinks" : "food";
  const group = requestedGroup;
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | null>(null);
  const { t } = useLocale();
  const firstCategory = menuCategories.find((entry) => entry.group === group)?.id ?? menuCategories[0].id;
  const category = selectedCategory && menuCategories.find((entry) => entry.id === selectedCategory)?.group === group ? selectedCategory : firstCategory;
  const items = menuItems.filter((item) => item.category === category);
  const categoryTitle = t.menu.categories[menuCategories.findIndex(({ id }) => id === category)];
  const groupCategories = menuCategories.filter((entry) => entry.group === group);

  const selectGroup = (nextGroup: (typeof menuGroups)[number]) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("group", nextGroup);
    window.history.replaceState(null, "", `?${params.toString()}`);
  };

  return <div className="menu-navigation">
    <div className="menu-group-tabs" aria-label={t.menu.hero.title}>
      {menuGroups.map((item, index) => { const Icon = menuGroupIcons[index]; return <button aria-pressed={group === item} key={item} onClick={() => selectGroup(item)} type="button"><Icon aria-hidden="true" /><span>{t.menu.groups[index]}</span></button>; })}
    </div>
    <div className="menu-category-navigation">
      <div className="menu-tabs menu-subtabs" role="tablist" aria-label={t.menu.groups[menuGroups.indexOf(group)]}>
        {groupCategories.map(({ id }) => { const index = menuCategories.findIndex((entry) => entry.id === id); return <button aria-controls={`menu-panel-${id}`} aria-selected={category === id} id={`menu-tab-${id}`} key={id} onClick={() => setSelectedCategory(id)} role="tab">{t.menu.categories[index]}</button>; })}
      </div>
    </div>
    <div className="menu-book"><div className="menu-book-page">
      <p className="menu-book-title">{categoryTitle}</p>
      <div aria-labelledby={`menu-tab-${category}`} className="menu-grid" id={`menu-panel-${category}`} role="tabpanel">
        {items.map((item) => {
          const [name, note] = t.menu.items[menuItems.indexOf(item)];
          return <article className="menu-item" key={item.id}><Media alt={name} src={`/menu/${item.id}.png`} /><div><div className="menu-item-heading"><h3 className="text-menu-item">{name}</h3><p className="menu-price text-caption">{item.price}</p></div>{note && <p className="text-menu-description">{note}</p>}</div></article>;
        })}
      </div>
    </div></div>
  </div>;
}
