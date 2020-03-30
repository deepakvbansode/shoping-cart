import React from "react";
import { connect } from "react-redux";
import { getVisibleProducts, getCategoryProducts , getSearchMatchedProducts} from "../store/selectors/productSelectors";

const ProductListComponent = props => {
    if(props.isLoading)
        return <div>Loading...</div>
  return (
    <div>
      {props.products &&
        props.products.map(product => <div key={product.Id}>{product.Title}</div>)}
    </div>
  );
};

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    products: getVisibleProducts(state),
    isLoading: state.products.isLoading
  };
};

export default connect(mapStateToProps)(ProductListComponent);
