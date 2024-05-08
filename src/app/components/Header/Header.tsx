"use client";
import PageWrapper from "@/components/PageWrapper/PageWrapper";
import Image from "next/image";
import Link from "next/link";
import {} from "react";
import NavLinks from "./NavLinks";

function Header() {
  return (
    <>
      <PageWrapper className="h-[100px] flex justify-between items-center  lg:px-[70px] md:py-20 pattern_dark text-white">
        <div className="ml-5 mt-2 md:-ml-5 ">
          <Link href="/home" className="select-none">
            <Image src="/logo/image.png" alt="zlaam" width={75} height={75} />
          </Link>
        </div>
        <NavLinks />
      </PageWrapper>
    </>
  );
}

export default Header;
