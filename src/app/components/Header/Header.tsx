"use client";
import Link from "next/link";
import {} from "react";
import NavLinks from "./NavLinks";
import Image from "next/image";
import PageWrapper from "@/components/PageWrapper/PageWrapper";

function Header() {
  return (
    <>
      <header className="relative z-[999]">
        <PageWrapper className="h-[100px] flex justify-between items-center  lg :px-[70px] md:py-20  sticky top-0    pattern_dark text-white">
          <div className="ml-5 mt-2 md:-ml-5 ">
            <Link href="/home" className="select-none">
              <Image src="/logo/image.png" alt="zlaam" width={75} height={75} />
            </Link>
          </div>
          <NavLinks />
        </PageWrapper>
      </header>
    </>
  );
}

export default Header;
