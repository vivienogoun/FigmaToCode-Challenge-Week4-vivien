import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"

import { Logo } from "../logo"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex w-2/3 justify-between gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Logo from="header" />
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 lg:flex">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "heading5 flex items-center font-semibold text-foreground hover:text-neutral hover:underline",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
