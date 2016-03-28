'use strict';

import React, {Component} from 'react';
import ActiveFilter from './ActiveFilter';

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
        <form className="activeFilters form-horizontal">
          <fieldset>
            {filters.activeFilters.map((filter) => {
              return (<ActiveFilter
                {...filter}
                key={'activeFilter'+filter.id}
                onRemoveButtonClick={() => onRemoveButtonClick(filter.id)}/>);
            })}
            <div className="form-group">
              <div className="col-sm-6 col-sm-offset-6">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => onSearchClick(this.props.filters.activeFilters)}>
                  Rechercher
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      );
    }
  }

  render() {
    return (
      <div className="well bs-component">
        {this.getUIFilters(this.props.filters,
          this.props.onRemoveButtonClick,
          this.props.onSearchClick)}
      </div>
    );
  }
}

export default ActiveFilterList;
