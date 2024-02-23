"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"

import { SocialButtons } from "../social-buttons"

export const Hero = () => {
  const { theme } = useTheme()
  const timer = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const roles = document.getElementById("roles")
    roles?.classList.add("typingtext")
    const words = ["Frontend", "Backend", "Mobile"]
    let wordIndex = 0
    let charIndex = 1
    let isDeleting = false

    const typingRoles = () => {
      const currentWord = words[wordIndex]
      const currentChar = currentWord.substring(0, charIndex)
      roles!.textContent = currentChar
      roles?.classList.add("stop-blinking")

      if (!isDeleting && charIndex < currentWord.length) {
        // type the next character
        charIndex++
        timer.current = setTimeout(typingRoles, 200)
      } else if (isDeleting && charIndex > 0) {
        // remove the previous character
        charIndex--
        timer.current = setTimeout(typingRoles, 100)
      } else {
        // if word is deleted switch to the next word
        isDeleting = !isDeleting
        roles?.classList.remove("stop-blinking")
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex
        timer.current = setTimeout(typingRoles, 1200)
      }
    }
    typingRoles()
    return () => clearTimeout(timer.current)
  }, [])

  return (
    <div className="lg:centered flex flex-col items-start justify-start px-4 py-10 md:flex-row md:py-14">
      <div className="flex flex-col items-start justify-start gap-12 md:relative md:flex-row-reverse md:items-center md:justify-between md:px-8">
        <Image
          alt=""
          src={"/boy.png"}
          priority
          width={343}
          height={332}
          className="block md:hidden"
        />
        <Image
          alt=""
          src={"/boy-desktop-md.png"}
          priority
          width={497}
          height={596}
          className="hidden w-[43.5%] grow md:block xl:hidden"
        />
        <Image
          alt=""
          src={"/boy-desktop-c.png"}
          priority
          width={608}
          height={596}
          className="hidden w-[43.5%] grow xl:block"
        />
        <div className="flex flex-col items-start justify-start gap-8 md:gap-20 md:py-5">
          <div className="flex flex-col items-start justify-start gap-3 md:gap-5">
            <h1 className="display-text-m lg:display-text-lg xl:display-text flex items-start justify-start gap-4 text-foreground">
              <span className="relative">Hello I&apos;m</span>
              <span className="font-extrabold ">Vivien Ogoun.</span>
            </h1>
            <h2 className="flex items-start justify-start gap-4 font-extrabold">
              <span>
                <span className="text-[1px]">.</span>
                <span
                  id="roles"
                  className="display-text-m lg:display-text-lg xl:display-text relative text-foreground"
                ></span>
              </span>
              <span className="heading3 lg:display-text-lg xl:display-text outlined">
                Developer
              </span>
            </h2>
            <h2 className="display-text-m lg:display-text-lg xl:display-text flex items-start justify-start gap-4 text-foreground">
              <span>Based In</span>
              <span className="font-extrabold">Benin.</span>
            </h2>
          </div>
          <p
            className={`paragraph2 md:mb-4 ${
              theme == "dark" ? "text-zinc-300" : "text-zinc-500"
            }`}
          >
            I&apos;m Vivien Ogoun. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry&apos;s standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to specimen
            book.
          </p>
          <SocialButtons className="-bottom-6 md:absolute md:gap-8" />
        </div>
      </div>
    </div>
  )
}
