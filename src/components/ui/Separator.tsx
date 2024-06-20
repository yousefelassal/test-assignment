import { cn } from "@/lib/utils"

const Separator = ({className}:{
    className?: string
}) => {
  return (
    <div className={cn("w-full p-[10px_15px] items-start flex gap-[10px]", className)}>
        <span className="w-full h-[0.7px] bg-[#CDCDCD]"></span>
    </div>
  )
}

export default Separator