import * as React from "react"
import { cn } from "@/utils/shadcn"
import { cva, type VariantProps } from "class-variance-authority"

const inputVariants = cva(
  "flex h-10 w-full rounded-[4px] border px-3 py-2 bg-background heading6 file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none focus-visible:bg-background disabled:cursor-not-allowed disabled:bg-zinc-300 disabled:border-zinc-200 disabled:text-zinc-500",
  {
    variants: {
      variant: {
        default:
          "border-zinc-500 text-foreground placeholder:border-black placeholder:text-zinc-500 hover:bg-zinc-100 hover:border-neutral hover:text-neutral focus-visible:border-neutral focus-visible:text-neutral",
        error: "border-error text-error placeholder:text-error",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  error?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, type, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          type={type}
          className={cn(inputVariants({ variant, className }))}
          ref={ref}
          {...props}
        />
        {error ? <span className="text-error">Required</span> : null}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
