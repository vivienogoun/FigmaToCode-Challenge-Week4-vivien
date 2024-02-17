import * as React from "react"

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
  return (
    <Button variant={"outline"} size={"smIcon"} className="group">
      {social === SocialEnum.facebook ? (
        <>
          <Icons.facebook className={hoverIconStyle} />
          <Icons.facebook hover className={defaultIconStyle} />
        </>
      ) : social === SocialEnum.reddit ? (
        <>
          <Icons.reddit className={hoverIconStyle} />
          <Icons.reddit hover className={defaultIconStyle} />
        </>
      ) : social === SocialEnum.discord ? (
        <>
          <Icons.discord className={hoverIconStyle} />
          <Icons.discord hover className={defaultIconStyle} />
        </>
      ) : (
        <>
          <Icons.twitter className={hoverIconStyle} />
          <Icons.twitter hover className={defaultIconStyle} />
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
