import { ActionTypes } from "../contants/actionTypes"

export const setProducts=(products)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    }
}
export const increment=(products,value)=>{
    return{
        type:ActionTypes.INCREMENT,
        payload:{
           products: products,
           value: value
        }
    }
}
export const decrement=(Quantity)=>{
    return{
        type:ActionTypes.DECREMENT,
        payload:Quantity
    }
}

export const selectedProducts=(products)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCTS,
        payload:products
    }
}
export const setcartProducts=(products)=>{
    return{
        type:ActionTypes.ADD_TO_CART,
        payload:products
    }
}
