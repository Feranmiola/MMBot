import React from "react"
import { Progress } from "@/components/ui/progress"

interface Props{
  prpgressValue: number;
  oldValue: number;
}

const TopBarForms: React.FC<Props> = ({prpgressValue, oldValue }) =>{
  const [progress, setProgress] = React.useState(oldValue)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(prpgressValue), 500)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div className="flex items-center justify-center">
      <div className="flex space-x-[565px] items-center">
        <div>
          <img
          src="./assets/Logo.svg"
          alt="logo"
          />
        </div>

        <div className="flex flex-row">
          <p className="">Step</p>
          <Progress className=" mt-3 ml-2 [&>*]:bg-gradient-to-r from-[#6938EF] to-[#DE80FF] w-[122px] h-[5px] " value={progress} />
        </div>
      </div>
    </div>
  )
}

export default TopBarForms