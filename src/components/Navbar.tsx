"use client";

import Link from "next/link";
import React from "react";
import { SlHome, SlMagnifier, SlPlus } from "react-icons/sl";
import HomeFillIcon from "./ui/icons/HomeFillIcon";
import HomeIcon from "./ui/icons/HomeFillIcon";
import NewFillIcon from "./ui/icons/NewFillIcon";
import NewIcon from "./ui/icons/NewIcon";
import SearchFillIcon from "./ui/icons/SearchFillIcon";
import SearchIcon from "./ui/icons/SearchIcon";
import { usePathname } from "next/navigation";
import ColorButton from "./ui/ColorButton";

type Props = {};

const Navbar = (props: Props) => {
  const menu = [
    {
      href: "/",
      icon: <HomeIcon />,
      clickedIcon: <HomeIcon />,
    },
    {
      href: "/search",
      icon: <SearchIcon />,
      clickedIcon: <SearchFillIcon />,
    },
    {
      href: "/new",
      icon: <NewIcon />,
      clickedIcon: <NewFillIcon />,
    },
  ];
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className="w-full h-20 bg-gray-100 flex items-center justify-between px-10">
      <Link href="/">
        <div className="text-2xl font-bold text-orange-500">mudigram</div>
      </Link>
      <nav>
        <ul className="flex gap-3 items-center p-4">
          {menu.map((item) => (
            <li key={item.href} className="flex items-center">
              <Link href={item.href}>
                {pathName === item.href ? item.icon : item.icon}
              </Link>
            </li>
          ))}
          <ColorButton text="Sign In" onClick={() => {}} />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
