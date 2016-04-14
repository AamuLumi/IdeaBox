'use strict';

import React, {Component} from 'react';
import {Link} from 'react-router';
import './SearchResult.less';

export default class SearchResult extends Component {
  getPanelHeading() {
    return (
      <div className="panel-heading">
        <div className="panel-left">
          {this.props.result.name}
        </div>
        <div className="panel-right">
          <div className="budget">
            <i className="material-icons">
              &#xE926;
            </i>&nbsp;
            {this.props.result.budget}
          </div>
          <div className="members">
            <i className="material-icons">
              &#xE7F2;
            </i>&nbsp;
            {this.props.result.currentMembers.length}&nbsp; /&nbsp;
            {this.props.result.currentMembers.length + this.props.result.requiredJobs.length}
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="v-searchResult">
        <Link to={'/project/' + this.props.result.id}>
          <div className="panel panel-info">
            {this.getPanelHeading()}
            <div className="panel-body">
              {this.props.result.fastDescription}
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
