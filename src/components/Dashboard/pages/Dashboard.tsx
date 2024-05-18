import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import SupportAndResistanceDialog from "@/components/shared/SupportAndResistanceDialog"
import EditSupportAndResistanceContent from "@/components/shared/EditSupportAndResistanceContent"


const Dashboard = () => {

  const walletsData = [
    {
      index: "1",
      address: "0x17145c0...a17Eue74c",
      bnbAmount: "20 BNB",
      tokenAmount: "2.045 BTC",
    },
    {
      index: "2",
      address: "0x17145c0...a17Eue74c",
      bnbAmount: "20 BNB",
      tokenAmount: "2.045 BTC",
    },
    {
      index: "3",
      address: "0x17145c0...a17Eue74c",
      bnbAmount: "20 BNB",
      tokenAmount: "2.045 BTC",
    },
    {
      index: "4",
      address: "0x17145c0...a17Eue74c",
      bnbAmount: "20 BNB",
      tokenAmount: "2.045 BTC",
    },
    {
      index: "5",
      address: "0x17145c0...a17Eue74c",
      bnbAmount: "20 BNB",
      tokenAmount: "2.045 BTC",
    },
    {
      index: "6",
      address: "0x17145c0...a17Eue74c",
      bnbAmount: "20 BNB",
      tokenAmount: "2.045 BTC",
    },
    {
      index: "7",
      address: "0x17145c0...a17Eue74c",
      bnbAmount: "20 BNB",
      tokenAmount: "2.045 BTC",
    },
    {
      index: "8",
      address: "0x17145c0...a17Eue74c",
      bnbAmount: "20 BNB",
      tokenAmount: "2.045 BTC",
    },
    {
      index: "9",
      address: "0x17145c0...a17Eue74c",
      bnbAmount: "20 BNB",
      tokenAmount: "2.045 BTC",
    },
    {
      index: "10",
      address: "0x17145c0...a17Eue74c",
      bnbAmount: "20 BNB",
      tokenAmount: "2.045 BTC",
    },
  ]

  const Support = 'Support';
  const Resistance = 'Resistance';
  return (
    <div>
      <div className="flex flex-row space-x-4 items-center justify-center mt-5">
        <div className="flex items-center justify-center">
          <p className="text-[#8E8E8E]">Current MarketCap: <span className="font-semibold text-black">$2.3M</span></p>
        </div>
        <div className="flex items-center justify-center">
          <img
          src="./assets/dot.svg"
          />
        </div>
        <div className="flex items-center justify-center space-x-2">
          <p className="text-[#8E8E8E]">Support: <span className="font-semibold text-black">$2.3M</span></p>
          <div className="">
            <Dialog>
              <DialogTrigger className="flex flex-row items-center justify-center  space-x-1 hover:scale-110 transition ease-in-out">
                
                <p className="text-[16px] text-[#6938EF] ">Edit</p>
                <img
                src="./assets/edit.svg"
                />
              </DialogTrigger>
              <DialogContent className="w-[444px] h-[288px] rounded-[16px]">
                <DialogHeader>
                <DialogTitle>
                    <p className="text-[20px] font-bold">Edit Support</p>
                  </DialogTitle>
                </DialogHeader>
                <div>
                  <SupportAndResistanceDialog changeName={Support}/>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        
        <div className="flex items-center justify-center">
          <img
          src="./assets/dot.svg"
          />
        </div>

        <div className="flex items-center justify-center space-x-2">
          <p className="text-[#8E8E8E]">Resistance: <span className="font-semibold text-black">$2.3M</span></p>
          <div className="">
            <Dialog>
              <DialogTrigger className="flex flex-row items-center justify-center  space-x-1 hover:scale-110 transition ease-in-out">
                
                <p className="text-[16px] text-[#6938EF] ">Edit</p>
                <img
                src="./assets/edit.svg"
                />
              </DialogTrigger>
              <DialogContent className="w-[444px] h-[288px] rounded-[16px]">
                <DialogHeader>
                  <DialogTitle>
                    <p className="text-[20px] font-bold">Edit Resistance</p>
                  </DialogTitle>
                </DialogHeader>
                <div>
                  <SupportAndResistanceDialog changeName={Resistance}/>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img
          src="./assets/dot.svg"
          />
        </div>

        <div className="flex items-center justify-center">
          <p className="text-[#8E8E8E]">Transactions: <span className="font-semibold text-black">7,045</span></p>
        </div>

        <div className="flex items-center justify-center">
          <img
          src="./assets/dot.svg"
          />
        </div>

        <div className="flex items-center justify-center">
          <p className="text-[#8E8E8E]">Total Buy: <span className="font-semibold text-[#00A478]">54 (20 BNB)</span></p>
        </div>
        
        <div className="flex items-center justify-center">
          <img
          src="./assets/dot.svg"
          />
        </div>

        <div className="flex items-center justify-center">
          <p className="text-[#8E8E8E]">Total Sell: <span className="font-semibold text-[#C30000]">43 (20 BNB)</span></p>
        </div>

      </div>
      <div className="flex flex-row space-x-6 justify-center">
        <div className="flex flex-col space-y-10 mt-10 items-center justify-center">
          
          <div className="flex flex-row space-x-8">

            <div className="bg-[#F7F7F7] p-6 rounded-[16px] border-[1px] border-[#CFCFCF80] flex items-center justify-center flex-row space-x-3">
              <p className="text-[20px] font-bold">Take Profit</p>
              <div className="bg-white p-2 rounded-[12px] border-[1px] border-[#CFCFCF66] flex items-center justify-center">
                <p className="font-semibold text-[20px]">60%</p>
              </div>
              <div className="inputDivSelected rounded-[32px] w-[114px] h-[36px] flex items-center justify-center">
                <Button className="bg-white rounded-[32px] flex items-center justify-center w-[112px] h-[34px] hover:scale-110 hover:bg-slate-200">
                  <p className="validateText font-semibold text-[18px]" > Take Profit</p>
                </Button>
             </div>
            </div>

            <div className="bg-[#F7F7F7] p-6 rounded-[16px] border-[1px] border-[#CFCFCF80] flex items-center justify-center flex-row space-x-3">
              <p className="text-[20px] font-bold">Increase Lot</p>
              <div className="bg-white p-2 rounded-[12px] border-[1px] border-[#CFCFCF66] flex items-center justify-center">
                <p className="font-semibold text-[20px]">40%</p>
              </div>
              <div className="inputDivSelected rounded-[32px] w-[97px] h-[36px] flex items-center justify-center">
                <Button className="bg-white rounded-[32px] flex items-center justify-center w-[95px] h-[34px] hover:scale-110 hover:bg-slate-200">
                  <p className="validateText font-semibold text-[18px]" > Increase</p>
                </Button>
             </div>
            </div>
           
          </div>
          <div>
            <Card className="py-5 px-2 drop-shadow-md">
              <CardContent className="flex flex-row space-x-10">
                <div className="">
                  <div className="flex flex-row space-x-3">
                    <img
                    src="./assets/supportIcon.svg"
                    />
                    <p className="text-[20px] font-bold">Support</p>
                  </div>
                  <div className="w-[374px] flex flex-col mt-10 space-y-3">
                    <p className="text-[18px]">This should be done till we spend <span className="border-[1px] rounded-[4px] p-[1.5px]">100 <span className="">%</span></span> of our balance on buying</p>
                    <Separator/>
                    <p className="text-[16px]"> <span className="font-bold">Then If </span>in the next <span className="ml-[3px] border-[1px]  rounded-[4px] p-[1.5px]">100 <span className=""> mins</span></span> timeline after we finished buying, there are at least 70% of sales in the timeline, then we sell with <span className="border-[1px] rounded-[4px] p-[1.5px]">100 <span className="">%</span></span> of our token holdings (very quickly).</p>

                    <Separator/>
                    <p className="text-[16px]"> <span className="font-bold">Else If </span>in the next <span className="ml-[3px] border-[1px] border-[#CECECE] rounded-[4px] p-[1.5px]">100 <span className=""> mins</span></span> timeline after we finished buying, there are at least 70% of buys in the timeline, then we buy with <span className="border-[1px] rounded-[4px] p-[1.5px]">100 <span className="">%</span></span> of our token holdings (very quickly).</p>

                    <Separator/>
                    <p className="text-[16px]">After <span className="border-[1px] rounded-[4px] p-[1.5px]">100 <span className="">%</span></span> of our tokens are sold, the bot waits then begins buying with <span className="border-[1px] rounded-[4px] p-[1.5px]">100 <span className="">%</span></span> of our funds. After the buys are at least 70% of volume of a <span className="ml-[3px] border-[1px] border-[#CECECE] rounded-[4px] p-[1.5px]">100 <span className=""> mins</span></span> timeline</p>

                    <Separator/>
                    <p className="text-[16px]">After we have bought with <span className="border-[1px] rounded-[4px] p-[1.5px]">100 <span className="">%</span></span> of our funds, the bot waits then begins selling with <span className="border-[1px] rounded-[4px] p-[1.5px]">100 <span className="">%</span></span> of our tokens. After the sales are at least 70% of volume of a <span className="ml-[3px] border-[1px] border-[#CECECE] rounded-[4px] p-[1.5px]">100 <span className=""> mins</span></span> timeline</p>

                  </div>
                </div>
                
                <div>
                  <Separator orientation="vertical" />
                </div>

                <div>
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row space-x-3">
                      <img
                      src="./assets/resistanceLogo.svg"
                      />
                      <p className="text-[20px] font-bold">Resistance</p>
                    </div>
                    <Dialog>
                      <DialogTrigger>
                        <div className="flex flex-row items-center justify-center space-x-1 hover:scale-110 transition ease-in-out">
                          <p className="text-[16px] text-[#6938EF] ">Edit</p>
                          <img
                          src="./assets/edit.svg"
                          />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="w-[871px] h-[825px] min-w-[871px]">
                        <DialogHeader>
                          <DialogTitle>
                            <p className="text-[20px] font-bold">Edit Support & Resistance</p>
                          </DialogTitle>
                          <div className="flex flex-col items-center justify-center">
                            <div>
                              <Separator />
                            </div>
                            <EditSupportAndResistanceContent/>
                            
                          </div>

                        </DialogHeader>
                      </DialogContent>
                    </Dialog>

                  </div>
                  <div className="w-[374px] flex flex-col mt-10 space-y-3">
                    <p className="text-[16px]">This should be done till we sell <span className="border-[1px] rounded-[4px] p-[1.5px]">100 <span className="">%</span></span> of our token balance</p>
                    <Separator/>
                    <p className="text-[16px]"> <span className="font-bold">Then If </span>in the next <span className="ml-[3px] border-[1px]  rounded-[4px] p-[1.5px]">100 <span className=""> mins</span></span> timeline, we finish selling, there are at least 70% of buys in the timeline, then we buy with <span className="border-[1px] rounded-[4px] p-[1.5px]">100 <span className="">%</span></span> of our funds (very quickly).</p>

                    <Separator/>
                    <p className="text-[16px]"> <span className="font-bold">Else If </span>in the next <span className="ml-[3px] border-[1px] border-[#CECECE] rounded-[4px] p-[1.5px]">100 <span className=""> mins</span></span> timeline after we finished selling, there are at least 70% of sales in the timeline, then we dell <span className="border-[1px] rounded-[4px] p-[1.5px]">100 <span className="">%</span></span> of our token holdings (very quickly).</p>

                    <Separator/>
                    <p className="text-[16px]">After we have bought with <span className="border-[1px] rounded-[4px] p-[1.5px]">100 <span className="">%</span></span> of our funds, the bot waits then begins selling with <span className="border-[1px] rounded-[4px] p-[1.5px]">100 <span className="">%</span></span> of our tokens. After the sales are at least 70% of volume of a <span className="ml-[3px] border-[1px] border-[#CECECE] rounded-[4px] p-[1.5px]">100 <span className=""> mins</span></span> timeline</p>

                    <Separator/>
                    <p className="text-[16px]">After <span className="border-[1px] rounded-[4px] p-[1.5px]">100 <span className="">%</span></span> of our tokens are sold, the bot waits then begins buying with <span className="border-[1px] rounded-[4px] p-[1.5px]">100 <span className="">%</span></span> of our funds. After the buys are at least 70% of volume of a <span className="ml-[3px] border-[1px] border-[#CECECE] rounded-[4px] p-[1.5px]">100 <span className=""> mins</span></span> timeline</p>

                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>

        <div className="border-[1px] rounded-[16px] p-5 mt-10">
          <div>
            <p className="font-bold text-[20px]">Top Wallets🔥</p>
            <img
            src=""
            />
          </div>
          <Table className="mt-5">
            <TableBody>
              {walletsData.map((index) => (
                <TableRow key={index.index}>
                  <TableCell className="font-medium">{index.index}</TableCell>
                  <TableCell className="font-bold">{index.address}</TableCell>
                  <TableCell>
                    <img
                    src="./assets/dot.svg"
                    />
                  </TableCell>
                  <TableCell>{index.bnbAmount}</TableCell>
                  <TableCell>
                    <img
                    src="./assets/dot.svg"
                    />
                  </TableCell>
                  <TableCell className="text-right">{index.tokenAmount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

      </div>
    </div>
  )
}

export default Dashboard