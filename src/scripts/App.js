import React from 'react';
import {Provider} from "react-redux";
import '../styles/App.scss';
import configureStore from "./store";
import { AppRoutes } from './routes';
const store = configureStore();
const App = () => (
  <Provider store={store}>
      <AppRoutes />
  </Provider>
)

export default App;
