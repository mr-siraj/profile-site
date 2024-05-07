"use client";
import Link from "next/link";
import {} from "react";
import NavLinks from "./NavLinks";
import Image from "next/image";

function Header() {
  return (
    <>
      <section className="h-[100px] flex justify-between items-center  lg :px-[70px] px-10 pattern_dark text-white">
        <div className="logo">
          <Link href="/home" className="select-none">
            <Image src="/logo/image.png" alt="zlaam" width={75} height={75} />
          </Link>
        </div>
        <NavLinks />
      </section>
    </>
  );
}

export default Header;
