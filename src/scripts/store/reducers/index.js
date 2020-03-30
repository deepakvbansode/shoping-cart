import { combineReducers} from "redux";
import { productReducer } from "./productReducer";
import { categoryReducer } from "./categoryReducer";
import { preferenceReducer } from "./preferenceReducer";

const shopingApp = combineReducers({
    products: productReducer,
    categories: categoryReducer,
    preference: preferenceReducer

});


export default shopingApp;