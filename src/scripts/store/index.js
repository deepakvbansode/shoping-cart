import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducers/index";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  let middleware = applyMiddleware(sagaMiddleware);

  if (process.env.NODE_ENV !== "production") {
    const devToolsExtension = window.devToolsExtension;
    if (typeof devToolsExtension === "function") {
      middleware = compose(middleware, devToolsExtension());
    }
  }
  const store = createStore(rootReducer, middleware);
  sagaMiddleware.run(sagas);
  return store;
}
