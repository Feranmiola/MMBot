import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const TopMetric = () => {
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
                    <img
                    src="./assets/download.svg"
                    className="hover:scale-110 transition ease-in-out cursor-pointer"
                    />
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
