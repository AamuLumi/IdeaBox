'use strict';

import { connect } from 'react-redux';
import { removeFilter } from '~/actions/Search';
import ActiveFilterList from './ActiveFilterList';

const mapStateToProps = (state) => {
  return {
    filters : state.searchFilters
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveButtonClick: (id) => {
      dispatch(removeFilter(id));
    }
  };
};

const ContainerActiveFilterList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveFilterList);

export default ContainerActiveFilterList;
