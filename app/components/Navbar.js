"use client";

const { usePathname } = require("next/navigation");
import Link from "next/link";
const { useState } = require("react");

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "menu" },
    { name: "Admin", path: "admin" },
  ];

  return (
    <nav className="bg-blue-600 text-white px-6 py-5 flex justify-between items-center absolute top-0 left-0 w-full">
      <div className="text-xl font-bold"><a href="/">My Restaurant</a></div>

      <div className="md:hidden">
        <button onClick={() => setOpen(!open)}>☰</button>
      </div>

      <ul
        className={`md:flex md:space-x-6 ${open ? "block" : "hidden"} md:block`}
      >
        {navItems.map(({ name, path }) => (
          <li key={path}>
            <Link
              href={path}
              className={`block py-2 md:py-0 ${
                pathname === path ? "font-bold underline" : ""
              }`}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;