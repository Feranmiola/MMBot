import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


const FundSuballet = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div>
        <Card className=" drop-shadow">
          <CardHeader>
            <CardTitle>Fund Sub-Wallets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-6">

              <div>
                <p className="text-[20px] font-semibold">Amount Per Wallet</p>
                <div className=" mt-3 inputDivFocus items-center justify-center flex h-[64px] w-[360px] rounded-[12px]">
                  <div className="bg-[#F7F7F7] w-[358px] flex flex-row space-x-4 items-center justify-center rounded-[12px]">
                    <Input className="shad-input-fillup" placeholder="Enter Amount"/>
                    <p className="pr-4 text-[20px] text-[#1D1D1D99]">BNB</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[20px] font-semibold">No. of Wallets</p>
                <div className=" mt-3 inputDivFocus items-center justify-center flex h-[64px] w-[360px] rounded-[12px]">
                  <div className="bg-[#F7F7F7] w-[358px] flex flex-row space-x-4 items-center justify-center rounded-[12px]">
                    <Input className="shad-input-fillup" placeholder="Enter Number"/>
                    <p className="pr-4 validateText text-[16px]">Max</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-row justify-between items-center ">
                <p className="text-[#8E8E8E] text-[16px]">Total: <span className="text-[#1D1D1D] font-medium">410 BNB</span></p>
                <Button className="bg-gradient-to-r from-[#6938EF] to-[#DE80FF] w-[160px] hover:scale-110 transition ease-in-out h-[60px] text-[16px] rounded-full">Fund Wallets</Button>
              </div>

            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  )
}

export default FundSuballet