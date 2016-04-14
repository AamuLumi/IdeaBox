'use strict';

import React, {Component} from 'react';
import ActiveFilter from './ActiveFilter';
import Form from '~/views/lib/material/Form';

class ActiveFilterList extends Component {
  static propTypes = {
    filters: React.PropTypes.object.isRequired,
    onRemoveButtonClick: React.PropTypes.func.isRequired
  }

  getUIFilters(filters, onRemoveButtonClick, onSearchClick) {
    if (!filters.activeFilters || filters.activeFilters.length === 0) {
      return (
        <div className="activeFilters">
          Aucun filtre
        </div>
      );
    } else {
      return (
        <Form
          formClass="activeFilters"
          sendString="Rechercher"
          sendAction={() => onSearchClick(this.props.filters.activeFilters)}>
          {filters.activeFilters.map((filter) => {
            return (<ActiveFilter
              {...filter}
              key={'activeFilter' + filter.id}
              onRemoveButtonClick={() => onRemoveButtonClick(filter.id)}/>);
          })}
        </Form>
      );
    }
  }

  render() {
    return (
      <div className="well bs-component">
        {this.getUIFilters(this.props.filters, this.props.onRemoveButtonClick, this.props.onSearchClick)}
      </div>
    );
  }
}

export default ActiveFilterList;
