import { SET_CATEGORY, SET_SEARCH, SET_SORT_BY } from "../actions";

  
  export const initialState = {
    search: "",
    selectedCategory: null,
    sortBy: null
  };
  export function preferenceReducer(state = initialState, { type, payload }) {
    switch (type) {
      case SET_CATEGORY:
        return Object.assign({}, state, { selectedCategory: payload.categoryId });
      
      case SET_SEARCH:
        return Object.assign({}, state, { search: payload.search });
      
      case SET_SORT_BY:
        return Object.assign({}, state, { sortBy: payload.sortBy });
      
      default:
        return state;
    }
  }
  