import { Button } from "@/components/ui/button";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";
const SwapRate = () => {
  

  const [radioValue, setRadioValue] = useState(0);

  function useRadio(value: number){
    if(radioValue == value){
      return 'inputDivSelected'
    }else{
      return 'bg-white'
    }
  }
  
  const { toast } = useToast()

    const handleUpdate = () =>{
      toast({
        title: "Updated",
        description: "Valu has been updated",
      })
    }

  return (
    <div>
      <p className="text-[20px] font-bold">Swap Rate</p>
      
      <div className="mt-4">
        <p className="text-[20px] font-medium">Volume</p>
        
        <div>
          <RadioGroup className="flex flex-row space-x-3 mt-1">
            <div className={`flex items-center justify-center rounded-[12px] border-[1px] border-[#CFCFCF66] space-x-2 w-[172px] h-[48px] ${useRadio(1)}`}>
              <Label htmlFor="option-one" className="bg-white w-[170px] rounded-[12px] h-[46px] flex items-center justify-center space-x-3">
                <RadioGroupItem onClick={() => setRadioValue(1)} value="option-one" id="option-one" />
                <p>Low</p>
              </Label>
            </div>
            <div className={`flex items-center justify-center rounded-[12px] border-[1px] border-[#CFCFCF66] space-x-2 w-[172px] h-[48px] ${useRadio(2)}`}>
              <Label htmlFor="option-two" className="bg-white w-[170px] rounded-[12px] h-[46px] flex items-center justify-center space-x-3">
                <RadioGroupItem onClick={() => setRadioValue(2)} value="option-two" id="option-two" />
                <p>Mid</p>
              </Label>
            </div>
            <div className={`flex items-center justify-center rounded-[12px] border-[1px] border-[#CFCFCF66] space-x-2 w-[172px] h-[48px] ${useRadio(3)}`}>
              <Label htmlFor="option-three" className="bg-white w-[170px] rounded-[12px] h-[46px] flex items-center justify-center space-x-3">
                <RadioGroupItem onClick={() => setRadioValue(3)} value="option-three" id="option-three" />
                <p>High</p>
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="flex items-end justify-end mt-3">
          <Button onClick={handleUpdate}  className="bg-gradient-to-r from-[#6938EF] to-[#DE80FF] w-[117px] hover:scale-110 transition ease-in-out h-[48px] text-[16px] rounded-full">Update</Button>
        </div>
    </div>
  )
}

export default SwapRate