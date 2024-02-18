import Image from "next/image"
import { useTheme } from "next-themes"

export function AboutMe() {
  const { theme } = useTheme()
  return (
    <div
      id="about-me"
      className="lg:centered flex flex-col items-start justify-start px-4 py-10 lg:flex-row lg:items-center lg:justify-center lg:px-20 lg:py-14"
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
          <div className="display-text-m md:display-text flex w-full items-center justify-start gap-4 py-5 text-foreground">
            <span>About</span>
            <span className="font-extrabold">Me</span>
          </div>
          <div
            className={`paragraph2 flex flex-col items-start justify-center gap-5 ${
              theme == "dark" ? "text-zinc-200" : "text-zinc-500"
            }`}
          >
            <div>
              I&apos;m a passionate, self-proclaimed designer who specializes in
              full stack development (React.js & Node.js). I am very
              enthusiastic about bringing the technical and visual aspects of
              digital products to life. User experience, pixel perfect design,
              and writing clear, readable, highly performant code matters to me.
            </div>
            <div>
              I began my journey as a web developer in 2015, and since then,
              I&apos;ve continued to grow and evolve as a developer, taking on
              new challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I&apos;m building cutting-edge web
              applications using modern technologies such as Next.js,
              TypeScript, Nestjs, Tailwindcss, Supabase and much more.
            </div>
            <div>
              When I&apos;m not in full-on developer mode, you can find me
              hovering around on twitter or on indie hacker, witnessing the
              journey of early startups or enjoying some free time. You can
              follow me on Twitter where I share tech-related bites and build in
              public, or you can follow me on GitHub.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
