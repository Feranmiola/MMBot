import { Button } from "@/components/ui/button"
import SupportAndResistanceEditingContent from "./SupportAndResistanceEditingContent"

const EditSupportAndResistanceContent = () => {
  return (
    <div className="mt-3">
        <SupportAndResistanceEditingContent/>
        <div className="flex items-end justify-end mt-3">
          <Button  className="bg-gradient-to-r from-[#6938EF] to-[#DE80FF] w-[200px] hover:scale-110 transition ease-in-out h-[60px] text-[16px] rounded-full">Update</Button>
        </div>
    </div>
  )
}

export default EditSupportAndResistanceContent