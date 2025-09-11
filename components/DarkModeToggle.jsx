"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <Button
      onClick={() => setDark(!dark)}
      className="  rounded-lg w-10 h-10 bg-transparent cursor-pointer group"
    >
      {dark ? (
        <Moon className="text-white group-hover:text-black" />
      ) : (
        <Sun className="text-black group-hover:text-white" />
      )}
    </Button>
  );
}
