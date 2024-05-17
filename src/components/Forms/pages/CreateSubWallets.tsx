import TopBarForms from "@/components/shared/TopBarForms";
import FormBottomBar from "@/components/shared/FormBottomBar"
// import { Button } from "@/components/ui/button";

const CreateSubWallets = () => {
  const buttonText = "Proceed";
  const nextLink = "/sub-wallets";
  const newValue = 50

  
  return (
    <div className="flex flex-col items-center justify-center mt-16 pb-10">
    <div className="mb-16">
      <TopBarForms prpgressValue = {newValue}/>
    </div>
    <div className="flex flex-col  w-[832px]">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <p className="text-[24px]"> <span className="1 text-black font-bold">New Profile</span> </p>
          <p className="text-[20px] text-gray-500 font-bold">BTC/USDT <span className="font-normal"> - Uniswap V2</span></p>
        </div>

        <div className="w-[832px] border-[2px] border-[#CFCFCF80] rounded-[16px] mt-10 mb-10">

        </div>
        
      </div>
    
      <div className="flex items-center justify-center">
        <FormBottomBar ButtonText = {buttonText} NextLink = {nextLink}/>
      </div>
    </div>
  </div>
  )
}

export default CreateSubWallets