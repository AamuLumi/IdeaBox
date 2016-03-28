'use strict';

import React, {Component} from 'react';
import './ActiveFilter.less';

export default class Search extends Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
    values: React.PropTypes.array,
    id: React.PropTypes.string.isRequired,
    onRemoveButtonClick: React.PropTypes.func.isRequired
  }

  getInput() {
    if (this.props.type === 'String') {
      return (
        <div className="col-sm-9">
          <input className="form-control" id={this.props.id}></input>
        </div>
      );
    } else if (this.props.type === 'Values') {
      return (
        <div className="col-sm-9">
          <select className="form-control" id={this.props.id}>
            {this.props.values.map((value) => {
              return (
                <option key={'option' + this.props.id + value}>
                  {value}
                </option>
              );
            })}
          </select>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="activeFilter form-group">
        <label
          htmlFor={this.props.id}
          className="col-sm-2 control-label">
          {this.props.name}
        </label>
        {this.getInput()}
        <div
          className="btn btn-raised btn-danger btn-xs"
          onClick={this.props.onRemoveButtonClick}>x</div>
      </div>
    );
  }
}
