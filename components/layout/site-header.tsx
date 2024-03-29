"use client"

import Link from "next/link"
import { cn } from "@/utils/shadcn"
import { useTheme } from "next-themes"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

import { MainNav } from "./main-nav"

export function SiteHeader() {
  const { theme } = useTheme()
  return (
    <header className="sticky top-0 z-40 w-full bg-background">
      <div className="md:centered flex h-16 items-center space-x-4 px-2 md:justify-between md:space-x-0 md:px-10">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Button className="group hidden lg:flex">
              <span className="button-text mr-2 font-semibold">Resume</span>
              <Icons.download
                hover={theme == "dark" ? true : false}
                className="hidden group-active:inline"
              />
              <Icons.download
                hover={theme == "dark" ? false : true}
                className="inline group-active:hidden"
              />
            </Button>
            <div className="flex items-center justify-center lg:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger className="focus-visible:outline-none">
                  <Icons.menu className="mr-2 size-7 text-foreground" />
                  <span className="sr-only">Menu</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <nav className="flex flex-col items-center gap-6 py-6">
                    {siteConfig.mainNav?.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className={cn(
                          "heading5 flex items-center font-semibold text-foreground hover:text-neutral hover:underline"
                        )}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </nav>
                  <Button className="group mt-3">
                    <span className="button-text mr-2 font-semibold">
                      Resume
                    </span>
                    <Icons.download
                      hover={theme == "dark" ? true : false}
                      className="hidden group-active:inline"
                    />
                    <Icons.download
                      hover={theme == "dark" ? false : true}
                      className="inline group-active:hidden"
                    />
                  </Button>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
