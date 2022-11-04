import { combineReducers } from "redux";
import { productReducer, selectedproductReducer,cartproductReducer,counter } from "./productReducer";
const reducers=combineReducers({
    allProducts:productReducer,
    singleProduct:selectedproductReducer,
    cartProducts:cartproductReducer,
    // quantitycounter:counter,

})  
export default reducers 