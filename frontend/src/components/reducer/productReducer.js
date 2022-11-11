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
        case ActionTypes.INCREMENT:
            console.log(state)
            console.log(payload.products._id)
            console.log(payload.value)
            
           let b= {
            ...state,
            products:state.products.map(item=>item._id===payload.products._id?{...item,stock:payload.value}:item)
           }       
           console.log(b)      
           return b; 
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
            cartitems : inCart ? state.cartitems.map(item=>item._id===payload._id?{...item,stock:item.stock+1}:item):[...state.cartitems,{...payload,stock:1}]
           }
           console.log(a)
          return a
            
                case ActionTypes.INCREMENT:
                console.log(state)
                console.log(payload.products._id)
                console.log(payload.value)
                
               let b= {
                ...state,
                cartitems:state.cartitems.map(item=>item._id===payload.products._id?{...item,stock:payload.value}:item)
               }       
               console.log(b)      
               return b; 
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
    // export const counter=(state=cartinitial,{type,payload})=>{
    //     switch(type){ 
           
    //         case ActionTypes.INCREMENT:
    //             console.log(state)
    //             console.log(payload.products._id)
    //             console.log(payload.value)
                
    //            let a= {
    //             ...state,
    //             cartitems:state.cartitems.map(item=>item._id===payload.products._id?{...item,Quantity:payload.value}:item)
    //            }       
    //            console.log(a)      
    //            return a; 
    //            case ActionTypes.DECREMENT:
    //             return payload-1
                

    //             default:
    //                 return state;
    //     }
    //     }