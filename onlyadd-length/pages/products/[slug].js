import data from "@/utils/data"
import { useRouter } from "next/router"
import { Store } from "../store"
import { useContext } from "react"



export default function(){
    const {query} = useRouter()
    const {slug} = query
    

    const {state,dispatch} = useContext(Store)

    const {cart} = state

    const thisproduct = data.products.find((item)=>item.slug===parseInt(slug))
    const handleclick = () => {
        const existitem = state.cart.cartitems.find((item)=>item.slug===thisproduct.slug)
        const quantity = existitem? existitem.quantity + 1 : 1
        dispatch({type:"ADD",payload:{...thisproduct,quantity}})
    }

    return(
       
        <div><h1>{thisproduct.name}</h1>
        <img src={thisproduct.image}></img>
        <button onClick={handleclick}>add to cart</button>
        <span>
                  {cart.cartitems.length}
                </span>

                <div></div>
        </div>
    )
}