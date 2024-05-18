import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const TopBarDashboard = () => {

  const wallet = '0x17145c07869...41Edad17E74c';

  const navigate = useNavigate()

  const handleSettings=()=>{
    navigate('/addwallets')
  }
  return (
    <div className="px-16 bg-[#F4F3FF] h-[131px]">
      <div className="">
        <div className="flex flex-row justify-between items-center pt-10">
          <DropdownMenu>
            <DropdownMenuTrigger>
            <div className="flex flex-row items-center justify-center cursor-pointer hover:scale-110 transition ease-in-out ">
              <p className="text-[24px] font-bold">New Profile</p>
              <img
              src="./assets/dropDown.svg"
              />
            </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <div className="w-[200px] px-4">
                <DropdownMenuLabel className="text-[20px] font-bold">My Profiles</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-[16px] font-medium">Profile 1</DropdownMenuItem>
                <DropdownMenuItem className="text-[16px] font-medium">Profile 2</DropdownMenuItem>
                <DropdownMenuItem className="text-[16px] font-medium">Profile 3</DropdownMenuItem>
                <DropdownMenuItem className="text-[16px] font-medium">Profile $</DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex flex-row space-x-3">
            <div className="flex flex-row bg-white rounded-[8px] p-2 px-3 cursor-pointer hover:scale-110 transition ease-in-out">
              <img
              src="./assets/walletPurple.svg"
              />
              <p className="text-[16px] font-semibold ml-2">{wallet}</p>
            </div>
            <div className="bg-white p-2 rounded-[8px] cursor-pointer hover:scale-110 transition ease-in-out hover:bg-slate-100" onClick={handleSettings}>
              <img
              src="./assets/settings.svg"  
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-[20px] font-semibold text-[#6A39F0]">BTC/ USDT <span className="font-normal"> - Uniswap V2</span></p>
      </div>
    </div>
  )
}

export default TopBarDashboard