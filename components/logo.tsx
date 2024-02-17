import { Icons } from "./icons"

interface LogoProps {
  color: string
}

const Logo = ({ color }: LogoProps) => {
  return (
    <div
      className={`text-${color} inline-flex items-center justify-start gap-2 md:gap-3`}
    >
      <Icons.logo className="size-7 md:size-10" />
      <span className="heading5 font-bold">Personal</span>
    </div>
  )
}

export { Logo }
