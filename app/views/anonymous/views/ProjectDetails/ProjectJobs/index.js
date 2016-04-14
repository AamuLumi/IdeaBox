'use strict';

import React, { Component } from 'react';
import SearchedJobs from './SearchedJobs';
import TakenJobs from './TakenJobs';

export default class ProjectJobs extends Component {
  static propTypes = {
    project: React.PropTypes.object.isRequired
  }

  render() {
    return (
      <div className="projectJobs">
        <SearchedJobs project={this.props.project}/>
        <TakenJobs project={this.props.project}/>
      </div>
    );
  }
}
