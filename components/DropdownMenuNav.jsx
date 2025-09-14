import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  cuisine,
  healthyDiet,
  holidays,
  meatSeaFood,
  popular,
  recipes,
  seasonal,
} from "./RecipesArr";
import Link from "next/link";
import { MenuIcon, X } from "lucide-react";
import { useState } from "react";

const DropdownMenuNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{open ? <X /> : <MenuIcon />}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className={"cursor-pointer"}>
              Recipes
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              {recipes &&
                recipes.map((item) => (
                  <Link
                    href={item.href}
                    key={item.title}
                    className="hover:bg-amber-200 p-2 hover:text-black"
                  >
                    {item.title}
                  </Link>
                ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className={"cursor-pointer"}>
              Popular
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              {popular &&
                popular.map((item) => (
                  <Link
                    href={item.href}
                    key={item.title}
                    className="hover:bg-amber-200 p-2 hover:text-black"
                  >
                    {item.title}
                  </Link>
                ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className={"cursor-pointer"}>
              Meat & Seafood
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              {meatSeaFood &&
                meatSeaFood.map((item) => (
                  <Link
                    href={item.href}
                    key={item.title}
                    className="hover:bg-amber-200 p-2 hover:text-black"
                  >
                    {item.title}
                  </Link>
                ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className={"cursor-pointer"}>
              Healthy & Diet
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              {healthyDiet &&
                healthyDiet.map((item) => (
                  <Link
                    href={item.href}
                    key={item.title}
                    className="hover:bg-amber-200 p-2 hover:text-black"
                  >
                    {item.title}
                  </Link>
                ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className={"cursor-pointer"}>
              Holidays
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              {holidays &&
                holidays.map((item) => (
                  <Link
                    href={item.href}
                    key={item.title}
                    className="hover:bg-amber-200 p-2 hover:text-black"
                  >
                    {item.title}
                  </Link>
                ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className={"cursor-pointer"}>
              Cuisine
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              {cuisine &&
                cuisine.map((item) => (
                  <Link
                    href={item.href}
                    key={item.title}
                    className="hover:bg-amber-200 p-2 hover:text-black"
                  >
                    {item.title}
                  </Link>
                ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className={"cursor-pointer"}>
              Seasonal
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              {seasonal &&
                seasonal.map((item) => (
                  <Link
                    href={item.href}
                    key={item.title}
                    className="hover:bg-amber-200 p-2 hover:text-black"
                  >
                    {item.title}
                  </Link>
                ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuNav;
