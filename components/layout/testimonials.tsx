import { testimonials } from "@/utils/data"

import { Testimonial } from "../testimonial"

export function Testimonials() {
  return (
    <div className="lg:centered flex flex-col items-start justify-start px-4 py-10 lg:flex-row lg:px-20 lg:py-14">
      <div className="flex flex-col items-start justify-start lg:items-center lg:justify-center">
        <div className="display-text-m md:display-text flex w-full items-center justify-center gap-4 py-5 text-foreground">
          <span>My</span>
          <span className="font-extrabold">Testimonials</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 p-5 lg:flex-row lg:justify-between lg:px-6 lg:py-10">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              content={testimonial.content}
              image={testimonial.image}
              name={testimonial.name}
              role={testimonial.role}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
