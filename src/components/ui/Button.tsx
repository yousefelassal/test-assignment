import { cn } from "@/lib/utils"

const Button = ({className, children}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={cn("flex p-[10px_20px] items-center justify-center gap-[10px] shrink-0 rounded-[4px] bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-[var(--secondary)] transition-colors", className)}>
      {children}
    </button>
  )
}

export default Button