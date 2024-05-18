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
import { Label } from "@/components/ui/label";

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
import SupportAndResistanceEditingContent from "@/components/shared/SupportAndResistanceEditingContent"
import { useToast } from "@/components/ui/use-toast"

const FillUp = () => {
  const [radioValue, setRadioValue] = useState(0);
  const { toast } = useToast()

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
    toast({
      title: "Starting Bot",
      description: "The bot is starting",
    })
    navigate('/dashboard');

  }
  
  return (
    <div>
      <div className="flex  justify-center flex-row space-x-3 mt-20 pb-20">
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
                      <Label htmlFor="option-one" className="bg-white w-[113px] rounded-[12px] h-[46px] flex items-center justify-center space-x-3">
                        <RadioGroupItem onClick={() => setRadioValue(1)} value="option-one" id="option-one" />
                        <p>Low</p>
                      </Label>
                    </div>
                    <div className={`flex items-center justify-center rounded-[12px] border-[1px] border-[#CFCFCF66] space-x-2 w-[114px] h-[48px] ${useRadio(2)}`}>
                      <Label htmlFor="option-two" className="bg-white w-[113px] rounded-[12px] h-[46px] flex items-center justify-center space-x-3">
                        <RadioGroupItem onClick={() => setRadioValue(2)} value="option-two" id="option-two" />
                        <p>Mid</p>
                      </Label>
                    </div>
                    <div className={`flex items-center justify-center rounded-[12px] border-[1px] border-[#CFCFCF66] space-x-2 w-[114px] h-[48px] ${useRadio(3)}`}>
                      <Label htmlFor="option-three" className="bg-white w-[113px] rounded-[12px] h-[46px] flex items-center justify-center space-x-3">
                        <RadioGroupItem onClick={() => setRadioValue(3)} value="option-three" id="option-three" />
                        <p>High</p>
                      </Label>
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
            <div className="px-2 flex items-center justify-center5 pb-2">
              <SupportAndResistanceEditingContent/>
            </div>
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