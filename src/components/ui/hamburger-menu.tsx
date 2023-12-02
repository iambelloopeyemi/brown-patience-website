"use client";
import { useState } from "react";
import { Bars, XMark } from "./icons";
import NavLinks from "./nav-links";

export default function HamburgerMenu() {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((previousState) => !previousState);
  };

  return (
    <>
      <button
        onClick={toggleOpen}
        aria-label={isOpen ? "Close navigation men" : "Open navigation menu"}
        className="sm:hidden bg-transparent border-none outline-none"
      >
        {isOpen ? <XMark /> : <Bars />}
      </button>
      {isOpen && <NavLinks isHamburgerMenu />}
    </>
  );
}
