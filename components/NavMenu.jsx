"use client";
import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  cuisine,
  healthyDiet,
  holidays,
  meatSeaFood,
  popular,
  recipes,
  seasonal,
} from "./RecipesArr";

export function NavMenu() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={"cursor-pointer uppercase"}>
            Recipes
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" w-max">
              {recipes.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                ></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className={"cursor-pointer uppercase"}>
            Popular
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" w-max">
              {popular.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                ></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className={"cursor-pointer uppercase"}>
            Meat & Seafood
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" w-max">
              {meatSeaFood.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                ></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className={"cursor-pointer uppercase"}>
            Healthy & Diet
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" w-max">
              {healthyDiet.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                ></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className={"cursor-pointer uppercase"}>
            Holidays
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" w-max">
              {holidays.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                ></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className={"cursor-pointer uppercase"}>
            Cuisine
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" w-max">
              {cuisine.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                ></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className={"cursor-pointer uppercase"}>
            Seasonal
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" w-max">
              {seasonal.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                ></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

// Sadə JS versiyası
function ListItem({ title, children, href, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
