import { Logo } from "./logo"

const Footer = () => {
  return (
    <div className="flex items-start justify-start bg-black px-4 py-5 lg:px-20 lg:py-6">
      <div className="flex w-full items-center justify-between">
        <Logo color="white" />
        <div className="paragraph3 lg:heading6 flex flex-col items-end justify-between font-semibold text-white lg:justify-start">
          <span>@ 2019-2023 Personal</span>
          <span>Made In Figma</span>
        </div>
      </div>
    </div>
  )
}

export { Footer }
