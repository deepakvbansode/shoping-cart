export const LOAD_CATEGORY = "LOAD_CATEGORY";
export const LOAD_CATEGORY_SUCCESS = "LOAD_CATEGORY_SUCCESS";
export const LOAD_CATEGORY_FAILED = "LOAD_CATEGORY_FAILED";

export const loadCategory = () => ({
    type: LOAD_CATEGORY
});

export const loadCategorySuccess = (products) => ({
    type: LOAD_CATEGORY_SUCCESS,
    payload: {products}
});

export const loadCategoryFailed = (error) => ({
    type: LOAD_CATEGORY_SUCCESS,
    payload: {error}
});