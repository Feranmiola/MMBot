import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const AddWallets = () => {

  const [walletAmount, setWalletAmount] = useState(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setWalletAmount(Number(inputValue));
  };

const handleSubmit =() =>{
  console.log(walletAmount);
}

  return (
    <div>
      <p className="text-[20px] font-bold">Add Wallets</p>
      
      <div>
        <p className="text-[20px] font-medium">No. of Wallets</p>
        <div className=" mt-3 inputDivFocus items-center justify-center flex h-[64px] w-[553px] rounded-[12px]">
          <div className="bg-[#F7F7F7] h-[62px] w-[551px] flex flex-row space-x-4 items-center justify-center rounded-[12px] focus-within:bg-white">
            <Input className="shad-input-fillup-noDM w-[530px] font-semibold text-[20px] " placeholder="Enter Number" onChange={handleInputChange}/>
            <p className="pr-4 validateText text-[16px] text-[]#6938EF">Max</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center mt-8">
        <p className="tezt-[16px] font-light mt-2 ml-1">Total Sub-Wallets <span className=" font-semibold">{walletAmount}</span></p>
        <div className="flex">
          <Button onClick={handleSubmit} className="bg-gradient-to-r from-[#6938EF] to-[#DE80FF] w-[200px] hover:scale-110 transition ease-in-out h-[60px] text-[16px] rounded-full">Add Wallets</Button>
        </div>
      </div>
    </div>
  )
}

export default AddWallets