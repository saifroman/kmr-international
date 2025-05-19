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
} from "@/components/ui/navigation-menu";

const components: {
  id: number;
  title: string;
  href: string;
  hmatch: RegExp | string;
  description: string;
}[] = [
  {
    id: 1,
    title: "Home",
    href: "/",
    hmatch: /^[/]$/,
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    id: 2,
    title: "About Us",
    href: "/about",
    hmatch: "/about",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    id: 3,
    title: "Contact Us",
    href: "/contact",
    hmatch: "/contact",
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
                  "group bg-background hover:bg-accent focus:bg-accent data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-[#ff6a28] focus:text-[#ff6a28] focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                  {
                    "text-[#ff6a28] focus:text-[#ff6a28]": pathname.match(
                      item.hmatch
                    ),
                  }
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
