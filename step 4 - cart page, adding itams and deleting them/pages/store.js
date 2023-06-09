import { createContext, useReducer } from "react"
import React from "react"

export const INITIAL_STATE = {
    cart : {
        cartitems : []
    }
}

export const reducerfunc = (state,action) => {
    switch(action.type){
        case "ADD":
            //find exist or not
            const newitem = action.payload
            const existornot = state.cart.cartitems.find((item)=>item.slug===newitem.slug)
            //if it does, lets put it as the newitem
            const cartitems=existornot
            //as we found a match
            ?state.cart.cartitems.map((item)=>item.slug==existornot.slug?newitem:item)
            //as no matches found
            :[...state.cart.cartitems, newitem]

            return {...state, cart:{...state.cart, cartitems}}

        case "DELETE":
            const deleteitem = action.payload
            const finditem = state.cart.cartitems.filter((item)=>item.slug !== deleteitem.slug)

            return { ...state, cart: { ...state.cart, cartitems: finditem } }

        default : 
        return state
    }
}

export const Store = createContext()

export const Stateprovider = ({children}) => {
    const [state,dispatch] = useReducer(reducerfunc,INITIAL_STATE)
    return(
        <Store.Provider value={{state,dispatch}}>{children}</Store.Provider>
    )
}     