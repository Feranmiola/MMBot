import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const TransferFunds = () => {
  const [walletAmount, setWalletAmount] = useState(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setWalletAmount(Number(inputValue));
  };

const handleSubmit =() =>{
  console.log(walletAmount);
}

const [radioValue, setRadioValue] = useState(0);
  
  function useRadio(value: number){
    if(radioValue == value){
      return 'inputDivSelected'
    }else{
      return 'bg-white'
    }
  }
  return (
    <div>
      <div>
        <p className="text-[20px] font-bold">Transfer Funds</p>
        <div className="flex flex-col mt-4 space-y-6">
          <div>
            <p className="text-[20px] font-semibold">Quote Token Address</p>
            <RadioGroup className="flex flex-row space-x-3 mt-1">
              <div className={`flex items-center justify-center rounded-[12px] border-[1px] border-[#CFCFCF66] space-x-2 w-[265px] h-[45px] ${useRadio(1)}`}>
                <div className="bg-white w-[263px] h-[44px] rounded-[12px] flex items-center justify-center space-x-3">
                  <RadioGroupItem onClick={() => setRadioValue(1)} value="option-one" id="option-one" />
                  <p>One-to-Many</p>
                </div>
              </div>
              <div className={`flex items-center justify-center rounded-[12px] border-[1px] border-[#CFCFCF66] space-x-2 w-[265px] h-[45px] ${useRadio(2)}`}>
                <div className="bg-white w-[263px] h-[44px] rounded-[12px] flex items-center justify-center space-x-3">
                  <RadioGroupItem onClick={() => setRadioValue(2)} value="option-two" id="option-two" />
                  <p>Many-to-One</p>
                </div>
              </div>
            </RadioGroup>
          </div>

          <div>
            <p className="text-[20px] font-medium">Amount Per Waller</p>
            <div className=" mt-3 inputDivFocus items-center justify-center flex h-[64px] w-[553px] rounded-[12px]">
              <div className="bg-[#F7F7F7] h-[62px] w-[551px] flex flex-row space-x-4 items-center justify-center rounded-[12px] focus-within:bg-white">
                <Input className="shad-input-fillup-noDM w-[530px] font-semibold text-[20px] " placeholder="Enter Number" onChange={handleInputChange}/>
                <p className="pr-4 text-[16px]">%</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[20px] font-medium">No. of Wallets</p>
            <div className=" mt-3 inputDivFocus items-center justify-center flex h-[64px] w-[553px] rounded-[12px]">
              <div className="bg-[#F7F7F7] h-[62px] w-[551px] flex flex-row space-x-4 items-center justify-center rounded-[12px] focus-within:bg-white">
                <Input className="shad-input-fillup-noDM w-[530px] font-semibold text-[20px] " placeholder="Enter Number" onChange={handleInputChange}/>
                <p className="pr-4 validateText text-[16px] text-[]#6938EF">Max</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center space-x-2 mt-1">
          <div className="flex items-center justify-center">
            <img
            src="./assets/info.svg"
            />
          </div>
          <div className="flex items-center justify-center">
            <p className="tezt-[16px] font-light ">Use comma to separate wallets ID list or hypen to make a range</p>
          </div>
        </div>

        <div className="flex items-end justify-end mt-3">
            <Button onClick={handleSubmit} className="bg-gradient-to-r from-[#6938EF] to-[#DE80FF] w-[200px] hover:scale-110 transition ease-in-out h-[60px] text-[16px] rounded-full">Transfer Funds</Button>
          </div>
      </div>
    </div>
  )
}

export default TransferFunds