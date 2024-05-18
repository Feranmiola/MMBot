import TopBarForms from "@/components/shared/TopBarForms";
import FormBottomBar from "@/components/shared/FormBottomBar"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Pagination,
  
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"


import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"

const CreateSubWallets = () => {
  const [isGenerated, setisGenerated] = useState(false)
  const buttonText = "Proceed to Account";
  const nextLink = "/sub-wallets";
  const newValue = 50;
  const initValue = 30;

  const [walletAmount, setWalletAmount] = useState(0)
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setWalletAmount(Number(inputValue));
  };

  const handleGenerate = () =>{
    setisGenerated(true);
  }


  const tableData = [
    { index: 1, address: '0x17145c085E4553C522454e217268941Edad17E74c' },
    { index: 2, address: '0x17145c085E4553C522454e217268941Edad17E74c' },
    { index: 3, address: '0x17145c085E4553C522454e217268941Edad17E74c' },
    { index: 4, address: '0x17145c085E4553C522454e217268941Edad17E74c' },
    { index: 5, address: '0x17145c085E4553C522454e217268941Edad17E74c' },
    { index: 6, address: '0x17145c085E4553C522454e217268941Edad17E74c' },
    { index: 7, address: '0x17145c085E4553C522454e217268941Edad17E74c' },
    { index: 8, address: '0x17145c085E4553C522454e217268941Edad17E74c' },
    { index: 9, address: '0x17145c085E4553C522454e217268941Edad17E74c' },
    { index: 10, address: '0x17145c085E4553C522454e217268941Edad17E74c' },
    { index: 11, address: '0x17145c085E4553C522454e217268941Edad17E74c' },
    { index: 12, address: '0x17145c085E4553C522454e217268941Edad17E74c' },
    { index: 13, address: '0x17145c085E4553C522454e217268941Edad17E74c' },
    { index: 14, address: '0x17145c085E4553C522454e217268941Edad17E74c' },
    { index: 15, address: '0x17145c085E4553C522454e217268941Edad17E74c' },
    { index: 16, address: '0x17145c085E4553C522454e217268941Edad17E74c' },
    { index: 17, address: '0x17145c085E4553C522454e217268941Edad17E74c' },
    { index: 18, address: '0x17145c085E4553C522454e217268941Edad17E74c' },
    { index: 19, address: '0x17145c085E4553C522454e217268941Edad17E74c' },
    { index: 20, address: '0x17145c085E4553C522454e217268941Edad17E74c' },
  ];

  const [rowsPerPage] = useState(6);
  const [currenttPage, setCurrentpage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(rowsPerPage);

  const totalPages = Math.ceil(tableData.length / rowsPerPage);

  // Render the pagination links
  // const paginationLinks = [];
  // for (let i = 1; i <= totalPages; i++) {
  //   paginationLinks.push(
  //     <PaginationItem key={i}>
  //       {startIndex === i ? (
  //         <PaginationLink href="#" isActive className="border-[1px]">{i}</PaginationLink>
  //       ): (
  //         <PaginationLink href="#">{i}</PaginationLink>
  //       )}
  //     </PaginationItem>
  //   );
  // }



  
  return (
    <div className="flex flex-col items-center justify-center mt-16 pb-10">
    <div className="mb-16">
      <TopBarForms prpgressValue = {newValue} oldValue = {initValue}/>
    </div>
    <div className="flex flex-col  w-[832px]">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-between">
            <p className="text-[24px]"> <span className="1 text-black font-bold">New Profile</span> </p>
            <div className="flex flex-row space-x-3">
              <img
              src="./assets/WalletNew.svg"
              />
              <p className="text-[20px]">Main Wallet</p>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <p className="text-[20px] text-gray-500 font-bold">BTC/USDT <span className="font-normal"> - Uniswap V2</span></p>
            <div className="flex flex-row space-x-3 items-center justify-center border-[1px] rounded-[16px] p-2 border-[#CFCFCF]">
              <p>0x17145c07869...41Edad17E74c</p>
              <img
              src="./assets/copyLogoSingle.svg"
              />
            </div>
          </div>
        </div>

        <div className="w-[832px] border-[2px] border-[#CFCFCF80] rounded-[16px] mt-10 mb-10 p-5">
          {!isGenerated ? (
            <div>
              <div>
                <p className="text-[#1D1D1D] text-[24px] font-bold">Create Sub-wallets</p>
              </div>

              <div className="mt-10">
                <p className="text-[20px] text-[#1D1D1D]">Number of wallets</p>
                <div className="flex flex-row items-center space-x-4">
                  <div className=" inputDivFocus items-center justify-center flex h-[64px] w-[560px] rounded-[12px] mt-4">
                    <Input className="shad-input-custom2 w-[557px]" placeholder="Enter Sub Wallet Number" onChange={handleInputChange}/>
                  </div>
                  <div className="inputDivSelected rounded-[32px] w-[190px] h-[60px] flex items-center justify-center mt-4">
                  <Button className="bg-white rounded-[32px] flex items-center justify-center w-[188px] h-[58px] hover:scale-110 hover:bg-slate-200">
                    <p className="validateText font-semibold text-[18px]" onClick={handleGenerate}> Create Wallets</p>
                  </Button>
                </div>
                </div>
              </div>
              <p className="tezt-[16px] font-light mt-2">{walletAmount} wallets will be created</p>
            </div>

          ): (
            <div>
               <div className="flex flex-row justify-between items-center">
                <p className="text-[#1D1D1D] text-[24px] font-bold">Sub-wallets <span className=" font-light"> - {walletAmount}</span></p>
                <div className="flex flex-row space-x-2 items-center justify-center">
                  <p className="validateText font-medium">Download CSV</p>
                  <img
                  src="./assets/download.svg"
                  />
                </div>
              </div>
              <div className="mt-5">
                <Table>
                  <TableBody>
                    {tableData.slice(startIndex, endIndex).map((index) => (
                      <TableRow key={index.index}>
                        <TableCell className="font-medium">{index.index}</TableCell>
                        <TableCell>{index.address}</TableCell>
                        <TableCell>
                          <div>
                            <img
                            src="./assets/copyLogoSingle.svg"
                            />
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <Pagination>
      
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      className={
                        startIndex === 0 ? "pointer-events-none opacity-50" : undefined
                      }
                      onClick={() => {
                        setStartIndex(startIndex - rowsPerPage);
                        setEndIndex(endIndex - rowsPerPage);
                        setCurrentpage(currenttPage - 1);
                      }} />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext
                      className={
                        currenttPage === totalPages ? "pointer-events-none opacity-50" : undefined
                      }
                      onClick={() => {
                        setStartIndex(startIndex + rowsPerPage); //10
                        setEndIndex(endIndex + rowsPerPage); //10 + 10 = 20
                        setCurrentpage(currenttPage + 1);
                      }} />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
              
              </div>
            </div>

          )}
        </div>
        
      </div>
    {!isGenerated ? (
      <div className="flex items-start justify-start">
      <div className="flex items-start ">
        <p className="w-[70px] text-[12px] text-[#B7B7BD]">Powered By</p>
          <img
          src="./assets/purpleSaleLogo.svg"
          />
      </div>
      </div>
    ): (
      <div className="flex items-center justify-center">
        <FormBottomBar ButtonText = {buttonText} NextLink = {nextLink}/>
      </div>
    )}

    </div>
  </div>
  )
}

export default CreateSubWallets