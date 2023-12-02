import { cn } from "@/utils/className";
import Link from "next/link";

type NavLinksProps = {
  isHamburgerMenu?: boolean;
  isFooter?: boolean;
};

export default function NavLinks(props: NavLinksProps) {
  const { isHamburgerMenu } = props;

  const LINKS: string[] = ["about", "process", "schedule-a-call"];
  const links = LINKS.map((link) => ({
    link,
    linkText: link.replace(/-/g, " "),
  }));

  return (
    <ul
      role="menu"
      className={cn(
        "hidden sm:flex items-center gap-6",
        isHamburgerMenu &&
          "bg-white border-b py-6 flex flex-col items-center justify-center absolute left-0 right-0 top-12 z-10 ease-in-out"
      )}
    >
      {links.map(({ link, linkText }) => {
        return (
          <li key={link}>
            <Link
              href={link}
              role="menuItem"
              className="font-bold uppercase text-[14px] leading-[14px] tracking-widest hover:opacity-70 ease-in-out"
            >
              {linkText}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
