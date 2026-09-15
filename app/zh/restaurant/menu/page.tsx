import MenuPage from "@/app/restaurant/menu/page";
import { localizedMetadata } from "@/locales/metadata";
export const metadata = localizedMetadata("menu", "zh", "/restaurant/menu");
export default function ChineseMenuPage() { return <MenuPage />; }
