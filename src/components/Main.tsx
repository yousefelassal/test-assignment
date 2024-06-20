import Button from "./ui/Button"
import Checkbox from "./ui/Checkbox"
import Separator from "./ui/Separator"
import { useState } from "react"

const Main = () => {
  const [selected, setSelected] = useState<string[]>([])
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelected([...selected, e.target.value])
    } else {
      setSelected(selected.filter(item => item !== e.target.value))
    }
  }
  return (
    <div className="flex flex-col py-[10px] w-full max-w-[370px] rounded-md border border-[#EEE] shadow-[0px_0px_4px_0px_rgba(20,20,20,0.10),0px_8px_15px_0px_rgba(20,20,20,0.12)]">
      <Checkbox
        label="All Pages"
        className="w-full"
        checked={selected.length === 4}
        onChange={
          (e) => {
            if (e.target.checked) {
              setSelected(["Page 1", "Page 2", "Page 3", "Page 4"])
            } else {
              setSelected([])
            }
          }
        }
      />
      <Separator />
      <Checkbox
        label="Page 1"
        className="w-full"
        checked={selected.includes("Page 1")}
        value="Page 1"
        onChange={(e) => {handleCheckboxChange(e)}}
      />
      <Checkbox
        label="Page 2"
        className="w-full"
        checked={selected.includes("Page 2")}
        value="Page 2"
        onChange={(e) => {handleCheckboxChange(e)}}
      />
      <Checkbox
        label="Page 3"
        className="w-full"
        checked={selected.includes("Page 3")}
        value="Page 3"
        onChange={(e) => {handleCheckboxChange(e)}}
      />
      <Checkbox
        label="Page 4"
        className="w-full"
        checked={selected.includes("Page 4")}
        value="Page 4"
        onChange={(e) => {handleCheckboxChange(e)}}
      />
      <Separator />
      <div className="flex items-start gap-[10px] p-[10px_15px]">
        <Button className="w-full">Done</Button>
      </div>
    </div>
  )
}

export default Main