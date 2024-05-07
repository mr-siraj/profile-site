"use client";
import Link from "next/link";
import {} from "react";

function Header() {
  return (
    <>
      <section className=" h-[70px] flex justify-around items-center">
        <div className="logo">logo</div>
        <nav className="flex gap-10 items-center">
          <Link href="/home">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/projects">Project</Link>
          <Link href="/blogs">Blogs</Link>
        </nav>
      </section>
    </>
  );
}

export default Header;
