import AboutPage from "@/app/about/page";
import { localizedMetadata } from "@/locales/metadata";
export const metadata = localizedMetadata("about", "zh", "/about");
export default function ChineseAboutPage() { return <AboutPage />; }
