import data from "@/utils/data"
import Productcard from "@/components/productcard"


export default function Home() {
  return (
    <>
    {data.products.map((item)=><Productcard props={item} key={item.slug}></Productcard>)}
    </>
  )
}
