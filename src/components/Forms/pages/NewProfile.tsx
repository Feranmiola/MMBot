import TopBarForms from "@/components/shared/TopBarForms";
import FormBottomBar from "@/components/shared/FormBottomBar"
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";


const NewProfile = () => {
  
  const { toast } = useToast()
  
  const walletAddress = 'uisdbfhj89234hjkadenfbjkwkk';
  const privateKey = "uisdbfhj89234hjkadenfbjkwkkuisdbfhj89234hjkadenfbjkwkkuisdbfhj89234hjkadenfbjkwkkuisdbfhj89234hjkadenfbjkwkk";
  const buttonText = "Proceed";
  const nextLink = "/sub-wallets";
  const newValue = 50;
  const initValue = 25;

  const handleCopy = (text: string) =>{
    toast({
      title: "Copied to Clipboard",
      description: "Text has been copied to clipboard",
    })
    navigator.clipboard.writeText(text);
  }






  return (
    <div className="flex flex-col items-center justify-center mt-16 pb-10">
    <div className="mb-16">
      <TopBarForms prpgressValue = {newValue} oldValue = {initValue}/>
    </div>
    <div className="flex flex-col  w-[832px]">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <p className="text-[24px]"> <span className="1 text-black font-bold">New Profile</span> </p>
          <p className="text-[20px] text-gray-500 font-bold">BTC/USDT <span className="font-normal"> - Uniswap V2</span></p>
        </div>

        <div className="w-[832px] border-[2px] border-[#CFCFCF80] rounded-[16px] mt-10 mb-10">
          <div className="p-8 flex flex-col">
            <div className="flex flex-row">
              <img
              src="./assets/WalletNew.svg"
              />
              <p className="ml-4 text-[20px] font-normal">Newly Created Wallet</p>
            </div>
            <div className="flex flex-row mt-5">
              <p className=" font-extrabold text-[32px]">{walletAddress}</p>
              <img
              src="./assets/copyGradient.svg"
              className="mt-[-46px] ml-[-40px] cursor-pointer hover:scale-150 transition ease-in-out "
              onClick={() => handleCopy(walletAddress)}
              />
            </div>

            <div className="flex flex-row">
              <img
              src="./assets/privateKey.svg"
              />
              <p className="ml-4 text-[20px] font-normal">Private Key</p>
            </div>
            <div className="bg-[#F7F7F7] mt-5 p-5 ">
              <p className="w-[703px] text-[20px] pkText" >{privateKey}</p>
            </div>

            <div className="inputDivSelected rounded-[32px] w-[110px] h-[42px] flex items-center justify-center mt-4">
              <Button className="bg-white rounded-[32px] hover:scale-110 hover:bg-slate-200" onClick={() => handleCopy(privateKey)}>
                <p className="validateText font-medium text-[18px]"> Copy Key</p>
              </Button>
            </div>
          </div>
        </div>
        
      </div>
    
      <div className="flex items-center justify-center">
        <FormBottomBar ButtonText = {buttonText} NextLink = {nextLink}/>
      </div>
    </div>
  </div>
  )
}

export default NewProfile