"use client"

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"

// import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white">
      <div className="container flex h-16 items-center space-x-4 md:justify-between md:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Button className="group hidden md:flex">
              <span className="button-text mr-2 font-semibold">Resume</span>
              <Icons.download className="hidden group-active:inline" />
              <Icons.download hover className="inline group-active:hidden" />
            </Button>
            <div className="flex items-center justify-center md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Icons.menu className="size-7" />
                  <span className="sr-only">Menu</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <nav className="flex flex-col items-center gap-6 py-6">
                    {siteConfig.mainNav?.map(
                      (item, index) =>
                        item.href && (
                          <Link
                            key={index}
                            href={item.href}
                            className={cn(
                              "heading5 flex items-center font-semibold text-black hover:text-neutral hover:underline"
                            )}
                          >
                            {item.title}
                          </Link>
                        )
                    )}
                  </nav>
                  <Button className="group mt-3">
                    <span className="button-text mr-2 font-semibold">
                      Resume
                    </span>
                    <Icons.download className="hidden group-active:inline" />
                    <Icons.download
                      hover
                      className="inline group-active:hidden"
                    />
                  </Button>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* <ThemeToggle /> */}
          </nav>
        </div>
      </div>
    </header>
  )
}
