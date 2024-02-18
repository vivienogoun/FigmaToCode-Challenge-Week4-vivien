"use client"

import { useState } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"

import { SkillEnum } from "@/types/skill"
import { projects, testimonials } from "@/lib/data"
// import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Experience } from "@/components/experience"
import { Project } from "@/components/project"
import { Skill } from "@/components/skill"
import { SocialButtons } from "@/components/social-buttons"
import { Testimonial } from "@/components/testimonial"

export default function IndexPage() {
  // const isDesktop = useMediaQuery("(min-width: 1024px)")
  const { theme } = useTheme()
  const [formdata, setFormdata] = useState({
    fullname: "",
    email: "",
    website: "",
    message: "",
  })
  const [error, setError] = useState({
    email: false,
    message: false,
  })
  const [disabled, setDisabled] = useState(false)
  const handleClick = () => {
    setError({
      email: false,
      message: false,
    })
    if (formdata.email.length == 0) {
      setError({ email: true, message: false })
    } else if (formdata.message.length == 0) {
      setError({ email: false, message: true })
    } else {
      setDisabled(true)
    }
  }
  const handleReset = () => {
    setFormdata({
      fullname: "",
      email: "",
      website: "",
      message: "",
    })
    setDisabled(false)
  }

  return (
    <section className="container grid items-center gap-6 px-0 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-start justify-start px-4 py-10 md:flex-row md:py-14">
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
            className="hidden md:block xl:hidden"
          />
          <Image
            alt=""
            src={"/boy-desktop-c.png"}
            priority
            width={608}
            height={596}
            className="hidden xl:block"
          />
          <div className="flex flex-col items-start justify-start gap-8 md:gap-20 md:py-5">
            <div className="flex flex-col items-start justify-start gap-3 md:gap-5">
              <div className="display-text-m xl:display-text flex items-start justify-start gap-4 text-foreground">
                <span>Hello I&apos;am</span>
                <span className="font-extrabold ">Vivien Ogoun.</span>
              </div>
              <div className="flex items-start justify-start gap-4 font-extrabold">
                <span className="display-text-m xl:display-text text-foreground">
                  Fullstack
                </span>
                <span className="heading3 xl:display-text outlined">
                  Developer
                </span>
              </div>
              <div className="display-text-m xl:display-text flex items-start justify-start gap-4 text-foreground">
                <span>Based In</span>
                <span className="font-extrabold">Benin.</span>
              </div>
            </div>
            <div className="paragraph2 text-zinc-500">
              I&apos;m Vivien Ogoun. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry&apos;s standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to specimen
              book.
            </div>
            <SocialButtons className="-bottom-6 md:absolute md:gap-8" />
          </div>
        </div>
      </div>
      <div
        id="skills"
        className="flex flex-col items-start justify-start px-4 py-10 lg:items-center lg:justify-center lg:px-12 lg:py-14"
      >
        <div className="flex w-full flex-col items-start justify-start gap-5">
          <div className="display-text-m lg:display-text flex w-full items-center justify-center gap-4 py-5 text-foreground">
            <span>My</span>
            <span className="font-extrabold">Skills</span>
          </div>
          <div className="hidden w-full flex-col items-center justify-start py-5 lg:flex">
            <div className="flex w-full items-center justify-between gap-10 py-5">
              <Skill name={SkillEnum.typescript} />
              <Skill name={SkillEnum.javascript} />
              <Skill name={SkillEnum.react} />
              <Skill name={SkillEnum.nodejs} />
              <Skill name={SkillEnum.figma} />
            </div>
            <div className="flex w-full items-center justify-between gap-10 py-5">
              <Skill name={SkillEnum.git} />
              <Skill name={SkillEnum.express} />
              <Skill name={SkillEnum.sass} />
              <Skill name={SkillEnum.mongodb} />
              <Skill name={SkillEnum.socket} />
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-5 lg:hidden">
            <div className="flex w-full items-center justify-center gap-5">
              <Skill name={SkillEnum.typescript} />
              <Skill name={SkillEnum.javascript} />
            </div>
            <div className="flex w-full items-center justify-center gap-5">
              <Skill name={SkillEnum.react} />
              <Skill name={SkillEnum.nodejs} />
            </div>
            <div className="flex w-full items-center justify-center gap-5">
              <Skill name={SkillEnum.figma} />
              <Skill name={SkillEnum.git} />
            </div>
            <div className="flex w-full items-center justify-center gap-5">
              <Skill name={SkillEnum.express} />
              <Skill name={SkillEnum.sass} />
            </div>
            <div className="flex w-full items-center justify-center gap-5">
              <Skill name={SkillEnum.mongodb} />
              <Skill name={SkillEnum.socket} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start bg-foreground px-4 py-10 lg:flex-row lg:px-20 lg:py-14">
        <div className="flex flex-col items-center justify-center gap-5 lg:px-8">
          <div className="display-text-m lg:display-text flex items-center justify-center gap-4 py-5 text-background">
            <span>My</span>
            <span className="font-extrabold">Experience</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <Experience
              description="As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide."
              image="/google.png"
              period="Nov 2019 - Present"
              title="Lead Software Engineer at Google"
            />
            <Experience
              description="At Youtube, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability."
              image="/youtube.png"
              period="Jan 2017 - Oct 2019"
              title="Software Engineer at Youtube"
            />
            <Experience
              description="During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team."
              image="/apple.png"
              period="Jan 2016 - Dec 2017"
              title="Junior Software Engineer at Apple"
            />
          </div>
        </div>
      </div>
      <div
        id="about-me"
        className="flex flex-col items-start justify-start px-4 py-10 lg:flex-row lg:items-center lg:justify-center lg:px-20 lg:py-14"
      >
        <div className="flex flex-col items-center justify-start gap-5 lg:flex-row lg:justify-between lg:gap-16">
          <Image
            alt=""
            src={"/boy2.png"}
            width={343}
            height={374}
            className="block lg:hidden"
          />
          <Image
            alt=""
            src={"/boy2-desktop.png"}
            width={530}
            height={572}
            className="hidden lg:block"
          />
          <div className="flex flex-col items-start justify-start gap-5 lg:w-[65%]">
            <div className="display-text-m lg:display-text flex w-full items-center justify-start gap-4 py-5 text-foreground">
              <span>About</span>
              <span className="font-extrabold">Me</span>
            </div>
            <div
              className={`paragraph2 flex flex-col items-start justify-center gap-5 ${
                theme == "dark" ? "text-zinc-200" : "text-zinc-500"
              }`}
            >
              <div>
                I&apos;m a passionate, self-proclaimed designer who specializes
                in full stack development (React.js & Node.js). I am very
                enthusiastic about bringing the technical and visual aspects of
                digital products to life. User experience, pixel perfect design,
                and writing clear, readable, highly performant code matters to
                me.
              </div>
              <div>
                I began my journey as a web developer in 2015, and since then,
                I&apos;ve continued to grow and evolve as a developer, taking on
                new challenges and learning the latest technologies along the
                way. Now, in my early thirties, 7 years after starting my web
                development journey, I&apos;m building cutting-edge web
                applications using modern technologies such as Next.js,
                TypeScript, Nestjs, Tailwindcss, Supabase and much more.
              </div>
              <div>
                When I&apos;m not in full-on developer mode, you can find me
                hovering around on twitter or on indie hacker, witnessing the
                journey of early startups or enjoying some free time. You can
                follow me on Twitter where I share tech-related bites and build
                in public, or you can follow me on GitHub.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="projects"
        className="flex flex-col items-start justify-start bg-foreground px-4 py-10 lg:px-20 lg:py-14"
      >
        <div className="flex flex-col items-start justify-start gap-5">
          <div className="display-text-m lg:display-text flex w-full items-center justify-center gap-4 py-5 text-background">
            <span>My</span>
            <span className="font-extrabold">Projects</span>
          </div>
          <div className="flex flex-col items-start justify-start gap-7">
            {projects.map((project, index) => (
              <Project
                key={index}
                description={project.description}
                image={{
                  desktop: project.image.desktop,
                  mobile: project.image.mobile,
                }}
                link={project.link}
                title={project.title}
                num={index + 1}
                reverse={index % 2 != 0}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start px-4 py-10 lg:flex-row lg:px-20 lg:py-14">
        <div className="flex flex-col items-start justify-start lg:items-center lg:justify-center">
          <div className="display-text-m lg:display-text flex w-full items-center justify-center gap-4 py-5 text-foreground">
            <span>My</span>
            <span className="font-extrabold">Testimonials</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-10 p-5 lg:flex-row lg:justify-between lg:px-6 lg:py-10">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                content={testimonial.content}
                image={testimonial.image}
                name={testimonial.name}
                role={testimonial.role}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        id="contact-me"
        className="flex flex-col items-start justify-start px-4 py-10 lg:px-12 lg:py-14"
      >
        <div className="flex flex-col items-start justify-start lg:items-center lg:justify-center">
          <div className="display-text-m lg:display-text flex w-full items-center justify-center gap-4 py-5 text-foreground">
            <span>Contact</span>
            <span className="font-extrabold">Me</span>
          </div>
          <div className="flex flex-col items-start justify-start lg:flex-row lg:items-center lg:justify-between lg:gap-20 lg:px-8">
            <div className="flex w-full flex-col items-start justify-center gap-5 py-5">
              <Input
                type="text"
                placeholder="Your name"
                value={formdata.fullname}
                disabled={disabled}
                onChange={(e) =>
                  setFormdata({
                    ...formdata,
                    fullname: e.target.value,
                  })
                }
              />
              <Input
                type="email"
                placeholder="Email"
                variant={error.email ? "error" : "default"}
                error={error.email}
                disabled={disabled}
                value={formdata.email}
                onChange={(e) =>
                  setFormdata({
                    ...formdata,
                    email: e.target.value,
                  })
                }
              />
              <Input
                type="url"
                placeholder="Your website (if exists)"
                disabled={disabled}
                value={formdata.website}
                onChange={(e) =>
                  setFormdata({
                    ...formdata,
                    website: e.target.value,
                  })
                }
              />
              <Textarea
                placeholder="How can i help ?"
                disabled={disabled}
                value={formdata.message}
                variant={error.message ? "error" : "default"}
                error={error.message}
                onChange={(e) =>
                  setFormdata({
                    ...formdata,
                    message: e.target.value,
                  })
                }
              />
              <div className="flex w-full items-center justify-between">
                {disabled ? (
                  <Button onClick={handleReset}>Reset</Button>
                ) : (
                  <Button onClick={handleClick} disabled={disabled}>
                    Get In Touch
                  </Button>
                )}
                <SocialButtons className="hidden lg:flex" />
              </div>
              <SocialButtons className="flex lg:hidden" />
            </div>
            <div className="flex flex-col items-start justify-center gap-8 py-5">
              <div className="flex flex-col items-start justify-center gap-3">
                <div className="flex items-start justify-start gap-4">
                  <span className="display-text-m lg:display-text font-extrabold text-foreground">
                    Let&apos;s
                  </span>
                  <span className="heading3 lg:display-text outlined font-extrabold">
                    talk
                  </span>
                  <span className="display-text-m lg:display-text font-extrabold text-foreground">
                    for
                  </span>
                </div>
                <div className="display-text-m lg:display-text font-extrabold text-foreground">
                  Something special
                </div>
              </div>
              <div
                className={`paragraph2 ${
                  theme == "dark" ? "text-zinc-200" : "text-zinc-500"
                }`}
              >
                I seek to push the limits of creativity to create high-engaging,
                user-friendly, and memorable interactive experiences.
              </div>
              <div className="heading5 lg:heading3 flex flex-col items-start justify-center gap-3 font-bold text-foreground lg:font-semibold">
                <div>vivienogoun1@gmail.com</div>
                <div>9876543210</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
