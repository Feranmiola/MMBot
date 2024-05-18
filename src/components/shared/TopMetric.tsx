import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import { CSVLink } from 'react-csv';

  import { useToast } from "@/components/ui/use-toast"

const TopMetric = () => {
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

  const { toast } = useToast()
  
  const handleDownload = () =>{
    toast({
      title: "Downlading",
      description: "Addresses are downloading",
    })
  }


  return (
    <div className="flex items-center justify-center flex-row space-x-10 mt-4">
        <Card className="w-[292.75px]">
            <CardHeader>
            <CardDescription>Token Deposits</CardDescription>
                <CardTitle>50 ETH</CardTitle>
            </CardHeader>
        </Card>

        <Card className="w-[292.75px]">
            <CardHeader>
                <div className="flex flex-row space-x-4  items-center ">
                    <CardDescription>Token Deposits</CardDescription>
                    <CSVLink data={tableData} filename="sub-wallets.csv" onClick={handleDownload}>
                        <img
                        src="./assets/download.svg"
                        className="hover:scale-110 transition ease-in-out cursor-pointer"
                        />
                    </CSVLink>
                </div>
                <CardTitle>10</CardTitle>
            </CardHeader>
        </Card>
        
        <Card className="w-[292.75px]">
            <CardHeader>
            <CardDescription>Token Balance</CardDescription>
                <CardTitle>2.00457 BTC</CardTitle>
            </CardHeader>
        </Card>
        
        <Card className="w-[292.75px]">
            <CardHeader>
            <CardDescription>Volume Generated</CardDescription>
                <CardTitle>$67.897M</CardTitle>
            </CardHeader>
        </Card>
    </div>
  )
}

export default TopMetric
