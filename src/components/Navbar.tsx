"use client";

import Link from "next/link";
import React from "react";
import HomeFillIcon from "./ui/icons/HomeFillIcon";
import HomeIcon from "./ui/icons/HomeIcon";
import NewFillIcon from "./ui/icons/NewFillIcon";
import NewIcon from "./ui/icons/NewIcon";
import SearchFillIcon from "./ui/icons/SearchFillIcon";
import SearchIcon from "./ui/icons/SearchIcon";
import { usePathname } from "next/navigation";
import ColorButton from "./ui/ColorButton";
import { signIn, signOut, useSession } from "next-auth/react";
import Avatar from "./Avatar";

type Props = {};

const Navbar = (props: Props) => {
  const menu = [
    {
      href: "/",
      icon: <HomeIcon />,
      clickedIcon: <HomeFillIcon />,
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

  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="w-full h-20 bg-gray-100 flex items-center justify-between px-[100px]">
      <Link href="/">
        <div className="text-2xl font-bold text-orange-500">mudigram</div>
      </Link>
      <nav>
        <ul className="flex gap-3 items-center p-4">
          {menu.map((item) => (
            <li key={item.href} className="flex items-center">
              <Link href={item.href}>
                {pathName === item.href ? item.clickedIcon : item.icon}
              </Link>
            </li>
          ))}
          {user && (
            <li>
              <Link href={`/user/${user.username}`}>
                <Avatar image={user.image} size="small" hightlight />
              </Link>
            </li>
          )}
          <li>
            {session ? (
              <ColorButton text="Sign Out" onClick={() => signOut()} />
            ) : (
              // 여기서 사용하는 signOut(), signIn() 함수는 sessionProvider에서 제공해주는 것
              <ColorButton
                text="Sign In"
                onClick={() => signIn()}
                size={"small"}
              />
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
