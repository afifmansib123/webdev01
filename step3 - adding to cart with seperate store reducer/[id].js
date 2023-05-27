import React, { useContext } from "react";
import { mydata } from "@/datafolder/storedata";
import { useRouter } from "next/router";
import Image from "next/image";
import { Store } from "../Store";

export default function productdetails(){

    const {state,dispatch} = useContext(Store)
    const {query} = useRouter()
    const {id} = query

    const product = mydata.storeitems.find(x=>x.id==id)

    const handleadd = () => {
        const existitem = state.cart.cartitems.find((item)=>item.id==product.id)
        const price = existitem? existitem.price + 1 : 1
        dispatch({type:"ADD",payload:{...product,price}})
    }

    return(
        <div>
        <Image
        src = {product.itemimage}
        width = "600"
        height = "600"
        ></Image>
        <button onClick={handleadd}>add to cart</button>
        </div>
    )
} 