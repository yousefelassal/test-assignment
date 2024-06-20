import { cn } from "@/lib/utils"

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Checkbox = ({
  className,
  label,
  ...props
}: CheckboxProps) => {
  return (
    <label className={cn("checkbox-container p-[8px_15px_8px_22px] flex justify-between items-center cursor-pointer", className)}>
      <span className="text-[14px] text-[var(--secondary)] leading-[130%]">{label}</span>
      <label className="checkbox">
        <input id="checkbox" className="hidden" type="checkbox" {...props} />
      </label>
    </label>
  )
}

export default Checkbox