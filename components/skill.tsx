import * as React from "react"
import { useTheme } from "next-themes"

import { SkillEnum } from "@/types/skill"
import { defaultIconStyle, hoverIconStyle } from "@/lib/constants"

import { Icons } from "./icons"

interface SkillProps {
  name: string
}

const Skill = ({ name }: SkillProps) => {
  const { theme, setTheme } = useTheme()
  return (
    <div
      className={`group inline-flex w-1/2 flex-col items-center justify-center gap-8 rounded-[4px] border border-foreground p-6 text-foreground hover:bg-foreground hover:text-background`}
    >
      {name === SkillEnum.typescript ? (
        <>
          <Icons.typescript
            hover={theme == "dark" ? true : false}
            className={defaultIconStyle}
          />
          <Icons.typescript
            hover={theme == "dark" ? false : true}
            className={hoverIconStyle}
          />
        </>
      ) : name === SkillEnum.express ? (
        <>
          <Icons.express
            hover={theme == "dark" ? true : false}
            className={defaultIconStyle}
          />
          <Icons.express
            hover={theme == "dark" ? false : true}
            className={hoverIconStyle}
          />
        </>
      ) : name === SkillEnum.figma ? (
        <>
          <Icons.figma
            hover={theme == "dark" ? true : false}
            className={defaultIconStyle}
          />
          <Icons.figma
            hover={theme == "dark" ? false : true}
            className={hoverIconStyle}
          />
        </>
      ) : name === SkillEnum.git ? (
        <>
          <Icons.git
            hover={theme == "dark" ? true : false}
            className={defaultIconStyle}
          />
          <Icons.git
            hover={theme == "dark" ? false : true}
            className={hoverIconStyle}
          />
        </>
      ) : name === SkillEnum.javascript ? (
        <>
          <Icons.javascript
            hover={theme == "dark" ? true : false}
            className={defaultIconStyle}
          />
          <Icons.javascript
            hover={theme == "dark" ? false : true}
            className={hoverIconStyle}
          />
        </>
      ) : name === SkillEnum.mongodb ? (
        <>
          <Icons.mongodb
            hover={theme == "dark" ? true : false}
            className={defaultIconStyle}
          />
          <Icons.mongodb
            hover={theme == "dark" ? false : true}
            className={hoverIconStyle}
          />
        </>
      ) : name === SkillEnum.sass ? (
        <>
          <Icons.sass
            hover={theme == "dark" ? true : false}
            className={defaultIconStyle}
          />
          <Icons.sass
            hover={theme == "dark" ? false : true}
            className={hoverIconStyle}
          />
        </>
      ) : name === SkillEnum.nodejs ? (
        <>
          <Icons.nodejs
            hover={theme == "dark" ? true : false}
            className={defaultIconStyle}
          />
          <Icons.nodejs
            hover={theme == "dark" ? false : true}
            className={hoverIconStyle}
          />
        </>
      ) : name === SkillEnum.react ? (
        <>
          <Icons.react
            hover={theme == "dark" ? true : false}
            className={defaultIconStyle}
          />
          <Icons.react
            hover={theme == "dark" ? false : true}
            className={hoverIconStyle}
          />
        </>
      ) : (
        <>
          <Icons.socket
            hover={theme == "dark" ? true : false}
            className={defaultIconStyle}
          />
          <Icons.socket
            hover={theme == "dark" ? false : true}
            className={hoverIconStyle}
          />
        </>
      )}
      <span className="heading5 text-center font-bold capitalize">{name}</span>
    </div>
  )
}

export { Skill }
