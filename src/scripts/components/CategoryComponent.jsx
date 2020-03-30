import React from "react";
import { connect } from "react-redux";
import { setCategory } from "../store/actions/preferenceActions";
const CategoryComponent = props => {
  return (
    <div>
      {props.categories &&
        props.categories.data.map(category => (
          <div key={category.id} onClick={() => props.setCategory(category.id)}>
            {category.title}
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = {
  setCategory
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryComponent);
