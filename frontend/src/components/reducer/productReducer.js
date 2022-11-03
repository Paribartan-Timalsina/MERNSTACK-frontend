import { ActionTypes } from "../contants/actionTypes"
import { useState } from "react";
const initialState={
    products:[]
}
export const productReducer=(state=initialState,{type,payload})=>{
switch(type){ 
    case ActionTypes.SET_PRODUCTS:
        return {...state,products:payload};
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