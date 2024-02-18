import { SkillEnum } from "@/types/skill"

import { Skill } from "../skill"

export function Skills() {
  return (
    <div
      id="skills"
      className={`md:centered flex flex-col items-start justify-start px-4 py-10 md:w-full md:items-center md:justify-center md:px-12 md:py-14`}
    >
      <div className="flex w-full flex-col items-start justify-start gap-5">
        <div className="display-text-m md:display-text flex w-full items-center justify-center gap-4 py-5 text-foreground">
          <span>My</span>
          <span className="font-extrabold">Skills</span>
        </div>
        <div className="hidden w-full flex-col items-center justify-start py-5 md:flex">
          <div className="flex w-full items-center justify-between gap-10 py-5">
            <Skill name={SkillEnum.typescript} />
            <Skill name={SkillEnum.javascript} />
            <Skill name={SkillEnum.react} />
            <Skill name={SkillEnum.nodejs} />
            <Skill name={SkillEnum.figma} />
          </div>
          <div className="flex w-full items-center justify-between gap-10 py-5">
            <Skill name={SkillEnum.git} />
            <Skill name={SkillEnum.express} />
            <Skill name={SkillEnum.sass} />
            <Skill name={SkillEnum.mongodb} />
            <Skill name={SkillEnum.socket} />
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-5 md:hidden">
          <div className="flex w-full items-center justify-center gap-5">
            <Skill name={SkillEnum.typescript} />
            <Skill name={SkillEnum.javascript} />
          </div>
          <div className="flex w-full items-center justify-center gap-5">
            <Skill name={SkillEnum.react} />
            <Skill name={SkillEnum.nodejs} />
          </div>
          <div className="flex w-full items-center justify-center gap-5">
            <Skill name={SkillEnum.figma} />
            <Skill name={SkillEnum.git} />
          </div>
          <div className="flex w-full items-center justify-center gap-5">
            <Skill name={SkillEnum.express} />
            <Skill name={SkillEnum.sass} />
          </div>
          <div className="flex w-full items-center justify-center gap-5">
            <Skill name={SkillEnum.mongodb} />
            <Skill name={SkillEnum.socket} />
          </div>
        </div>
      </div>
    </div>
  )
}
