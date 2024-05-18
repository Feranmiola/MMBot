import { Input } from "@/components/ui/inputWithIcon"
import { Button } from "@/components/ui/button"

const SwapRange = () => {
  return (
    <div>
      <p className="text-[20px] font-bold">Swap Range</p>
      <div className="mt-5">
        <div className="flex  justify-center flex-col ">  
          <p className="text-[20px] font-medium">Volume Swap Range</p>
          <div>
            <div className="flex flex-row space-x-5  ">
              <div className="flex flex-row items-center  space-x-2 justify-center">
                <div>
                  <p className="text-[16px]">From: </p>
                </div>
                <div className="flex">
                  <div className=" inputDivFocus focus-within:drop-shadow-md flex items-center  justify-center h-[48px] w-[70px] rounded-[12px]">
                      <div className="bg-[#F7F7F7] focus-within:bg-white h-[46px] w-[68px] flex  justify-centeritems-center rounded-[12px]">
                        <Input className="shad-input-fillup-noDM text-[20px] font-bold h-[46px] w-[68px] " placeholder="%"/>
                      </div>
                  </div>
                </div>
                <div>
                  <p className="text-[14px] text-[#B7B7BD]">of wallet</p>
                </div>
              </div>
              
              <div className="flex flex-row items-center space-x-2 justify-center">
                <div>
                  <p className="text-[16px]">To: </p>
                </div>
                <div className=" inputDivFocus focus-within:drop-shadow-md flex items-center  justify-center h-[48px] w-[70px] rounded-[12px]">
                      <div className="bg-[#F7F7F7] focus-within:bg-white h-[46px] w-[68px] flex  justify-centeritems-center rounded-[12px]">
                        <Input className="shad-input-fillup-noDM text-[20px] font-bold h-[46px] w-[68px] " placeholder="%"/>
                      </div>
                  </div>
                <div>
                  <p className="text-[14px] text-[#B7B7BD]">of wallet</p>
                </div>
              </div>
              
              <div className="flex flex-row items-center  space-x-2 justify-center">
                <div>
                  <p className="text-[#6938EF] text-[16px]">Max: </p>
                </div>
                <div className=" inputDivFocus focus-within:drop-shadow-md flex items-center  justify-center h-[48px] w-[70px] rounded-[12px]">
                      <div className="bg-[#F7F7F7] focus-within:bg-white h-[46px] w-[68px] flex  justify-centeritems-center rounded-[12px]">
                        <Input className="shad-input-fillup-noDM text-[20px] font-bold h-[46px] w-[68px] " placeholder="%"/>
                      </div>
                  </div>
                <div>
                  <p className="text-[14px] text-[#B7B7BD]">of supply</p>
                </div>
              </div>
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

export default SwapRange