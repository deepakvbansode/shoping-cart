import {
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAILED
} from "../actions/productActions";

export const initialState = {
  isLoading: false,
  data: [],
  error: null
};
export function productReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOAD_PRODUCTS:
      return Object.assign({}, state, { isLoading: true });
    case LOAD_PRODUCTS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        data: payload.products
      });
    case LOAD_PRODUCTS_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        error: payload.error
      });
    default:
      return state;
  }
}
