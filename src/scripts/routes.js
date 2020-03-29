import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { HomeComponent } from "./components/Home";
import { ProductDetailsComponent } from "./components/ProductDetails";
import { CheckoutComponent } from "./components/Checkout";
export const AppRoutes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={HomeComponent} />
      <Route path="/product" component={ProductDetailsComponent} />
      <Route path="/checkout" component={CheckoutComponent} />
    </Switch>
  </Router>
);
