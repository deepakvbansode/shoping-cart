import { fork, call, takeLatest } from "redux-saga/effects";
import { LOAD_PRODUCTS } from "../actions/productActions";
import { API_ENDPOINTS } from "./../../../config/apiEndpoints";
import RequestService from "../../shared/utility/restUtils";
import { LOAD_CATEGORY } from "../actions/categoryActions";
//===============Worker========
function* loadProducts() {
  try {
    let url = API_ENDPOINTS.getProducts;
    const products = yield call(RequestService.fetch, url);
    return { isError: false, products };
  } catch (error) {
    return { isError: true, error: error.message };
  }
}
function* loadCategories() {
  try {
    let url = API_ENDPOINTS.getCategories;
    const categories = yield call(RequestService.fetch, url);
    return { isError: false, categories };
  } catch (error) {
    return { isError: true, error: error.message };
  }
}
//===============Watchers==============
function* watchLoadProducts() {
  yield takeLatest(LOAD_PRODUCTS, loadProducts);
}
function* watchLoadCategory() {
  yield takeLatest(LOAD_CATEGORY, loadCategories);
}

export const cartSagas = [fork(watchLoadProducts), fork(watchLoadCategory)];
