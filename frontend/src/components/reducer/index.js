import { combineReducers } from "redux";
import { productReducer, selectedproductReducer } from "./productReducer";
const reducers=combineReducers({
    allProducts:productReducer,
    singleProduct:selectedproductReducer
})
export default reducers 