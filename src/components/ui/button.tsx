import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-extrabold uppercase transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground shadow-action hover:-translate-y-0.5 hover:bg-primary/90",
        outline: "border border-border bg-background text-foreground hover:border-primary hover:bg-accent",
        selected: "border border-primary bg-selection text-selection-foreground",
        ghost: "bg-transparent text-foreground hover:bg-muted",
      },
      size: {
        default: "h-12",
        compact: "h-10 min-h-10 px-3 text-xs",
        icon: "size-10 min-h-10 px-0",
        wide: "h-14 w-full text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant, size, asChild, ...props },
  ref,
) {
  const Comp = asChild ? Slot : "button";
  return <Comp ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />;
});

export { Button, buttonVariants };