import * as React from "react"

import { SkillEnum } from "@/types/skill"
import { defaultIconStyle, hoverIconStyle } from "@/lib/constants"

import { Icons } from "./icons"

interface SkillProps {
  name: string
}

const Skill = ({ name }: SkillProps) => {
  return (
    <div className="group inline-flex w-1/2 flex-col items-center justify-center gap-8 rounded-[4px] border border-black p-6 text-black hover:bg-black hover:text-white">
      {name === SkillEnum.typescript ? (
        <>
          <Icons.typescript className={defaultIconStyle} />
          <Icons.typescript hover className={hoverIconStyle} />
        </>
      ) : name === SkillEnum.express ? (
        <>
          <Icons.express className={defaultIconStyle} />
          <Icons.express hover className={hoverIconStyle} />
        </>
      ) : name === SkillEnum.figma ? (
        <>
          <Icons.figma className={defaultIconStyle} />
          <Icons.figma hover className={hoverIconStyle} />
        </>
      ) : name === SkillEnum.git ? (
        <>
          <Icons.git className={defaultIconStyle} />
          <Icons.git hover className={hoverIconStyle} />
        </>
      ) : name === SkillEnum.javascript ? (
        <>
          <Icons.javascript className={defaultIconStyle} />
          <Icons.javascript hover className={hoverIconStyle} />
        </>
      ) : name === SkillEnum.mongodb ? (
        <>
          <Icons.mongodb className={defaultIconStyle} />
          <Icons.mongodb hover className={hoverIconStyle} />
        </>
      ) : name === SkillEnum.sass ? (
        <>
          <Icons.sass className={defaultIconStyle} />
          <Icons.sass hover className={hoverIconStyle} />
        </>
      ) : name === SkillEnum.nodejs ? (
        <>
          <Icons.nodejs className={defaultIconStyle} />
          <Icons.nodejs hover className={hoverIconStyle} />
        </>
      ) : name === SkillEnum.react ? (
        <>
          <Icons.react className={defaultIconStyle} />
          <Icons.react hover className={hoverIconStyle} />
        </>
      ) : (
        <>
          <Icons.tailwindcss className={defaultIconStyle} />
          <Icons.tailwindcss hover className={hoverIconStyle} />
        </>
      )}
      <span className="heading5 text-center font-bold capitalize">{name}</span>
    </div>
  )
}

export { Skill }
