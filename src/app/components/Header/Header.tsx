"use client";
import Link from "next/link";
import {} from "react";
import NavLinks from "./NavLinks";
import Image from "next/image";

function Header() {
  return (
    <>
      <section className="h-[70px] flex justify-between items-center md:mx-[70px] mx-10">
        <div className="logo">
          <Image src="/logo/image.png" alt="zlaam" width={75} height={75} />
        </div>
        <NavLinks />
      </section>
    </>
  );
}

export default Header;
