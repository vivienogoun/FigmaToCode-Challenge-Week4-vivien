import Image from "next/image"
import { useTheme } from "next-themes"

interface ExperienceProps {
  image: string
  title: string
  period: string
  description: string
}

const Experience = ({ image, title, period, description }: ExperienceProps) => {
  const { theme } = useTheme()
  return (
    <div
      className={`flex flex-col items-start justify-start gap-7 rounded-[10px] border border-zinc-500 bg-foreground px-6 py-[30px] ${
        theme == "dark" ? "hover:bg-zinc-100" : "hover:bg-zinc-800"
      }`}
    >
      <div className="flex w-full flex-col items-start justify-start gap-[30px] md:flex-row md:items-center md:justify-between md:gap-0">
        <div className="flex items-center justify-start gap-[30px]">
          <Image alt="" src={image} width={32} height={32} />
          <span className="heading4 font-semibold capitalize text-background">
            {title}
          </span>
        </div>
        <span
          className={`heading6 text-center font-semibold ${
            theme == "dark" ? "text-zinc-800" : "text-zinc-300"
          }`}
        >
          {period}
        </span>
      </div>
      <div
        className={`paragraph2 ${
          theme == "dark" ? "text-zinc-800" : "text-zinc-300"
        }`}
      >
        {description}
      </div>
    </div>
  )
}

export { Experience }
