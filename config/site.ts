type SiteConfig = {
  name: string
  description: string
  mainNav: {
    title: string
    href: string
  }[]
}

export const siteConfig: SiteConfig = {
  name: "Personal",
  description: "Figma To Code Challenge Week 4 by Vivien Ogoun.",
  mainNav: [
    {
      title: "About Me",
      href: "#about-me",
    },
    {
      title: "Skills",
      href: "#skills",
    },
    {
      title: "Projects",
      href: "#projects",
    },
    {
      title: "Contact Me",
      href: "#contact-me",
    },
  ],
}
