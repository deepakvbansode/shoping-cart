import {
    LOAD_CATEGORY,
    LOAD_CATEGORY_SUCCESS,
    LOAD_CATEGORY_FAILED
  } from "../actions/categoryActions";
  
  export const initialState = {
    isLoading: false,
    data: [],
    error: null
  };
  export function categoryReducer(state = initialState, { type, payload }) {
    switch (type) {
      case LOAD_CATEGORY:
        return Object.assign({}, state, { isLoading: true });
      case LOAD_CATEGORY_SUCCESS:
        return Object.assign({}, state, {
          isLoading: false,
          data: payload.products
        });
      case LOAD_CATEGORY_FAILED:
        return Object.assign({}, state, {
          isLoading: false,
          error: payload.error
        });
      default:
        return state;
    }
  }
  