"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/events", label: "Events" },
  { href: "/resources", label: "Resources" },
  { href: "/exam-prep", label: "Exam Prep" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-border bg-background/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold text-primary">
          QAC
        </Link>

        <NavigationMenu className="max-w-none flex-none">
          <NavigationMenuList className="gap-1">
            {navLinks.map(({ href, label }) => (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink
                  render={<Link href={href} />}
                  active={pathname === href}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    pathname === href && "text-primary"
                  )}
                >
                  {label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
