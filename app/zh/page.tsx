import Home from "@/app/page";
import { localizedMetadata } from "@/locales/metadata";
export const metadata = localizedMetadata("home", "zh", "/");
export default function ChineseHomePage() { return <Home />; }
