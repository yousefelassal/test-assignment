import Button from "./ui/Button"
import Checkbox from "./ui/Checkbox"
import Separator from "./ui/Separator"

const Main = () => {
  return (
    <div className="flex flex-col py-[10px] w-full max-w-[370px] rounded-md border border-[#EEE] shadow-[0px_0px_4px_0px_rgba(20,20,20,0.10),0px_8px_15px_0px_rgba(20,20,20,0.12)]">
      <Checkbox label="All Pages" className="w-full" />
      <Separator />
      <Checkbox label="Page 1" className="w-full" />
      <Checkbox label="Page 2" className="w-full" />
      <Checkbox label="Page 3" className="w-full" />
      <Checkbox label="Page 4" className="w-full" />
      <Separator />
      <div className="flex items-start gap-[10px] p-[10px_15px]">
        <Button className="w-full">Done</Button>
      </div>
    </div>
  )
}

export default Main