import { Experience } from "../experience"

export function Experiences() {
  return (
    <div className="flex flex-col items-start justify-start bg-foreground px-4 py-10 lg:flex-row lg:px-20 lg:py-14">
      <div className="lg:centered flex flex-col items-center justify-center gap-5 lg:px-20">
        <h2 className="display-text-m md:display-text flex items-center justify-center gap-4 py-5 text-background">
          <span>My</span>
          <span className="font-extrabold">Experience</span>
        </h2>
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
  )
}
