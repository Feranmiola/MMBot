import TopBarForms from "@/components/shared/TopBarForms";
import FormBottomBar from "@/components/shared/FormBottomBar"
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from "react";
const NewProfile = () => {
  
  const [radioValue, setRadioValue] = useState(0);
  const buttonText = "Create Profile";
  const nextLink = "/new-profile";
  const newValue = 30

  function useRadio(value: number){
    if(radioValue == value){
      return 'inputDivSelected'
    }else{
      return 'bg-white'
    }
  }


  return (
    <div className="flex flex-col items-center justify-center mt-40 pb-10">
    <div className="mb-16">
      <TopBarForms prpgressValue = {newValue}/>
    </div>
    <div className="flex flex-col  w-[832px]">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <p className="text-[24px]"> <span className="1 text-black font-bold">New Profile</span> </p>
          <p className="text-[20px] text-gray-500 font-bold">BTC/USDT <span className="font-normal"> - Uniswap V2</span></p>
        </div>

        <div className="w-[832px] h-[660px] border-[2px] border-[#CFCFCF80] rounded-[16px] mt-10 mb-10">
          <div className="flex items-center justify-center mt-10">
            <div className="flex flex-col space-y-12">
              <div className="flex flex-row space-x-12">
                <div>
                  <p className="text-[20px] font-semibold">Preferred Profile Name</p>
                  <div className=" inputDivFocus items-center justify-center flex h-[64px] w-[360px] rounded-[12px]">
                    <Input className="shad-input" placeholder="Enter Profile Name"/>
                  </div>
                </div>
                <div>
                  <p className="text-[20px] font-semibold">Enter Token Address</p>
                  <div className=" inputDivFocus items-center justify-center flex h-[64px] w-[360px] rounded-[12px]">
                    <Input className="shad-input" placeholder="Enter Token Address"/>
                  </div>
                </div>
              </div>
            
              <div className="flex flex-row space-x-12">
                <div>
                  <p className="text-[20px] font-semibold">Blockchain</p>
                  <div className=" inputDivFocus items-center justify-center flex h-[64px] w-[360px] rounded-[12px]">
                    <Select>
                    <SelectTrigger className="shad-select data-[placeholder]:text-[#B7B7BD]">
                      <SelectValue placeholder="Select Blockchain" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Ethereum</SelectItem>
                      <SelectItem value="dark">Binance Smart Chain</SelectItem>
                      <SelectItem value="system">Base</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                </div>
                <div>
                  <p className="text-[20px] font-semibold">Router Address</p>
                  <div className=" inputDivFocus items-center justify-center flex h-[64px] w-[360px] rounded-[12px]">
                    <Select>
                    <SelectTrigger className="shad-select data-[placeholder]:text-[#B7B7BD]">
                      <SelectValue placeholder="Select Router Address" className="data-[placeholder]:text-muted-foreground" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Uniswap</SelectItem>
                      <SelectItem value="dark">Pancakeswap</SelectItem>
                      <SelectItem value="system">Sushiswap</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                </div>
              </div>

              <div className="flex flex-row space-x-12">
                <div>
                  <p className="text-[20px] font-semibold">Quote Token Address</p>
                  <RadioGroup className="flex flex-row space-x-3 mt-1">
                    <div className={`flex items-center justify-center rounded-[12px] border-[1px] border-[#CFCFCF66] space-x-2 w-[172px] h-[64px] ${useRadio(1)}`}>
                      <div className="bg-white w-[168px] rounded-[12px] h-[60px] flex items-center justify-center space-x-3">
                        <RadioGroupItem onClick={() => setRadioValue(1)} value="option-one" id="option-one" />
                        <p>BSC</p>
                      </div>
                    </div>
                    <div className={`flex items-center justify-center rounded-[12px] border-[1px] border-[#CFCFCF66] space-x-2 w-[172px] h-[64px] ${useRadio(2)}`}>
                      <div className="bg-white w-[168px] rounded-[12px] h-[60px] flex items-center justify-center space-x-3">
                        <RadioGroupItem onClick={() => setRadioValue(2)} value="option-two" id="option-two" />
                        <p>Custom</p>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
                <div className="mt-[1.9rem]">
                  <div className=" mt-1 inputDivFocus items-center justify-center flex h-[64px] w-[360px] rounded-[12px]">
                    <Input className="shad-input" placeholder="Enter Quote Token Address"/>
                  </div>
                </div>
              </div>

              <div className="flex flex-col ">
                <div>
                  <p className="text-[20px] font-semibold">Pool Pair</p>
                </div>
                <div className="flex flex-row items-center justify-between space-x-3 h-[64px] rounded-[12px] inputDivFocus border-[2px] mt-1">
                  
                    <Input className="shad-input-custom ml-1 " placeholder="Enter Pool Pair"/>
                  
                  <p className="pr-7 validateText text-[16px] font-bold">Validate</p>
                </div>
              </div>

            </div>
          </div>
          <div className="flex items-end justify-end">
            <div className="flex flex-row space-x-6 mr-10 mt-5">
              <p className="text-[18px]">Pool Name: <span className="text-[#00A478] font-bold">BTC/USDT</span></p>
              <p className="text-[18px]">Liquidity Balance: <span className="text-[#00A478] font-bold">3000 USDT</span></p>
            </div>
          </div>
        </div>
      </div>
    
      <div className="flex items-center justify-center">
        <FormBottomBar ButtonText = {buttonText} NextLink = {nextLink}/>
      </div>
    </div>
  </div>
  )
}

export default NewProfile