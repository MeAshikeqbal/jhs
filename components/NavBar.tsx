"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation";
import React, { useState, } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export function Navbar({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();

  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    {
      href: `/`,
      label: 'Home',
      active: pathname === `/`,
    },
    {
      href: `/notice`,
      label: 'Notice',
      active: pathname === `/notice`,
    },
    {
      href: `/hm-dask`,
      label: 'HM Dask',
      active: pathname === `/hm-dask`,
    },
    {
      href: `/teachers`,
      label: 'Teachers',
      active: pathname === `/teachers`,
    },
    {
      href: `/gallery`,
      label: 'Gallery',
      active: pathname === `/gallery`,
    },
    {
      href: `/alumni`,
      label: 'Alumni',
      active: pathname === `/alumni`,
    },
    {
      href: `/contact-us`,
      label: 'Contact Us',
      active: pathname === `/contact-us`,
    },
    {
      href: `/academic-calendar`,
      label: 'Academic Calendar',
      active: pathname === `/academic-calendar`,
    },
    {
      href: `/events`,
      label: 'Events',
      active: pathname === `/events`,
    },
    {
      href: `/about-us`,
      label: 'About Us',
      active: pathname === `/about-us`,
    },
  ];

  return (
    <div className=" sticky top-0 z-50">
      <div className="!visible flex items-center md:hidden bg-blue-950 h-14">

        <Button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className=" float-left flex items-center text-sm font-medium text-white bg-blue-950 "
        >
          <Menu 
         className="w-8 h-8 ml-4 text-blue-100"
          />
          <span className="ml-2">Menu</span>
          {isOpen && (
            <div className=" absolute right-0 z-10 flex flex-col items-start py-2 bg-blue-950 rounded-md shadow-lg w-full h- top-0 mt-0">
              <X className="w-8 h-8 ml-4 text-blue-100" />
              <div className="flex flex-col items-start p-4">
                {routes.map((route) => (
                  <Link key={route.href} href={route.href}
                    className={cn(
                      "pb-2 text-sm text-blue-100 hover:text-white",
                      route.active ? 'text-white ' : 'text-muted-foreground text-blue-200'
                    )}
                  >
                    {route.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Button>
      </div>
      <div className="bg-blue-950 z-10 !visible hidden md:block ">

        <nav
          className='flex flex-col h-16 items-center justify-between w-full px-4 py-4 mx-auto space-y-4 text-sm font-medium text-center sm:px-6 sm:flex-row sm:space-y-0 sm:space-x-4 z-10 max-w-6xl'
        >
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                'text-sm font-medium transition-colors text-blue-100 hover:text-white',
                route.active ? 'text-white ' : 'text-muted-foreground text-blue-200'
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>

      </div>

    </div>

  )
};