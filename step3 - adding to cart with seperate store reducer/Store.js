import { createContext, useReducer } from "react";

export const initialstate = {
    cart: {
        cartitems : []
    }
}

export const Reducers = (state,action) => {
    switch(action.type){
        case "ADD":
            const newitem = action.payload
            const existitem = state.cart.cartitems.find((item)=>item.id==newitem.id)

            const cartitems = existitem
            //if it does exist
            ?state.cart.cartitems.map((item)=>item.id==existitem.id?newitem:item)
            //if doesnt exist
            :[...state.cart.cartitems, newitem]
            
            return {...state, cart: {...state.cart, cartitems}}

        default:
            return state
    }
    
}

export const Store = createContext()

export const Stateprovider = ({children}) => {
    const [state,dispatch] = useReducer(Reducers,initialstate)

    return(
        <Store.Provider value={{state,dispatch}}>{children}</Store.Provider>
    )
}
