"use client";
import Link from "next/link";
import {} from "react";
import NavLinks from "./NavLinks";
import Image from "next/image";
import { Menu } from "lucide-react";
function Header() {
  return (
    <>
      <section className="h-[70px] flex justify-between items-center md:mx-[70px] mx-10">
        <div className="logo">
          <Link href="/home">
            <Image src="/logo/image.png" alt="zlaam" width={75} height={75} />
          </Link>
        </div>
        <NavLinks />
        <Menu />
      </section>
    </>
  );
}

export default Header;
