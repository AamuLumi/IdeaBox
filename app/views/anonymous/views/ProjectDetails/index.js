'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchById, search} from '~/actions/Search';

class ProjectDetails extends Component {
  componentWillMount() {
    // Populate
    // MUST BE REWORKED
    this.props.search();

    this.props.searchById(this.props.params.id);
  }

  render() {
    return (
      <div className="v-projectDetails">

      </div>
    );
  }
}

export default connect((state) => {
  return {result: state.searchResults};
}, (dispatch) => {
  return {
    searchById: (id) => {
      dispatch(searchById(id));
    },
    search : () => {
      dispatch(search());
    }
  };
})(ProjectDetails);
