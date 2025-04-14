"use client";

import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import { usePathname } from "next/navigation";
import classnames from "classnames";

export const NavBar = () => {
  const pathName = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex space-x-6 mb-5 border-b px-5 h-14 items-center bg-white dark:bg-zinc-800">
      <Link href="/" className="text-2xl text-zinc-700 dark:text-zinc-300">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classnames({
              "font-medium text-zinc-900 dark:text-white":
                link.href === pathName,
              "text-zinc-500 dark:text-zinc-400": link.href !== pathName,
              "hover:text-zinc-800 dark:hover:text-zinc-300 transition-colors":
                true,
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};
