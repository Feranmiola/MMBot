import { Outlet } from "react-router-dom"
import SettingsLeftbar from "../shared/SettingsLeftbar"
import TopBarDashboard from "../shared/TopBarDashboard"
import { Separator } from "../ui/separator"


const SettingsLayout = () => {
  return (
    <div className="bg-[#FBFAFF]">
      <div>
        <TopBarDashboard/>
      </div>

      <div className="flex flex-col space-y-10 items-center justify-center">
        <div className="w-[847px] h-[596px] bg-white drop-shadow rounded-[16px] border-[1px] border-[#CFCFCF80]-lg p-6 space-y-10 mt-7">
          <div className="flex flex-row items-center space-x-2">
          `<img
            src="./assets/settingsColored.svg"
            />
            <p className="text-[20px] font-semibold">Settings</p>
          </div>

          <div className="flex flex-row space-x-7">
            <div className="">
              <SettingsLeftbar/>
            </div>
            
            <div>
              <Separator orientation="vertical"/>
            </div>
            <div>
              <Outlet/>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center pb-9">
          <div className="rounded-full bg-[#F4F3FF] p-3 flex items-center justify-center hover:scale-110 transition ease-in-out hover:bg-[#bab6ea]">
            <img
            src="./assets/back.svg"
            />
          </div>
          <p className="text-[20px] text-[#6938EF] font-semibold">Return to Home</p>

        </div>

      </div>
    </div>
  )
}

export default SettingsLayout