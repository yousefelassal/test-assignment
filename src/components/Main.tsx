import Button from "./ui/Button"
import Checkbox from "./ui/Checkbox"

const Main = () => {
  return (
    <div className="w-full max-w-2xl">
      <Checkbox label="Page 1" className="w-full" />
      <Button className="w-full">Done</Button>
    </div>
  )
}

export default Main