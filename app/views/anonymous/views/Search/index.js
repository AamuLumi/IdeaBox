'use strict';

import React, {Component} from 'react';
import ContainerActiveFilterList from './ContainerActiveFilterList';
import { connect } from 'react-redux';
import { addFilter } from '~/actions/Search';
import ContainerSearchResultList from './ContainerSearchResultList';
import './Search.less';

class Search extends Component {
  static propTypes = {
    filters: React.PropTypes.object.isRequired
  }

  addFilter(filter) {
    this.props.dispatch(addFilter(filter.id));
  }

  getResultsComponent(){
    if (this.props.results && this.props.results.length > 0){
      return (
        <SearchResultList results={this.props.results}/>
      );
    }
  }

  render() {
    return (
      <div className="v-search">
        <div className="v-panel-title">
          <h1>Rechercher une idée</h1>

          {this.props.filters.inactiveFilters.map((searchObject) => {
            return (
              <span
                key={'btn'+searchObject.id}
                className="searchTag btn btn-raised btn-xs"
                onClick={() => this.addFilter(searchObject)}>
                {searchObject.name}
              </span>
            );
          })}

          <ContainerActiveFilterList />
          <ContainerSearchResultList />
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    filters : state.searchFilters
  })
)(Search);
