import React, {Component} from 'react';
import './SearchResult.less';

export default class SearchResult extends Component {
  getPanelHeading() {
    return (
      <div className="panel-heading">
        <div className="panel-left">
          {this.props.name}
        </div>
        <div className="panel-right">
          <div className="budget">
            <i className="material-icons">
              euro_symbol
            </i>&nbsp;
            {this.props.budget}
          </div>
          <div className="members">
            <i className="material-icons">
              mood
            </i>&nbsp;
            {this.props.currentMembers.length}&nbsp; /&nbsp;
            {this.props.currentMembers.length + this.props.requiredJobs.length}
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="v-searchResult">
        <div className="panel panel-info">
          {this.getPanelHeading()}
          <div className="panel-body">
            {this.props.description}
          </div>
        </div>
      </div>
    );
  }
}
