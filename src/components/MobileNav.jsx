import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { NavLink, useLocation } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-scroll";

const links = [
  {
    name: "home",
    path: "section1",
  },
  {
    name: "product",
    path: "section2",
  },
  {
    name: "services",
    path: "section3",
  },
  {
    name: "Contact",
    path: "section4",
  },
];

const MobileNav = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col backdrop-blur-md">
        <div className="mt-20 mb-20 text-2xl font-second ">
          <NavLink href="/">
            <h1 className="font-semibold text-accent text-4xl">
              Cemilanku<span className="text-accent">.</span>
            </h1>
          </NavLink>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8 backdrop-blur-md  ">
          {links.map((link, index) => (
            <Link to={link.path} key={index}>
              <a
                className={`text-black text-xl capitalize bg-primary rounded-md p-2 ${
                  link.path === pathname
                    ? "text-accent border-b-2 border-accent"
                    : "hover:text-accent"
                } transition-all`}
              >
                {link.name}
              </a>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
