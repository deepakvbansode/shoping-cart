import { createSelector } from "reselect";
const getProducts = state => state.products.data;
const getCategory = state => state.preference.selectedCategory;
const getSearch = state => state.preference.search;
const getSortBy = state => state.preference.sortBy;
export const getCategoryProducts = createSelector(
  [getProducts, getCategory],
  (products, categoryId) => {
      if(categoryId == null)
        return products;

      return products.filter((product) => product.category == categoryId)
  }
);
export const getSearchMatchedProducts = createSelector(
    [getCategoryProducts, getSearch],
    (products, search) => {
        if(search == "")
            return products;

        return products.filter((product) => product.Title.indexOf(search) > -1)
    }
)

export const getVisibleProducts = createSelector(
    [getSearchMatchedProducts, getSortBy],
    (products, sortBy) => {
        //sortLogic
        return products;
    }
);
