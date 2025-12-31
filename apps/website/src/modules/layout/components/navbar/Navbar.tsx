"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@bl4ck4rm-projects/ui-shared';
import { Link } from '@tanstack/react-router';

export type NavbarItem = {
  type: "link" | "anchor";
  label: string;
  to?: string;
  href?: string;
};

type NavbarProps = {
  items: NavbarItem[];
};

export function Navbar({ items }: NavbarProps) {
  return (
    <div className='flex justify-center w-full mt-4'>
      <NavigationMenu>
        <NavigationMenuList className='gap-8'>
          {items.map((item, idx) => (
            <NavigationMenuItem key={idx}>
              <NavigationMenuLink asChild>
                {item.type === "link" && item.to ? (
                  <Link to={item.to}>{item.label}</Link>
                ) : item.type === "anchor" && item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                ) : null}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}