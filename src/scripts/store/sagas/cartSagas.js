import { fork, call, takeLatest, put } from "redux-saga/effects";
import {
  LOAD_PRODUCTS,
  loadProductsSuccess,
  loadProductsFailed
} from "../actions/productActions";
import { API_ENDPOINTS } from "./../../../config/apiEndpoints";
import RequestService from "../../shared/utility/restUtils";
import { LOAD_CATEGORY, loadCategoryFailed, loadCategorySuccess } from "../actions/categoryActions";
//===============Worker========
function* loadProducts() {
  try {
    let url = API_ENDPOINTS.getProducts;
    const products = yield call(RequestService.fetch, url);
    yield put(loadProductsSuccess(products.data));
  } catch (error) {
    yield put(loadProductsFailed(error.message));
  }
}
function* loadCategories() {
  try {
    let url = API_ENDPOINTS.getCategories;
    const categories = yield call(RequestService.fetch, url);
    yield put(loadCategorySuccess(categories.data));
  } catch (error) {
    yield put(loadCategoryFailed(error.message));
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
