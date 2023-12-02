import { type ReactNode } from "react";
import { montserrat } from "@/assets/fonts";
import { cn } from "@/utils/className";
import Link from "next/link";

export type buttonLinkProps = {
  link: string;
  children: ReactNode;
};

export default function ButtonLink(props: buttonLinkProps) {
  const { link, children } = props;

  return (
    <Link
      href={link}
      className={cn(
        montserrat.className,
        "block bg-ecru rounded-full px-8 py-3 text-white font-bold uppercase text-[16px] leading-[27px] tracking-widest"
      )}
    >
      {children}
    </Link>
  );
}
