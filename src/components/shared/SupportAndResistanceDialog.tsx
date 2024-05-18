import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input";


const SupportAndResistanceDialog =() => {

  return (
    <div className="flex items-center justify-center">
         <div className="flex flex-col space-y-6">
        <div>
        <p className="text-[20px] font-semibold">Amount Per Wallet</p>
        <div className=" mt-3 inputDivFocus items-center justify-center flex h-[64px] w-[360px] rounded-[12px]">
            <div className="bg-[#F7F7F7] w-[358px] flex flex-row space-x-4 items-center justify-center rounded-[12px]">
            <Input className="shad-input-fillup" placeholder="Enter Amount"/>
            <p className="pr-4 text-[20px] text-[#1D1D1D99]">BNB</p>
            </div>
        </div>
        </div>

        <Separator/>
        </div>
    </div>
  )
}

export default SupportAndResistanceDialog