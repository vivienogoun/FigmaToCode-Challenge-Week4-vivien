import Image from "next/image"
import Link from "next/link"
import { defaultIconStyle, hoverIconStyle } from "@/utils/constants"

import { ProjectType } from "@/types/project"

import { Icons } from "./icons"

type ProjectProps = ProjectType & {
  reverse?: boolean
}

const Project = ({
  description,
  image,
  title,
  num,
  link,
  reverse,
}: ProjectProps) => {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-center gap-7 md:justify-start md:gap-20 md:py-5`}
    >
      <Image
        alt=""
        src={image.mobile}
        width={343}
        height={398}
        className="block h-[600px] w-full rounded-xl md:hidden"
      />
      <Image
        alt=""
        src={image.desktop}
        width={594}
        height={476}
        className="hidden w-1/2 rounded-xl md:block"
      />
      <div className="flex flex-col items-start justify-center gap-7 md:w-1/2">
        <div className="heading4 md:display-text font-extrabold text-background">
          0{num}
        </div>
        <div className="heading5 md:heading2 font-extrabold text-background">
          {title}
        </div>
        <p className="paragraph2 text-zinc-500">{description}</p>
        <Link
          href={link}
          target="_blank"
          rel="noreferrer"
          className="group text-background"
        >
          <Icons.external className={defaultIconStyle} />
          <Icons.external hover className={hoverIconStyle} />
        </Link>
      </div>
    </div>
  )
}

export { Project }
