import { Icons } from "./icons"

interface LogoProps {
  from: string
}

const Logo = ({ from }: LogoProps) => {
  return (
    <div
      className={`${
        from == "header" ? "text-foreground" : "text-background"
      } inline-flex items-center justify-start gap-2 md:gap-3`}
    >
      <Icons.logo className="size-7 md:size-10" />
      <span className="heading5 font-bold">Personal</span>
    </div>
  )
}

export { Logo }
