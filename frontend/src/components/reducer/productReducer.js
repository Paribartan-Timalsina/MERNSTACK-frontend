import { ActionTypes } from "../contants/actionTypes"
import { useState } from "react";
const initialState={
    products:[],
   
}
const cartinitial={
    cartitems:[]
}

export const productReducer=(state=initialState,{type,payload})=>{
switch(type){ 
    case ActionTypes.SET_PRODUCTS:
        return {...state,products:payload};
        default:
            return state;
}
}
export const cartproductReducer=(state=cartinitial,{type,payload})=>{
    switch(type){ 
        case ActionTypes.ADD_TO_CART:
            const item=state.cartitems.find(prod=>prod._id===payload._id)
          const inCart=state.cartitems.find(prod=>prod._id===payload._id?true:false)

          let a=  {
            ...state,
            cartitems : inCart ? state.cartitems.map(item=>item._id===payload._id?{...item,Quantity:item.Quantity+1}:item):[...state.cartitems,{...payload,Quantity:1}]
           }
           console.log(a)
          return a
            default:
                return state;
    }
    }
export const selectedproductReducer=(state={},{type,payload})=>{
    switch(type){ 
        case ActionTypes.SELECTED_PRODUCTS:
            return {...state,products:payload};
            default:
                return state;
    }
    }
    // export const counter=(state=0,{type,payload})=>{
    //     switch(type){ 
    //         case ActionTypes.INCREMENT:
    //            return {
    //             ...state,
    //             cartitems:state.cartitems.map(item=>item.id===payload?{...cartitems,Quantity:payload.Quantity}:item)
    //            }              
    //            case ActionTypes.DECREMENT:
    //             return payload-1
                

    //             default:
    //                 return state;
    //     }
    //     }