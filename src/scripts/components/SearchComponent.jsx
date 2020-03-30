import React from "react";
import { connect } from "react-redux";
import { setSearch } from "../store/actions/preferenceActions";
const SearchComponent = props => (
  <div>
    <input type="text" onChange={(event) => props.setSearch(event.target.value)} />
  </div>
);
const mapStateToProps = state => ({
  search: state.preference.search
});
export default connect(mapStateToProps, { setSearch })(SearchComponent);
