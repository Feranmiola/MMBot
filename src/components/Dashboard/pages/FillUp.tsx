import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

import {
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"


const FillUp = () => {
  const [radioValue, setRadioValue] = useState(0);

  function useRadio(value: number){
    if(radioValue == value){
      return 'inputDivSelected'
    }else{
      return 'bg-white'
    }
  }
  
  const steps = [
    { title: 'Fill Up' },
    { title: 'Support' },
    { title: 'Resistance' },
  ]

  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  })

  const navigate = useNavigate();


  const handleStart =()=>{

    navigate('/dashboard');

  }
  
  return (
    <div>
      <div className="flex items-center justify-center flex-row space-x-10 mt-20 pb-20">
        <div>
          <Card className=" drop-shadow-md">
            <CardHeader>
              <CardTitle className="flex flex-row space-x-3">
                <img
                src="./assets/fillUpLogo.svg"
                />
                <p>Fill Up</p>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-6">

                <div className="flex flex-row space-x-4">
                  <div>
                    <p className="text-[20px] font-normal">Min. Per Wallet</p>
                    <div className=" mt-1 inputDivFocus focus-within:drop-shadow-md items-center justify-center flex h-[48px] w-[180px] rounded-[12px]">
                      <div className="bg-[#F7F7F7] focus-within:bg-white w-[178px] flex flex-row space-x-4 items-center justify-center rounded-[12px]">
                        <Input className="shad-input-fillup-noDM text-[20px] font-bold w-[122px] h-[46px]" placeholder="%"/>
                        <p className="pr-2 text-[16px] text-[#B7B7BD]">Min</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-[20px] font-normal">Max. Per Wallet</p>
                    <div className=" mt-1 inputDivFocus focus-within:drop-shadow-md items-center justify-center flex h-[48px] w-[180px] rounded-[12px]">
                      <div className="bg-[#F7F7F7] focus-within:bg-white w-[178px] flex flex-row space-x-4 items-center justify-center rounded-[12px]">
                      <Input className="shad-input-fillup-noDM text-[20px] font-bold w-[122px] h-[46px]" placeholder="%"/>
                        <p className="pr-2 text-[16px] text-[#B7B7BD]">Max</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex  justify-center flex-col">  
                  <p className="text-[20px] font-normal">Overall Total Spend</p>
                  <div className=" mt-3 inputDivFocus focus-within:drop-shadow-md items-center justify-center flex h-[48px] w-[379px] rounded-[12px]">
                    <div className="bg-[#F7F7F7] focus-within:bg-white w-[376px] flex flex-row space-x-4 items-center justify-center rounded-[12px]">
                      <Input className="shad-input-fillup-noDM text-[20px] font-bold h-[46px] w-[330px] " placeholder="%"/>
                      <p className="pr-4 text-[20px] text-[#B7B7BD]">Max</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <p className="text-[20px] font-normal">Volume</p>
                  <RadioGroup className="flex flex-row space-x-1 mt-1">
                    <div className={`flex items-center justify-center rounded-[12px] border-[1px] border-[#CFCFCF66] space-x-2 w-[114px] h-[48px] ${useRadio(1)}`}>
                      <div className="bg-white w-[113px] rounded-[12px] h-[46px] flex items-center justify-center space-x-3">
                        <RadioGroupItem onClick={() => setRadioValue(1)} value="option-one" id="option-one" />
                        <p>Low</p>
                      </div>
                    </div>
                    <div className={`flex items-center justify-center rounded-[12px] border-[1px] border-[#CFCFCF66] space-x-2 w-[114px] h-[48px] ${useRadio(2)}`}>
                      <div className="bg-white w-[113px] rounded-[12px] h-[46px] flex items-center justify-center space-x-3">
                        <RadioGroupItem onClick={() => setRadioValue(2)} value="option-two" id="option-two" />
                        <p>Mid</p>
                      </div>
                    </div>
                    <div className={`flex items-center justify-center rounded-[12px] border-[1px] border-[#CFCFCF66] space-x-2 w-[114px] h-[48px] ${useRadio(3)}`}>
                      <div className="bg-white w-[113px] rounded-[12px] h-[46px] flex items-center justify-center space-x-3">
                        <RadioGroupItem onClick={() => setRadioValue(3)} value="option-three" id="option-three" />
                        <p>High</p>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <div>  
                  <p className="text-[20px] font-normal">Percentage of Volume Wallets</p>
                  <div className=" mt-3 inputDivFocus focus-within:drop-shadow-md items-center justify-center flex h-[48px] w-[379px] rounded-[12px]">
                    <div className="bg-[#F7F7F7] focus-within:bg-white w-[376px] flex flex-row space-x-4 items-center justify-center rounded-[12px]">
                      <Input className="shad-input-fillup-noDM text-[20px] font-bold h-[46px] w-[330px] " placeholder="%"/>
                      <p className="pr-4 text-[20px] text-[#B7B7BD]">Max</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-[20px] font-normal">Volume Swap Range</p>
                  <div className="flex flex-row space-x-2 items-center justify-center">
                    <div className="flex flex-row items-center justify-center space-x-1">
                      <div>
                        <p className="text-[16px]">From: </p>
                      </div>
                      <div className="flex flex-col items-center justify-center mt-5">
                        <div className=" inputDivFocus focus-within:drop-shadow-md items-center justify-center flex h-[36px] w-[75px] rounded-[12px]">
                          <div className="bg-[#F7F7F7] focus-within:bg-white w-[34px] flex flex-row space-x-4 items-center justify-center rounded-[12px]">
                            <Input className="shad-input-fillup-noDM text-[20px] font-bold h-[34px] w-[73px] " placeholder="%"/>
                          </div>
                        </div>
                        <p className="text-[14px] text-[#B7B7BD]">of wallet</p>
                      </div>

                    </div>
                    <div className="flex flex-row items-center justify-center space-x-1">
                    <div>
                      <p className="text-[16px]">To: </p>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-5">
                      <div className=" inputDivFocus focus-within:drop-shadow-md items-center justify-center flex h-[36px] w-[75px] rounded-[12px]">
                        <div className="bg-[#F7F7F7] focus-within:bg-white w-[34px] flex flex-row space-x-4 items-center justify-center rounded-[12px]">
                          <Input className="shad-input-fillup-noDM text-[20px] font-bold h-[34px] w-[73px] " placeholder="%"/>
                        </div>
                      </div>
                      <p className="text-[14px] text-[#B7B7BD]">of wallet</p>
                    </div>

                  </div>
                  <div className="flex flex-row items-center justify-center space-x-1">
                    <div>
                      <p className="text-[#6938EF] text-[16px]">Max: </p>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-5">
                      <div className=" inputDivFocus focus-within:drop-shadow-md items-center justify-center flex h-[36px] w-[75px] rounded-[12px]">
                        <div className="bg-[#F7F7F7] focus-within:bg-white w-[34px] flex flex-row space-x-4 items-center justify-center rounded-[12px]">
                          <Input className="shad-input-fillup-noDM text-[20px] font-bold h-[34px] w-[73px] " placeholder="%"/>
                        </div>
                      </div>
                      <p className="text-[14px] text-[#B7B7BD]">of supply</p>
                    </div>

                  </div>
                  </div>
                </div>

              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="py-5 px-2 drop-shadow-md">
            <CardContent className="flex flex-row space-x-4">
              <div className="">
                <div className="flex flex-row space-x-3">
                  <img
                  src="./assets/supportIcon.svg"
                  />
                  <p className="text-[20px] font-bold">Support</p>
                </div>
                <div className="w-[374px] flex flex-col mt-10 space-y-3">
                  <p className="text-[18px]">This should be done till we spend <span className="border-[1px] rounded-[4px] p-[1.5px]">100 <span className="text-[#6938EF]">%</span></span> of our balance on buying</p>
                  <Separator/>
                  <p className="text-[16px]"> <span className="font-bold">Then If </span>in the next <span className="ml-[3px] border-[1px] border-[#6938EF] rounded-[4px] p-[1.5px]">100 <span className="text-[#6938EF]"> mins</span></span> timeline after we finished buying, there are at least 70% of sales in the timeline, then we sell with <span className="border-[1px] rounded-[4px] p-[1.5px]">100 <span className="text-[#6938EF]">%</span></span> of our token holdings (very quickly).</p>

                  <Separator/>
                  <p className="text-[16px]"> <span className="font-bold">Else If </span>in the next <span className="ml-[3px] border-[1px] border-[#CECECE] rounded-[4px] p-[1.5px]">100 <span className="text-[#6938EF]"> mins</span></span> timeline after we finished buying, there are at least 70% of buys in the timeline, then we buy with <span className="border-[1px] rounded-[4px] p-[1.5px]">100 <span className="text-[#6938EF]">%</span></span> of our token holdings (very quickly).</p>

                  <Separator/>
                  <p className="text-[16px]">After <span className="border-[1px] rounded-[4px] p-[1.5px]">100 <span className="text-[#6938EF]">%</span></span> of our tokens are sold, the bot waits then begins buying with <span className="border-[1px] rounded-[4px] p-[1.5px]">100 <span className="text-[#6938EF]">%</span></span> of our funds. After the buys are at least 70% of volume of a <span className="ml-[3px] border-[1px] border-[#CECECE] rounded-[4px] p-[1.5px]">100 <span className="text-[#6938EF]"> mins</span></span> timeline</p>

                  <Separator/>
                  <p className="text-[16px]">After we have bought with <span className="border-[1px] rounded-[4px] p-[1.5px]">100 <span className="text-[#6938EF]">%</span></span> of our funds, the bot waits then begins selling with <span className="border-[1px] rounded-[4px] p-[1.5px]">100 <span className="text-[#6938EF]">%</span></span> of our tokens. After the sales are at least 70% of volume of a <span className="ml-[3px] border-[1px] border-[#CECECE] rounded-[4px] p-[1.5px]">100 <span className="text-[#6938EF]"> mins</span></span> timeline</p>

                </div>
              </div>
              
              <div>
                <Separator orientation="vertical" />
              </div>

              <div>
                <div className="flex flex-row space-x-3">
                  <img
                  src="./assets/resistanceLogo.svg"
                  />
                  <p className="text-[20px] font-bold">Resistance</p>
                </div>
                <div className="w-[374px] flex flex-col mt-10 space-y-3">
                  <p className="text-[16px]">This should be done till we sell <span className="border-[1px] rounded-[4px] p-[1.5px]">100 <span className="text-[#F4A100]">%</span></span> of our token balance</p>
                  <Separator/>
                  <p className="text-[16px]"> <span className="font-bold">Then If </span>in the next <span className="ml-[3px] border-[1px] border-[#F4A100] rounded-[4px] p-[1.5px]">100 <span className="text-[#F4A100]"> mins</span></span> timeline, we finish selling, there are at least 70% of buys in the timeline, then we buy with <span className="border-[1px] rounded-[4px] p-[1.5px]">100 <span className="text-[#F4A100]">%</span></span> of our funds (very quickly).</p>

                  <Separator/>
                  <p className="text-[16px]"> <span className="font-bold">Else If </span>in the next <span className="ml-[3px] border-[1px] border-[#CECECE] rounded-[4px] p-[1.5px]">100 <span className="text-[#F4A100]"> mins</span></span> timeline after we finished selling, there are at least 70% of sales in the timeline, then we dell <span className="border-[1px] rounded-[4px] p-[1.5px]">100 <span className="text-[#F4A100]">%</span></span> of our token holdings (very quickly).</p>

                  <Separator/>
                  <p className="text-[16px]">After we have bought with <span className="border-[1px] rounded-[4px] p-[1.5px]">100 <span className="text-[#F4A100]">%</span></span> of our funds, the bot waits then begins selling with <span className="border-[1px] rounded-[4px] p-[1.5px]">100 <span className="text-[#F4A100]">%</span></span> of our tokens. After the sales are at least 70% of volume of a <span className="ml-[3px] border-[1px] border-[#CECECE] rounded-[4px] p-[1.5px]">100 <span className="text-[#F4A100]"> mins</span></span> timeline</p>

                  <Separator/>
                  <p className="text-[16px]">After <span className="border-[1px] rounded-[4px] p-[1.5px]">100 <span className="text-[#F4A100]">%</span></span> of our tokens are sold, the bot waits then begins buying with <span className="border-[1px] rounded-[4px] p-[1.5px]">100 <span className="text-[#F4A100]">%</span></span> of our funds. After the buys are at least 70% of volume of a <span className="ml-[3px] border-[1px] border-[#CECECE] rounded-[4px] p-[1.5px]">100 <span className="text-[#F4A100]"> mins</span></span> timeline</p>

                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>

      <div className="h-[172px] bg-[#F7F7F7] border-t border-[#CFCFCF] border-[1px]">
        <div className="flex flex-row items-center justify-between px-20">
          <div className=" mt-10 w-[600px]">
            <Stepper index={activeStep} colorScheme='green' >
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepIndicator>
                    <StepStatus
                      complete={<StepIcon />}
                      incomplete={<StepNumber />}
                      active={<StepNumber />}
                    />
                  </StepIndicator>

                  <Box flexShrink='0'>
                    <StepTitle>{step.title}</StepTitle>
                  </Box>

                  <StepSeparator />
                </Step>
              ))}
            </Stepper>

          </div>
          <div className="flex items-center justify-center mt-10">
            <Button onClick={handleStart} className="w-[682px] h-[64px] rounded-[32px] bg-gradient-to-r from-[#6938EF] to-[#DE80FF] hover:scale-110 transition ease-in-out">
              <div className="flex flex-row items-center justify-center space-x-2">
                <p className="startText">START</p>
                <img
                src="./assets/MMWhite.svg"
                />
                <img
                src="./assets/purplesaleWhite.svg"
                />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FillUp