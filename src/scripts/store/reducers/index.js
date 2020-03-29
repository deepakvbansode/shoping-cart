import { combineReducers} from "redux";
import { productReducer } from "./productReducer";
import { categoryReducer } from "./categoryReducer";

const shopingApp = combineReducers({
    products: productReducer,
    categories: categoryReducer
});


export default shopingApp;