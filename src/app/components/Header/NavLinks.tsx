"use client";
import { Fragment, useState } from "react";
import { Menu } from "lucide-react";
import { Divide as Hamburger } from "hamburger-react";
import { useActivePath } from "@/app/helper/CeckActivePath/CheckActivePath";
import Link from "next/link";
import { cn } from "@/app/lib/utils";
function NavLinks() {
  const [isOpen, setOpen] = useState(false);
  const isActive = useActivePath();
  const navLinks = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "Expertise", path: "/expertise" },
    { id: 3, name: "Projects", path: "/projects" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Blogs", path: "/blogs" },
  ];
  const handleCloseMenu = () => {
    setOpen(false);
  };
  return (
    <>
      <nav
        className={cn(
          `flex flex-col h-screen justify-center absolute top-0 right-0 pattern w-full items-center gap-20 
      md:flex-row md:h-0 md:static md:gap-10 md:justify-end overflow-y-auto`,
          !isOpen
            ? "translate-x-[-100%] duration-300 transition-all"
            : "translate-x-0 duration-300 transition-all"
        )}
      >
        {navLinks.map((data) => (
          <Fragment key={data.id}>
            <Link
              onClick={handleCloseMenu}
              href={data.path && data.path}
              className={`link_light relative tracking-wide text-[1.2rem] ${
                isActive(data.path) ? "text-lg font-medium" : ""
              }`}
            >
              {data.name}
            </Link>
          </Fragment>
        ))}
      </nav>
      <div
        className="md:hidden absolute top-8 right-10"
        onClick={() => setOpen(!isOpen)}
      >
        <Hamburger
          distance="sm"
          toggled={isOpen}
          toggle={setOpen}
          size={25}
          rounded
          hideOutline={false}
        />
      </div>
    </>
  );
}

export default NavLinks;
