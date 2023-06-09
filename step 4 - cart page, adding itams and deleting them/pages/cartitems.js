import { useContext } from "react";
import { Store } from "./store";

export default function cartitems(){
    const {state,dispatch} = useContext(Store)

    const {cart: {cartitems}} = state


    const handledelete = (item) => {
        dispatch({type : "DELETE", payload : item})
    }

    return(
        <table>
            <thead>
                <tr>
                    <td>item</td>
                    <td>item</td>
                    <td>item</td>
                </tr>
            </thead>
            <tbody>
                {cartitems.map((item)=>
                <tr key={item.slug}>
                    <td>{item.name}</td>
                    <td><img src = {item.image} height={20} width={20}></img></td>
                    <td>{item.quantity}</td>
                    <td><button onClick={()=>handledelete(item)}>X</button></td>
                </tr>
                )}
            </tbody>
        </table>
    )
}