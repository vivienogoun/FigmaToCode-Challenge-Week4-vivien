import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"

import { ProjectType } from "@/types/project"
import { defaultIconStyle, hoverIconStyle } from "@/lib/constants"

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
  const { theme } = useTheme()
  return (
    <div
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center justify-center gap-7 lg:justify-start lg:gap-20 lg:py-5`}
    >
      <Image
        alt=""
        src={image.mobile}
        width={343}
        height={398}
        className="block h-[600px] w-full rounded-xl lg:hidden"
      />
      <Image
        alt=""
        src={image.desktop}
        width={594}
        height={476}
        className="hidden w-1/2 rounded-xl lg:block"
      />
      <div className="flex flex-col items-start justify-center gap-7 lg:w-1/2">
        <div className="heading4 lg:display-text font-extrabold text-background">
          0{num}
        </div>
        <div className="heading5 lg:heading2 font-extrabold text-background">
          {title}
        </div>
        <div className="paragraph2 text-zinc-500">{description}</div>
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
