"use client";
import Link from "next/link";
import {} from "react";
import NavLinks from "./NavLinks";

function Header() {
  return (
    <>
      <section className="h-[70px] flex justify-around items-center">
        <div className="logo">logo</div>
        <NavLinks />
      </section>
    </>
  );
}

export default Header;
