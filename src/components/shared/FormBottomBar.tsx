import React from "react"
import { Button } from "../ui/button"

interface Props{
  ButtonText : string;
}

const FormBottomBar: React.FC<Props> = ({ ButtonText }) => {


  return (
    <div className="flex items-center ">
      <div className="flex flex-row space-x-[470px]">
        <div className=" flex items-center justify-centerflex-row">
          
          <p className="w-[70px] text-[12px] text-[#B7B7BD]">Powered By</p>
          
          <img
          src="./assets/purpleSaleLogo.svg"
          />
          
        </div>
        <div className="flex">
          
          <Button className="bg-gradient-to-r from-[#6938EF] to-[#DE80FF] w-[200px] hover:scale-110 transition ease-in-out delay-150 duration-300 h-[60px] text-[16px] rounded-full">{ButtonText}</Button>
        </div>
      </div>
        
    </div>
  )
}

export default FormBottomBar