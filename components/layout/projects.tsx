import { projects } from "@/utils/data"

import { Project } from "../project"

export function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col items-start justify-start bg-foreground px-4 py-10 lg:px-10 lg:py-14 xl:px-20"
    >
      <div className="md:centered flex flex-col items-start justify-start gap-5 lg:px-10 xl:px-20">
        <div className="display-text-m md:display-text flex w-full items-center justify-center gap-4 py-5 text-background">
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
  )
}
