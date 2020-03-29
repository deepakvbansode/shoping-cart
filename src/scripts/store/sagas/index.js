import {all} from "redux-saga/effects";
import { cartSagas } from "./cartSagas";

export default function* sagas(){
    yield all([
        ...cartSagas
    ])
}