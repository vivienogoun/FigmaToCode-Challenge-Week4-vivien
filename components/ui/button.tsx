import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-[4px] font-semibold transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none border",
  {
    variants: {
      variant: {
        default:
          "bg-black text-white hover:bg-neutral active:bg-white active:border-black active:text-black",
        outline:
          "bg-black border hover:border-black hover:bg-white hover:text-white",
        ghost: "border-none",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        small: "h-12 py-3 px-4",
        medium: "h-14 py-4 px-5",
        smIcon: "h-12 w-12 p-3",
        mdIcon: "h-14 w-14 p-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "small",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
