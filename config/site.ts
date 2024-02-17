export type SiteConfig = typeof siteConfig

export const siteConfig = {
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
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
