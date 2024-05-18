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
                      <p className="text-[18px]">This should be done till we spend</p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#6938EF] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                        <Input placeholder="%" className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                        <p className="text-[#6938EF] ml-[-12px]">%</p>
                      </div>
                      <p>of</p>
                    </div>
                    <div>
                        <p>our balance on buying</p>
                    </div>
                  </div>

                  <Separator/>

                  <div className="flex flex-col space-y-1">
                    <div className="flex flex-row items-center space-x-1">
                      <p className="text-[18px]"><span className="font-bold">Then If </span>in the next</p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#6938EF] rounded-[4px]  flex flex-row items-start justify-start w-[76px]">
                        <Input className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                        <p className="text-[#6938EF] ml-[-12px]">mins</p>
                      </div>
                      <p>timeline after we</p>
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                        <p>finished buying, there are at least</p>
                        <div className="border-[1px] border-[#CECECE] focus-within:border-[#6938EF] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input placeholder="%" className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[#6938EF] ml-[-12px]">%</p>
                      </div>
                      <p>of sales</p>
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                      <p>in the timeline, then we sell with</p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#6938EF] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input placeholder="%" className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[#6938EF] ml-[-12px]">%</p>
                      </div>
                      <p>of our </p>
                    </div>
                    <p>token holdings (very quickly).</p>
                  </div>


                  <Separator/>

                  <div className="flex flex-col space-y-1">
                    <div className="flex flex-row items-center space-x-1">
                      <p className="text-[18px]"><span className="font-bold">Else If </span>in the next</p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#6938EF] rounded-[4px]  flex flex-row items-start justify-start w-[76px]">
                        <Input className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                        <p className="text-[#6938EF] ml-[-12px]">mins</p>
                      </div>
                      <p>timeline after we</p>
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                        <p>finished buying, there are at least</p>
                        <div className="border-[1px] border-[#CECECE] focus-within:border-[#6938EF] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input placeholder="%" className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[#6938EF] ml-[-12px]">%</p>
                      </div>
                      <p>of buys</p>
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                      <p>in the timeline, then we buy with</p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#6938EF] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input placeholder="%" className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[#6938EF] ml-[-12px]">%</p>
                      </div>
                      <p>of our </p>
                    </div>
                    <p>funds (very quickly).</p>
                  </div>

                  <Separator/>

                  <div className="flex flex-col space-y-1 pt-5">
                    <div className="flex flex-row items-center space-x-1">
                      <p className="text-[18px]">After</p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#6938EF] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input placeholder="%" className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[#6938EF] ml-[-12px]">%</p>
                      </div>
                      <p>of our tokens are sold, the bot waits</p>
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                        <p>then begins buying with</p>
                        <div className="border-[1px] border-[#CECECE] focus-within:border-[#6938EF] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input placeholder="%" className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[#6938EF] ml-[-12px]">%</p>
                      </div>
                      <p>of our funds. After</p>
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                      <p>the buys are at least</p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#6938EF] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input placeholder="%" className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[#6938EF] ml-[-12px]">%</p>
                      </div>
                      <p>of volume of a  </p>
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#6938EF] rounded-[4px]  flex flex-row items-start justify-start w-[76px]">
                        <Input className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                        <p className="text-[#6938EF] ml-[-12px]">mins</p>
                      </div>
                      <p>timeline  </p>
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
                      <p className="text-[18px]">After we have bought with </p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#6938EF] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input placeholder="%" className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[#6938EF] ml-[-12px]">%</p>
                      </div>
                      <p>of our funds</p>
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                        <p>the bot waits then begins selling with</p>
                        <div className="border-[1px] border-[#CECECE] focus-within:border-[#6938EF] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input placeholder="%" className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[#6938EF] ml-[-12px]">%</p>
                      </div>
                      <p>of</p>
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                      <p>our tokens. After the sales are at least</p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#6938EF] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input placeholder="%" className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[#6938EF] ml-[-12px]">%</p>
                      </div>
                      <p>of</p>
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                      <p>volume of a</p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#6938EF] rounded-[4px]  flex flex-row items-start justify-start w-[76px]">
                        <Input className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                        <p className="text-[#6938EF] ml-[-12px]">mins</p>
                      </div>
                      <p>timeline  </p>
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
                      <p className="text-[18px]">This should be done till we sell</p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#F4A100] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                        <Input placeholder="%" className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                        <p className="text-[#F4A100] ml-[-12px]">%</p>
                      </div>
                      <p>of our</p>
                    </div>
                    <div>
                        <p>our token balance</p>
                    </div>
                  </div>
                  
                  <Separator/>
                  
                  <div className="flex flex-col space-y-1">
                    <div className="flex flex-row items-center space-x-1">
                      <p className="text-[18px]"><span className="font-bold">Then If </span>in the next</p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#F4A100] rounded-[4px]  flex flex-row items-start justify-start w-[76px]">
                        <Input className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                        <p className="text-[#F4A100] ml-[-12px]">mins</p>
                      </div>
                      <p>timeline we finish</p>
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                        <p>selling, there are at least</p>
                        <div className="border-[1px] border-[#CECECE] focus-within:border-[#F4A100] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input placeholder="%" className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[#F4A100] ml-[-12px]">%</p>
                      </div>
                      <p>of buys in the</p>
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                      <p>timeline, then we buy with</p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#F4A100] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input placeholder="%" className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[#F4A100] ml-[-12px]">%</p>
                      </div>
                      <p>of our funds </p>
                    </div>
                    <p>(very quickly).</p>
                  </div>

                  <Separator/>

                  <div className="flex flex-col space-y-1">
                    <div className="flex flex-row items-center space-x-1">
                      <p className="text-[18px]"><span className="font-bold">Else If </span>in the next</p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#F4A100] rounded-[4px]  flex flex-row items-start justify-start w-[76px]">
                        <Input className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                        <p className="text-[#F4A100] ml-[-12px]">mins</p>
                      </div>
                      <p>timeline after we</p>
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                        <p>finished selling, there are at least</p>
                        <div className="border-[1px] border-[#CECECE] focus-within:border-[#F4A100] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input placeholder="%" className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[#F4A100] ml-[-12px]">%</p>
                      </div>
                      <p>of sales</p>
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                      <p>in the timeline, then we sell with</p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#F4A100] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input placeholder="%" className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[#F4A100] ml-[-12px]">%</p>
                      </div>
                      <p>of our </p>
                    </div>
                    <p>token holdings (very quickly).</p>
                  </div>
                  
                  <div className="flex flex-col space-y-1 pt-5">
                    <div className="flex flex-row items-center space-x-1">
                      <p className="text-[18px]">After we have bought with </p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#F4A100] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input placeholder="%" className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[#F4A100] ml-[-12px]">%</p>
                      </div>
                      <p>of our funds</p>
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                        <p>the bot waits then begins selling with</p>
                        <div className="border-[1px] border-[#CECECE] focus-within:border-[#F4A100] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input placeholder="%" className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[#F4A100] ml-[-12px]">%</p>
                      </div>
                      <p>of</p>
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                      <p>our tokens. After the sales are at least</p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#F4A100] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input placeholder="%" className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[#F4A100] ml-[-12px]">%</p>
                      </div>
                      <p>of</p>
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                      <p>volume of a</p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#F4A100] rounded-[4px]  flex flex-row items-start justify-start w-[76px]">
                        <Input className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                        <p className="text-[#F4A100] ml-[-12px]">mins</p>
                      </div>
                      <p>timeline  </p>
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
                      <p className="text-[18px]">After</p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#F4A100] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input placeholder="%" className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[#F4A100] ml-[-12px]">%</p>
                      </div>
                      <p>of our tokens are sold, the bot waits</p>
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                        <p>then begins buying with</p>
                        <div className="border-[1px] border-[#CECECE] focus-within:border-[#F4A100] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input placeholder="%" className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[#F4A100] ml-[-12px]">%</p>
                      </div>
                      <p>of our funds. After</p>
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                      <p>the buys are at least</p>
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#F4A100] rounded-[4px]  flex flex-row items-start justify-start w-[56px]">
                          <Input placeholder="%" className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                          <p className="text-[#F4A100] ml-[-12px]">%</p>
                      </div>
                      <p>of volume of a  </p>
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                      <div className="border-[1px] border-[#CECECE] focus-within:border-[#F4A100] rounded-[4px]  flex flex-row items-start justify-start w-[76px]">
                        <Input className="shad-input-custom2B border-0 ring-0 ring-offset-0 rounded-[4px] w-[50px] h-[24px]"/>
                        <p className="text-[#F4A100] ml-[-12px]">mins</p>
                      </div>
                      <p>timeline  </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
  )
}

export default SupportAndResistanceEditingContent