
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input";

interface Props{
  changeName: string;
}

const SupportAndResistanceDialog : React.FC<Props> = ({ changeName }) => {

    const handleUpdate = () =>{
        console.log(changeName);
    }
  return (
    <div className="flex items-center justify-center">
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

        <Separator/>

        <div className="flex flex-row justify-between items-center ">
        <p className="text-[#8E8E8E] text-[16px]">Total: <span className="text-[#1D1D1D] font-medium">410 BNB</span></p>
          <Button onClick={handleUpdate}  className="bg-gradient-to-r from-[#6938EF] to-[#DE80FF] w-[117px] hover:scale-110 transition ease-in-out h-[48px] text-[16px] rounded-full">Update</Button>
        </div>

        </div>
    </div>
  )
}

export default SupportAndResistanceDialog