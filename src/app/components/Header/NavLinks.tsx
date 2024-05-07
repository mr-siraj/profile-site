"use client";
import {} from "react";
import { useActivePath } from "@/app/helper/CeckActivePath/CheckActivePath";
import Link from "next/link";
function NavLinks() {
  const isActive = useActivePath();
  const navLinks = [
    {
      name: "Home",
      path: "/home",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Blogs",
      path: "/blogs",
    },
  ];
  return (
    <>
      <nav className="flex gap-10 items-center">
        {navLinks.map((data) => (
          <Link
            href={data.path && data.path}
            key={data.name}
            className={isActive(data.path) ? "text-lg font-semibold" : ""}
          >
            {data.name}
          </Link>
        ))}
      </nav>
    </>
  );
}

export default NavLinks;
