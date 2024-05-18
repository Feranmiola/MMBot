import { Input } from "@/components/ui/input"

import { Separator } from "@/components/ui/separator"


const SupportAndResistanceEditingContent = () => {
  return (
    <div className="flex flex-row space-x-4">
              <div className="">
                <div className="flex flex-row space-x-3">
                  <img
                  src="./assets/supportIcon.svg"
                  />
                  <p className="text-[20px] font-bold">Support</p>
                </div>
                <div className="w-[374px] flex flex-col mt-10 space-y-1">
                  <div className="flex flex-col">
                    <div className="flex flex-row items-center space-x-1">
                      <p className="text-[14px]">This should be done till we spend</p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#6938EF] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                        <Input className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                        <p className="text-[14px] text-[#6938EF] ml-[-12px]">%</p>
                      </div>
                      <p className="text-[14px]">of our balance</p>
                    </div>
                    <div>
                        <p className="text-[14px]">on buying</p>
                    </div>
                  </div>

                  <Separator/>

                  <div className="flex flex-col space-y-1">
                    <div className="flex flex-row items-center space-x-1">
                      <p className="text-[14px]"><span className="font-bold">Then If </span>in the next</p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#6938EF] rounded-[4px]  flex flex-row items-start justify-start w-[76px]">
                        <Input className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                        <p className="text-[14px] text-[#6938EF] ml-[-12px]">mins</p>
                      </div>
                      <p className="text-[14px]">timeline after we finished </p>
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                        <p className="text-[14px]">buying, there are at least</p>
                        <div className="border-[1px] border-[#CECECE] focus-within:border-[#6938EF] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[14px] text-[#6938EF] ml-[-12px]">%</p>
                      </div>
                      <p className="text-[14px]">of sales in the timeline,</p>
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                      <p className="text-[14px]">then we sell with</p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#6938EF] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[14px] text-[#6938EF] ml-[-12px]">%</p>
                      </div>
                      <p className="text-[14px]">of our token holdings  </p>
                    </div>
                    <p className="text-[14px]">.(very quickly)</p>
                  </div>


                  <Separator/>

                  <div className="flex flex-col space-y-1">
                    <div className="flex flex-row items-center space-x-1">
                      <p className="text-[14px]"><span className="font-bold">Else If </span>in the next</p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#6938EF] rounded-[4px]  flex flex-row items-start justify-start w-[76px]">
                        <Input className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                        <p className="text-[14px] text-[#6938EF] ml-[-12px]">mins</p>
                      </div>
                      <p className="text-[14px]">timeline after we finished</p>
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                        <p className="text-[14px]"> buying, there are at least</p>
                        <div className="border-[1px] border-[#CECECE] focus-within:border-[#6938EF] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[14px] text-[#6938EF] ml-[-12px]">%</p>
                      </div>
                      <p className="text-[14px]">of buys in the timeline,</p>
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                      <p className="text-[14px]">then we buy with</p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#6938EF] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[14px] text-[#6938EF] ml-[-12px]">%</p>
                      </div>
                      <p className="text-[14px]">of our funds (very quickly)</p>
                    </div>
                  </div>

                  <Separator/>

                  <div className="flex flex-col space-y-1 pt-5">
                    <div className="flex flex-row items-center space-x-1">
                      <p className="text-[14px]">After</p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#6938EF] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[14px] text-[#6938EF] ml-[-12px]">%</p>
                      </div>
                      <p className="text-[14px]">of our tokens are sold, the bot waits then</p>
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                        <p className="text-[14px]"> begins buying with</p>
                        <div className="border-[1px] border-[#CECECE] focus-within:border-[#6938EF] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[14px] text-[#6938EF] ml-[-12px]">%</p>
                      </div>
                      <p className="text-[14px]">of our funds. After the buys</p>
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                      <p className="text-[14px]">are at least</p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#6938EF] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[14px] text-[#6938EF] ml-[-12px]">%</p>
                      </div>
                      <p className="text-[14px]">of volume of a  </p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#6938EF] rounded-[4px]  flex flex-row items-start justify-start w-[76px]">
                        <Input className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                        <p className="text-[14px] text-[#6938EF] ml-[-12px]">mins</p>
                      </div>
                      <p className="text-[14px]">timeline  </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center py-5">
                    <Separator/>
                    <div className="absolute text-[#CECECE] bg-white px-2">
                        or
                    </div>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <div className="flex flex-row items-center space-x-1">
                      <p className="text-[14px]">After we have bought with </p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#6938EF] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[14px] text-[#6938EF] ml-[-12px]">%</p>
                      </div>
                      <p className="text-[14px]">of our funds the bot</p>
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                        <p className="text-[14px]">waits then begins selling with</p>
                        <div className="border-[1px] border-[#CECECE] focus-within:border-[#6938EF] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[14px] text-[#6938EF] ml-[-12px]">%</p>
                      </div>
                      <p className="text-[14px]">of our tokens.</p>
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                      <p className="text-[14px]">After the sales are at least</p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#6938EF] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[14px] text-[#6938EF] ml-[-12px]">%</p>
                      </div>
                      <p className="text-[14px]">of volume of a</p>
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#6938EF] rounded-[4px]  flex flex-row items-start justify-start w-[76px]">
                        <Input className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                        <p className="text-[14px] text-[#6938EF] ml-[-12px]">mins</p>
                      </div>
                      <p className="text-[14px]">timeline  </p>
                    </div>
                  </div>

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
                <div className="w-[374px] flex flex-col mt-10 space-y-1">
                  <div className="flex flex-col">
                    <div className="flex flex-row items-center space-x-1">
                      <p className="text-[14px]">This should be done till we sell</p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#F4A100] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                        <Input className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                        <p className="text-[14px] text-[#F4A100] ml-[-12px]">%</p>
                      </div>
                      <p className="text-[14px]">of our</p>
                    </div>
                    <div>
                        <p className="text-[14px]">our token balance</p>
                    </div>
                  </div>
                  
                  <Separator/>
                  
                  <div className="flex flex-col space-y-1">
                    <div className="flex flex-row items-center space-x-1">
                      <p className="text-[14px]"><span className="font-bold">Then If </span>in the next</p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#F4A100] rounded-[4px]  flex flex-row items-start justify-start w-[76px]">
                        <Input className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                        <p className="text-[14px] text-[#F4A100] ml-[-12px]">mins</p>
                      </div>
                      <p className="text-[14px]">timeline we finish</p>
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                        <p className="text-[14px]">selling, there are at least</p>
                        <div className="border-[1px] border-[#CECECE] focus-within:border-[#F4A100] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[14px] text-[#F4A100] ml-[-12px]">%</p>
                      </div>
                      <p className="text-[14px]">of buys in the</p>
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                      <p className="text-[14px]">timeline, then we buy with</p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#F4A100] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[14px] text-[#F4A100] ml-[-12px]">%</p>
                      </div>
                      <p className="text-[14px]">of our funds </p>
                    </div>
                    <p className="text-[14px]">(very quickly).</p>
                  </div>

                  <Separator/>

                  <div className="flex flex-col space-y-1">
                    <div className="flex flex-row items-center space-x-1">
                      <p className="text-[14px]"><span className="font-bold">Else If </span>in the next</p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#F4A100] rounded-[4px]  flex flex-row items-start justify-start w-[76px]">
                        <Input className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                        <p className="text-[14px] text-[#F4A100] ml-[-12px]">mins</p>
                      </div>
                      <p className="text-[14px]">timeline after we</p>
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                        <p className="text-[14px]">finished selling, there are at least</p>
                        <div className="border-[1px] border-[#CECECE] focus-within:border-[#F4A100] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[14px] text-[#F4A100] ml-[-12px]">%</p>
                      </div>
                      <p className="text-[14px]">of sales</p>
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                      <p className="text-[14px]">in the timeline, then we sell with</p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#F4A100] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[14px] text-[#F4A100] ml-[-12px]">%</p>
                      </div>
                      <p className="text-[14px]">of our </p>
                    </div>
                    <p className="text-[14px]">token holdings (very quickly).</p>
                  </div>
                  
                  <div className="flex flex-col space-y-1 pt-2">
                    <div className="flex flex-row items-center space-x-1">
                      <p className="text-[14px]">After we have bought with </p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#F4A100] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[14px] text-[#F4A100] ml-[-12px]">%</p>
                      </div>
                      <p className="text-[14px]">of our funds the bot</p>
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                        <p className="text-[14px]">waits then begins selling with</p>
                        <div className="border-[1px] border-[#CECECE] focus-within:border-[#F4A100] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[14px] text-[#F4A100] ml-[-12px]">%</p>
                      </div>
                      <p className="text-[14px]">of our tokens.</p>
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                      <p className="text-[14px]">After the sales are at least</p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#F4A100] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[14px] text-[#F4A100] ml-[-12px]">%</p>
                      </div>
                      <p className="text-[14px]">of volume of a</p>
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#F4A100] rounded-[4px]  flex flex-row items-start justify-start w-[76px]">
                        <Input className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                        <p className="text-[14px] text-[#F4A100] ml-[-12px]">mins</p>
                      </div>
                      <p className="text-[14px]">timeline  </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center py-5">
                    <Separator/>
                    <div className="absolute text-[#CECECE] bg-white px-2">
                        or
                    </div>
                  </div>
                  
                  
                  <div className="flex flex-col space-y-1 ">
                    <div className="flex flex-row items-center space-x-1">
                      <p className="text-[14px]">After</p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#F4A100] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[14px] text-[#F4A100] ml-[-12px]">%</p>
                      </div>
                      <p className="text-[14px]">of our tokens are sold, the bot waits then</p>
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                        <p className="text-[14px]"> begins buying with</p>
                        <div className="border-[1px] border-[#CECECE] focus-within:border-[#F4A100] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[14px] text-[#F4A100] ml-[-12px]">%</p>
                      </div>
                      <p className="text-[14px]">of our funds. After the buys</p>
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                      <p className="text-[14px]">are at least</p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#F4A100] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[14px] text-[#F4A100] ml-[-12px]">%</p>
                      </div>
                      <p className="text-[14px]">of volume of a  </p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#F4A100] rounded-[4px]  flex flex-row items-start justify-start w-[76px]">
                        <Input className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                        <p className="text-[14px] text-[#F4A100] ml-[-12px]">mins</p>
                      </div>
                      <p className="text-[14px]">timeline  </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
  )
}

export default SupportAndResistanceEditingContent