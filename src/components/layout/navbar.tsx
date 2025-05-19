"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: {
  id: number;
  title: string;
  href: string;
  description: string;
}[] = [
  {
    id: 1,
    title: "Home",
    href: "/",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    id: 2,
    title: "About Us",
    href: "/about",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    id: 3,
    title: "Contact Us",
    href: "/contact",
    description:
      "For sighted users to preview content available behind a link.",
  },
];

function Navbar() {
  return (
    <div className="grid h-16 w-full items-center justify-center border-b">
      <Link
        href={"/"}
        className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
      >
        KMR INTERNATIONAL
      </Link>
    </div>
  );
}

function NavMenu() {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          {components.map((item) => (
            <Link key={item.id} href={item.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  "hover:text-[#ff6a28] focus:text-[#ff6a28]",
                  navigationMenuTriggerStyle(),
                  pathname.match(item.href)
                    ? "bg-accent text-[#ff6a28]"
                    : "text-black"
                )}
              >
                {item.title}
              </NavigationMenuLink>
            </Link>
          ))}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none",
            className
          )}
          {...props}
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export { Navbar, NavMenu };
