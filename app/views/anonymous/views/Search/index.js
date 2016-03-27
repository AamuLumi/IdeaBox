'use strict';

import React, {Component} from 'react';
import ContainerActiveFilterList from './ContainerActiveFilterList';
import { connect } from 'react-redux';
import { addFilter } from '~/actions/Search';
import './Search.less';

class Search extends Component {
  static propTypes = {
    filters: React.PropTypes.array.isRequired
  }

  state = {
    'activeFilters': [],
    'inactiveFilters': [
      {
        'name': 'Je suis ...',
        'type': 'String',
        'id': 'job'
      }, {
        'name': 'Je cherche un projet nommé ...',
        'type': 'String',
        'id': 'projectName'
      }, {
        'name': 'Le domaine du projet est ...',
        'type': 'String',
        'id': 'projectDomain'
      }, {
        'name': 'Le projet nécessite un budget ...',
        'type': 'Values',
        'values': [
          'faible', 'moyen', 'élevé'
        ],
        'id': 'projectBudget'
      }, {
        'name': 'Je veux être ...',
        'type': 'String',
        'id': 'jobSearched'
      }, {
        'name': 'Le projet a été posté ...',
        'type': 'Values',
        'values': [
          'Moins de 15 jours', 'Moins d\'un mois', 'Moins de trois mois'
        ],
        'id': 'projectPosted'
      }
    ]
  };

  addFilter(filter) {
    this.props.dispatch(addFilter(filter));
  }

  render() {
    return (
      <div className="v-search">
        <div className="v-panel-title">
          <h1>Rechercher une idée</h1>

          {this.state.inactiveFilters.map((searchObject) => {
            return (
              <span
                className="searchTag btn btn-raised btn-xs"
                onClick={() => this.addFilter(searchObject)}>
                {searchObject.name}
              </span>
            );
          })}

          <ContainerActiveFilterList />
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
