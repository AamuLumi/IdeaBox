'use strict';

import { connect } from 'react-redux';
import { changeCurrentProject} from '~/actions/ProjectDetails';
import SearchResultList from './SearchResultList';

const mapStateToProps = (state) => {
  return {
    results : state.searchResults
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onResultClick: (project) => {
      dispatch(changeCurrentProject(project));
    }
  };
};

const ContainerActiveFilterList = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultList);

export default ContainerActiveFilterList;
