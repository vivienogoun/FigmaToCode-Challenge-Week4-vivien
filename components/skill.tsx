import * as React from "react"
import { defaultIconStyle, hoverIconStyle } from "@/utils/constants"
import { useTheme } from "next-themes"

import { SkillEnum } from "@/types/skill"

import { Icons } from "./icons"

interface SkillProps {
  name: string
}

const Skill = ({ name }: SkillProps) => {
  const { theme } = useTheme()
  return (
    <div
      className={`group inline-flex w-1/2 flex-col items-center justify-center gap-8 rounded-[4px] border border-foreground p-6 text-foreground transition delay-150 duration-300 ease-in-out hover:bg-foreground hover:text-background md:hover:scale-125`}
    >
      {name === SkillEnum.typescript ? (
        <div>
          <Icons.typescript
            hover={theme == "dark" ? true : false}
            className={defaultIconStyle}
          />
          <Icons.typescript
            hover={theme == "dark" ? false : true}
            className={hoverIconStyle}
          />
        </div>
      ) : name === SkillEnum.express ? (
        <div>
          <Icons.express
            hover={theme == "dark" ? true : false}
            className={defaultIconStyle}
          />
          <Icons.express
            hover={theme == "dark" ? false : true}
            className={hoverIconStyle}
          />
        </div>
      ) : name === SkillEnum.figma ? (
        <div>
          <Icons.figma
            hover={theme == "dark" ? true : false}
            className={defaultIconStyle}
          />
          <Icons.figma
            hover={theme == "dark" ? false : true}
            className={hoverIconStyle}
          />
        </div>
      ) : name === SkillEnum.git ? (
        <div>
          <Icons.git
            hover={theme == "dark" ? true : false}
            className={defaultIconStyle}
          />
          <Icons.git
            hover={theme == "dark" ? false : true}
            className={hoverIconStyle}
          />
        </div>
      ) : name === SkillEnum.javascript ? (
        <div>
          <Icons.javascript
            hover={theme == "dark" ? true : false}
            className={defaultIconStyle}
          />
          <Icons.javascript
            hover={theme == "dark" ? false : true}
            className={hoverIconStyle}
          />
        </div>
      ) : name === SkillEnum.mongodb ? (
        <div>
          <Icons.mongodb
            hover={theme == "dark" ? true : false}
            className={defaultIconStyle}
          />
          <Icons.mongodb
            hover={theme == "dark" ? false : true}
            className={hoverIconStyle}
          />
        </div>
      ) : name === SkillEnum.sass ? (
        <div>
          <Icons.sass
            hover={theme == "dark" ? true : false}
            className={`${defaultIconStyle}`}
          />
          <Icons.sass
            hover={theme == "dark" ? false : true}
            className={hoverIconStyle}
          />
        </div>
      ) : name === SkillEnum.nodejs ? (
        <div>
          <Icons.nodejs
            hover={theme == "dark" ? true : false}
            className={defaultIconStyle}
          />
          <Icons.nodejs
            hover={theme == "dark" ? false : true}
            className={hoverIconStyle}
          />
        </div>
      ) : name === SkillEnum.react ? (
        <div>
          <Icons.react
            hover={theme == "dark" ? true : false}
            className={`${defaultIconStyle}`}
          />
          <Icons.react
            hover={theme == "dark" ? false : true}
            className={`${hoverIconStyle}`}
          />
        </div>
      ) : (
        <div>
          <Icons.socket
            hover={theme == "dark" ? true : false}
            className={defaultIconStyle}
          />
          <Icons.socket
            hover={theme == "dark" ? false : true}
            className={hoverIconStyle}
          />
        </div>
      )}
      <span className="heading5 text-center font-bold capitalize">{name}</span>
    </div>
  )
}

export { Skill }
