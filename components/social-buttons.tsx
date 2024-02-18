import * as React from "react"
import { useTheme } from "next-themes"

import { defaultIconStyle, hoverIconStyle } from "@/lib/constants"

import { Icons } from "./icons"
import { Button } from "./ui/button"

interface SocialButtonProps {
  social: SocialEnum
}

enum SocialEnum {
  facebook = "facebook",
  reddit = "reddit",
  discord = "discord",
  twitter = "twitter",
}

const SocialButton = ({ social }: SocialButtonProps) => {
  const { theme } = useTheme()
  return (
    <Button variant={"outline"} size={"smIcon"} className="group">
      {social === SocialEnum.facebook ? (
        <>
          <Icons.facebook
            hover={theme == "dark" ? true : false}
            className={hoverIconStyle}
          />
          <Icons.facebook
            hover={theme == "light" ? true : false}
            className={defaultIconStyle}
          />
        </>
      ) : social === SocialEnum.reddit ? (
        <>
          <Icons.reddit
            hover={theme == "dark" ? true : false}
            className={hoverIconStyle}
          />
          <Icons.reddit
            hover={theme == "light" ? true : false}
            className={defaultIconStyle}
          />
        </>
      ) : social === SocialEnum.discord ? (
        <>
          <Icons.discord
            hover={theme == "dark" ? true : false}
            className={hoverIconStyle}
          />
          <Icons.discord
            hover={theme == "light" ? true : false}
            className={defaultIconStyle}
          />
        </>
      ) : (
        <>
          <Icons.twitter
            hover={theme == "dark" ? true : false}
            className={hoverIconStyle}
          />
          <Icons.twitter
            hover={theme == "light" ? true : false}
            className={defaultIconStyle}
          />
        </>
      )}
    </Button>
  )
}

const SocialButtons = ({ className }: { className: string }) => {
  return (
    <div className={`flex items-start justify-start gap-6 py-1 ${className}`}>
      <SocialButton social={SocialEnum.facebook} />
      <SocialButton social={SocialEnum.reddit} />
      <SocialButton social={SocialEnum.discord} />
      <SocialButton social={SocialEnum.twitter} />
    </div>
  )
}

export { SocialButtons }
