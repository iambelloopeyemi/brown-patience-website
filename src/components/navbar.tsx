import { montserrat } from "@/assets/fonts";
import Logo from "./ui/logo";
import NavLinks from "./ui/nav-links";
import HamburgerMenu from "./ui/hamburger-menu";

export default function Navbar() {
  return (
    <nav
      className={`${montserrat.className} max-w-[1200px] mx-auto px-6 py-4 flex justify-between items-center relative`}
    >
      <Logo />
      <NavLinks />
      <HamburgerMenu />
    </nav>
  );
}
