"use client";

import DarkModeToggle from "@/components/DarkModeToggle";
import DropdownMenuNav from "@/components/DropdownMenuNav";
import Logo from "@/components/Logo";
import { NavMenu } from "@/components/NavMenu";
import { Button } from "@/components/ui/button";
import { Bookmark, Search, User } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Header = () => {
  const [current, setCurrent] = useState(false);
  const router = useRouter();
  return (
    <header className="flex flex-col items-center p-2 justify-center relative z-50">
      <div className="hidden lg:block">
        <div className="flex justify-center gap-10 p-2">
          <Logo />
          <div className="btns flex gap-1">
            <Button
              onClick={() => router.push("/search")}
              className="  rounded-lg w-10 h-10 bg-transparent cursor-pointer group"
            >
              <Search className="text-black group-hover:text-white dark:text-white group-hover:dark:text-black" />
            </Button>
            <Button
              onClick={() => router.push("/saved")}
              className="  rounded-lg w-10 h-10 bg-transparent cursor-pointer group"
            >
              <Bookmark className="text-black group-hover:text-white dark:text-white group-hover:dark:text-black" />
            </Button>

            {current ? (
              <Button
                onClick={() => router.push("/dashboard")}
                className="  rounded-lg w-10 h-10 bg-transparent cursor-pointer group"
              >
                <User className="text-black group-hover:text-white dark:text-white group-hover:dark:text-black" />
              </Button>
            ) : (
              <Button
                onClick={() => router.push("/login")}
                className="  rounded-lg w-10 h-10 bg-transparent cursor-pointer group"
              >
                <span className="text-black group-hover:text-white dark:text-white group-hover:dark:text-black">
                  Login
                </span>
              </Button>
            )}
            <DarkModeToggle />
          </div>
        </div>
        <NavMenu />
      </div>
      <div className="flex justify-between items-center lg:hidden w-full">
        <div className="flex gap-2 ">
          <DropdownMenuNav />
          <Logo />
        </div>
        <div className="btns flex gap-1">
          <Button
            onClick={() => router.push("/search")}
            className="  rounded-lg w-10 h-10 bg-transparent cursor-pointer group"
          >
            <Search className="text-black group-hover:text-white dark:text-white group-hover:dark:text-black" />
          </Button>
          <Button
            onClick={() => router.push("/saved")}
            className="  rounded-lg w-10 h-10 bg-transparent cursor-pointer group"
          >
            <Bookmark className="text-black group-hover:text-white dark:text-white group-hover:dark:text-black" />
          </Button>

          {current ? (
            <Button
              onClick={() => router.push("/dashboard")}
              className="  rounded-lg w-10 h-10 bg-transparent cursor-pointer group"
            >
              <User className="text-black group-hover:text-white dark:text-white group-hover:dark:text-black" />
            </Button>
          ) : (
            <Button
              onClick={() => router.push("/login")}
              className="  rounded-lg w-10 h-10 bg-transparent cursor-pointer group"
            >
              <span className="text-black group-hover:text-white dark:text-white group-hover:dark:text-black">
                Login
              </span>
            </Button>
          )}
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
