"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"

import { AboutMe } from "@/components/layout/about-me"
import { ContactMe } from "@/components/layout/contact-me"
import { Experiences } from "@/components/layout/experiences"
import { Hero } from "@/components/layout/hero"
import { Projects } from "@/components/layout/projects"
import { Skills } from "@/components/layout/skills"
import { Testimonials } from "@/components/layout/testimonials"

export default function IndexPage() {
  const { setTheme } = useTheme()
  useEffect(() => {
    setTheme(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    )
  }, [setTheme])

  return (
    <section className="grid items-center gap-6 px-0 pb-8 pt-6 md:py-10">
      <Hero />
      <Skills />
      <Experiences />
      <AboutMe />
      <Projects />
      <Testimonials />
      <ContactMe />
    </section>
  )
}
