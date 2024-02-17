import Image from "next/image"

import { TestimonialType } from "@/types/testimonial"

import { Icons } from "./icons"

const Testimonial = ({ image, content, name, role }: TestimonialType) => {
  return (
    <div className="testimonial-shadow group flex flex-col items-center justify-center gap-6 rounded-[20px] bg-white p-10 hover:bg-black">
      <div className="relative">
        <Image alt="" src={image} width={96} height={96} />
        <Icons.quote className="absolute bottom-0 right-0 inline group-hover:hidden" />
        <Icons.quote
          hover
          className="absolute bottom-0 right-0 hidden group-hover:inline"
        />
      </div>
      <span className="button-text2 text-center text-neutral group-hover:text-white">
        {content}
      </span>
      <div className="h-[2px] w-[120px] bg-black group-hover:bg-white"></div>
      <span className="heading5 text-center font-semibold text-neutral group-hover:text-white">
        {name}
      </span>
      <span className="heading6 text-center font-semibold text-zinc-500 group-hover:text-white">
        {role}
      </span>
    </div>
  )
}

export { Testimonial }
