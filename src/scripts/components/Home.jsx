import React, { useEffect } from "react";
import { loadProducts } from "../store/actions/productActions";
export const HomeComponent = () => {
  useEffect(() => {
    loadProducts();
  }, []);
  return <div>home</div>;
};
