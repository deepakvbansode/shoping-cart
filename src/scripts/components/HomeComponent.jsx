import React, { useEffect } from "react";
import { loadProducts } from "../store/actions/productActions";
import { loadCategory } from "../store/actions/categoryActions";
import { connect } from "react-redux";
import ProductListComponent from "./ProductListComponent";
import CategoryComponent from "./CategoryComponent";
import { SortComponents } from "./SortComponent";
import SearchComponent from "./SearchComponent";
import { SORT_TYPES } from "../shared/constants/appConstants";
import { getVisibleProducts } from "../store/selectors/productSelectors";
const HomeComponent = props => {
  useEffect(() => {
    props.loadProducts();
    props.loadCategory();
  }, []);
  return (
    <div>
      <CategoryComponent />
      <SortComponents sortOptions={SORT_TYPES} />
      <SearchComponent />
      <ProductListComponent />
    </div>
  );
};

const mapDispatchToProps = { loadProducts, loadCategory };

export default connect(null, mapDispatchToProps)(HomeComponent);
