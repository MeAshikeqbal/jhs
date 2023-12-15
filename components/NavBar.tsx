"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation";

export function Navbar({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    const pathname = usePathname();
    const params = useParams();

    const routes = [
        {
            href: `/`,
            label: 'Home',
            active: pathname === `/`,
        },
        {
            href: `/gallery`,
            label: 'Gallery',
            active: pathname === `/gallery`,
        },
        {
            href: `/contact-us`,
            label: 'Contact Us',
            active: pathname === `/contact-us`,
        },
        {
          href:`/teachers`,
          label:'Teachers',
          active:pathname === `/teachers`,
        },
        {
          href:`/alumni`,
          label:'Alumni',
          active:pathname === `/alumni`,
        },
        {
          href:`/notice`,
          label:'Notice',
          active:pathname === `/notice`,
        },
        {
          href:`/admission`,
          label:'Admission',
          active:pathname === `/admission`,
        },
        {
          href:`/results`,
          label:'Results',
          active:pathname === `/results`,
        },
        {
          href:`/academic-calendar`,
          label:'Academic Calendar',
          active:pathname === `/academic-calendar`,
        },
        {
          href: `/about-us`,
          label: 'About Us',
          active: pathname === `/about-us`,
      },
    ];

    return (
      <div className=" bg-blue-950">
        <nav
            className='flex flex-col items-center justify-between w-full px-4 py-4 mx-auto space-y-4 text-sm font-medium text-center sm:px-6 sm:flex-row sm:space-y-0 sm:space-x-4 z-10 sticky top-0 max-w-6xl'
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
    )
};