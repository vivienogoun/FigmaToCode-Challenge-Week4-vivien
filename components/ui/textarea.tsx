import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const textareaVariants = cva(
  "flex min-h-[80px] w-full rounded-[4px] border bg-background heading6 px-3 py-2 focus-visible:outline-none focus-visible:bg-background  disabled:cursor-not-allowed disabled:bg-zinc-300 disabled:border-zinc-200 disabled:text-zinc-500",
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

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  error: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <textarea
          className={cn(textareaVariants({ variant, className }))}
          ref={ref}
          {...props}
        />
        {error ? <span className="text-error">Required</span> : null}
      </div>
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
