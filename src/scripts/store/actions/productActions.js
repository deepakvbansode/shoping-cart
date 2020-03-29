
export const LOAD_PRODUCTS = "LOAD_PRODUCTS";
export const LOAD_PRODUCTS_SUCCESS = "LOAD_PRODUCTS_SUCCESS";
export const LOAD_PRODUCTS_FAILED = "LOAD_PRODUCTS_FAILED";

export const loadProducts = () => ({
    type: LOAD_PRODUCTS
});

export const loadProductsSuccess = (products) => ({
    type: LOAD_PRODUCTS_SUCCESS,
    payload: {products}
});

export const loadProductsFailed = (error) => ({
    type: LOAD_PRODUCTS_SUCCESS,
    payload: {error}
});