import { ProjectType } from "@/types/project"
import { TestimonialType } from "@/types/testimonial"

const projects: ProjectType[] = [
  {
    description:
      "I'm Vivien Ogoun. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    image: {
      desktop: "/doctor-desktop.png",
      mobile: "/doctor-mobile.jpeg",
    },
    link: "https://figma-to-code-challenge-week1-vivienogoun.vercel.app/",
    title: "Doctor+ Medical Landing Page",
  },
  {
    description:
      "I'm Vivien Ogoun. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    image: {
      desktop: "/ecommerce-desktop.png",
      mobile: "/ecommerce-mobile.jpeg",
    },
    link: "https://figma-to-code-challenge-week2-vivien.vercel.app/",
    title: "E-commerce Minimal Template",
  },
  {
    description:
      "I'm Vivien Ogoun. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    image: {
      desktop: "/boy2.png",
      mobile: "/boy2.png",
    },
    link: "#",
    title: "Illustration Based Portfolio Website",
  },
]

const testimonials: TestimonialType[] = [
  {
    content:
      "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
    image: "/testimonial-boy.png",
    name: "Evren Shah",
    role: "Designer",
  },
  {
    content:
      "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
    image: "/testimonial-girl.png",
    name: "Flora sheen",
    role: "Designer",
  },
  {
    content:
      "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
    image: "/testimonial-boy.png",
    name: "Evren Shah",
    role: "Designer",
  },
]

export { projects, testimonials }
