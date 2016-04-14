'use strict';

import React, {Component} from 'react';
import FormField from '~/views/lib/material/FormField';
import './ActiveFilter.less';

export default class Search extends Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
    values: React.PropTypes.array,
    id: React.PropTypes.string.isRequired,
    onRemoveButtonClick: React.PropTypes.func.isRequired
  }

  getOptions(){
    return this.props.values.map((value) => {
      return (
        <option key={'option' + this.props.id + value}>
          {value}
        </option>
      );
    });
  }

  render() {
    if (this.props.type === 'String') {
      return (
        <FormField
          type="text"
          containerClass="activeFilter"
          fieldContainerClass="col-sm-9"
          labelString={this.props.name}
          labelClass="col-sm-2"
          id={this.props.id}>
          <div
            className="btn btn-raised btn-danger btn-xs"
            onClick={this.props.onRemoveButtonClick}>x</div>
        </FormField>
      );
    } else if (this.props.type === 'Values') {
      return (
        <FormField
          type="select"
          containerClass="activeFilter"
          fieldContainerClass="col-sm-9"
          labelString={this.props.name}
          labelClass="col-sm-2"
          id={this.props.id}
          options={this.getOptions()}>
          <div
            className="btn btn-raised btn-danger btn-xs"
            onClick={this.props.onRemoveButtonClick}>x</div>
        </FormField>
      );
    }
  }
}
