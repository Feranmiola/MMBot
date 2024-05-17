
const TopBarDashboard = () => {

  const wallet = '0x17145c07869...41Edad17E74c';
  return (
    <div className="px-16 bg-[#F4F3FF] h-[131px]">
      <div className="">
        <div className="flex flex-row justify-between items-center pt-10">
          <div className="flex flex-row items-center justify-center ">
            <p className="text-[24px] font-bold">New Profile</p>
            <img
            src="./assets/dropDown.svg"
            />
          </div>
          <div className="flex flex-row space-x-3">
            <div className="flex flex-row bg-white rounded-[8px] p-2 px-3">
              <img
              src="./assets/walletPurple.svg"
              />
              <p className="text-[16px] font-semibold ml-2">{wallet}</p>
            </div>
            <div className="bg-white p-2 rounded-[8px]">
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