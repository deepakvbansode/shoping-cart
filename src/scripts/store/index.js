import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/index";
import sagas from "./sagas";

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  let middleware = applyMiddleware(sagaMiddleware);

  if (process.env.NODE_ENV !== "production") {
    const devToolExtension = window.devToolExtension;
    if (typeof devToolExtension === "function") {
      middleware = compose(middleware, devToolExtension());
    }
  }
  const store = createStore(rootReducer, middleware);
  sagaMiddleware.run(sagas);
  return store;
}
