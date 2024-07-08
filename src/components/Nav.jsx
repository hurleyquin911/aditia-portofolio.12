import React from "react";
import { NavLink, useLocation } from "react-router-dom";
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

const Nav = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <div className="bg-black rounded-md p-1 pl-3 pr-3">
          <Link
            to={link.path}
            smooth={true}
            duration={500}
            key={index}
            className={`text-white cursor-pointer ${
              link.path === pathname
                ? "text-accent border-b-2 border-accent"
                : ""
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default Nav;
