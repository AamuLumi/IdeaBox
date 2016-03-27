'use strict';

import React, {Component} from 'react';
import ActiveFilter from './ActiveFilter';

class ActiveFilterList extends Component {
  static propTypes = {
    filters: React.PropTypes.array.isRequired,
    onRemoveButtonClick: React.PropTypes.func.isRequired
  }

  getUIFilters(filters, onRemoveButtonClick) {
    if (!filters || filters.length === 0) {
      return (
        <div className="activeFilters">
          Aucun filtre
        </div>
      );
    } else {
      return (
        <form className="activeFilters form-horizontal">
          <fieldset>
            {filters.map((filter) => {
              return (<ActiveFilter
                {...filter}
                onRemoveButtonClick={() => onRemoveButtonClick(filter.id)}/>);
            })}
            <div className="form-group">
              <div className="col-sm-6 col-sm-offset-6">
                <button type="button" className="btn btn-default">
                  Cancel
                </button>
                <button type="button" className="btn btn-primary">
                  Submit
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
        {this.getUIFilters(this.props.filters, this.props.onRemoveButtonClick)}
      </div>
    );
  }
}

export default ActiveFilterList;
