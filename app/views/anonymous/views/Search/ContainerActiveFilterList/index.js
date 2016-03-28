'use strict';

import { connect } from 'react-redux';
import { removeFilter, search} from '~/actions/Search';
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
    },
    onSearchClick: (filters) => {
      dispatch(search(filters));
    }
  };
};

const ContainerActiveFilterList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveFilterList);

export default ContainerActiveFilterList;
