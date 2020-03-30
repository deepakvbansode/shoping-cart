import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import  HomeComponent  from "./components/HomeComponent";
import { ProductDetailsComponent } from "./components/ProductDetailsComponent";
import { CheckoutComponent } from "./components/CheckoutComponent";
export const AppRoutes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={HomeComponent} />
      <Route path="/product" component={ProductDetailsComponent} />
      <Route path="/checkout" component={CheckoutComponent} />
    </Switch>
  </Router>
);
