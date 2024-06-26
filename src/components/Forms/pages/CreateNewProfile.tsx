import TopBarForms from "@/components/shared/TopBarForms";
import FormBottomBar from "@/components/shared/FormBottomBar"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from "react";


const CreateNewProfile = () => {
  const [radioValue, setRadioValue] = useState(0);
  const buttonText = "Create Profile";
  const nextLink = "/new-profile";
  const newValue = 25;
  const initValue = 0;

  function useRadio(value: number){
    if(radioValue == value){
      return 'inputDivSelected'
    }else{
      return 'bg-white'
    }
  }


  return (
    <div className="flex flex-col items-center justify-center mt-16 pb-10">
      <div className="mb-16">
      <TopBarForms prpgressValue = {newValue} oldValue = {initValue}/>
      </div>
      <div className="flex flex-col  w-[832px]">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <p className="text-[24px]"> <span className="text-[#949494]">Welcome,</span> <span className="ml-1 text-black font-bold">Create a new Profile</span> </p>
            <p className="text-[20px] text-[#1D1D1D]">Lorem ipsum dolor sit amet consectetur. Vel amet eu eget duis.</p>
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
                        <div className="bg-white w-[170px] rounded-[12px] h-[62px]  flex items-center justify-center space-x-3" >
                          <Label htmlFor="option-one" className=" cursor-pointer bg-white w-[170px] rounded-[12px] h-[62px]  flex items-center justify-center space-x-3">
                            <RadioGroupItem onClick={() => setRadioValue(1)} value="option-one" id="option-one" className=""/>
                            <p className="">BNB</p>
                          </Label>
                        </div>
                      </div>
                      <div className={`flex items-center justify-center rounded-[12px] border-[1px] border-[#CFCFCF66] space-x-2 w-[172px] h-[64px] ${useRadio(2)}`}>
                        <div className="bg-white w-[170px] rounded-[12px] h-[62px]  flex items-center justify-center space-x-3">
                          <Label htmlFor="option-two" className=" cursor-pointer bg-white w-[170px] rounded-[12px] h-[62px]  flex items-center justify-center space-x-3">
                            <RadioGroupItem className="" onClick={() => setRadioValue(2)} value="option-two" id="option-two" />
                            <p className="">Custom</p>
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                  {radioValue === 2 ? (
                    <div className="mt-[1.9rem]">
                      <div className=" mt-1 inputDivFocus items-center justify-center flex h-[64px] w-[360px] rounded-[12px]">
                        <Input className="shad-input" placeholder="Enter Quote Token Address"/>
                      </div>
                    </div>
                  ): (
                    <div>
                      
                    </div>
                  )}
                </div>

                <div className="flex flex-col ">
                  <div>
                    <p className="text-[20px] font-semibold">Pool Pair</p>
                  </div>
                  <div className="flex flex-row items-center justify-center space-x-3 h-[64px] w-[753px] rounded-[12px] inputDivFocus border-[2px] mt-1">
                    <div className="bg-[#F7F7F7] focus-within:bg-white h-[58px] w-[747px] flex items-center justify-center flex-row rounded-[12px]">
                      <Input className="shad-input-fillup-noDM bg-white h-[56px] w-[723px] ml-1 " placeholder="Enter Pool Pair"/>
                      
                      <p className="pr-3 validateText text-[16px] font-bold">Validate</p>
                    </div>
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

export default CreateNewProfile