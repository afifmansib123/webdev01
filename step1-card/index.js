import { mydata } from "@/datafolder/storedata"
import Itemcard from "@/components/itemcard"

export default function Home() {
  return (
    <>
      {mydata.storeitems.map((res)=>
      <Itemcard myprops = {res} key={res.id}></Itemcard>
      )}
    </>
  )
}
