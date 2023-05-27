import React from "react";
import { mydata } from "@/datafolder/storedata";
import { useRouter } from "next/router";
import Image from "next/image";

export default function productdetails(){
    const {query} = useRouter()
    const {id} = query

    const product = mydata.storeitems.find(x=>x.id===id)

    return(
        <div>
        <h1>{product.name}</h1>
        <Image
        src = {product.itemimage}
        width = "600"
        height = "600"
        ></Image>
        </div>
    )
} 