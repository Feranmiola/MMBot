import { Input } from "@/components/ui/inputWithIcon"
import { Button } from "@/components/ui/button"

const VolumeWallets = () => {
  return (
    <div>
      <p className="text-[20px] font-bold">Volume Wallets</p>
      <div className="mt-5">
        <div className="flex  justify-center flex-col ">  
          <p className="text-[20px] font-medium">Percentage of Volume Wallets</p>
          <div className=" mt-3 inputDivFocus focus-within:drop-shadow-md items-center justify-center flex h-[48px] w-[553px] rounded-[12px]">
            <div className="bg-[#F7F7F7] focus-within:bg-white w-[551px] flex flex-row space-x-4 items-center justify-center rounded-[12px]">
              <Input className="shad-input-fillup-noDM text-[20px] font-bold h-[46px] w-[480px] " placeholder="%"/>
              <p className="pr-4 text-[20px] text-[#B7B7BD]">Max</p>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-end mt-3">
          <Button  className="bg-gradient-to-r from-[#6938EF] to-[#DE80FF] w-[117px] hover:scale-110 transition ease-in-out h-[48px] text-[16px] rounded-full">Update</Button>
        </div>
      </div>
    </div>
  )
}

export default VolumeWallets