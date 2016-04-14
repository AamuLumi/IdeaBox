'use strict';

import React, { Component } from 'react';

export default class ProjectProperties extends Component {
  static propTypes = {
    project: React.PropTypes.object.isRequired
  }

  render() {
    if (this.props.project.isPrivate){
      return (
        <div className="projectProperties">
          <h4>Propriétés :</h4>
          <ul>
            <li>Projet privé</li>
          </ul>
        </div>
      );
    }
    let properties = ['Projet communautaire'];

    return (
      <div className="projectProperties">
        <h4>Propriétés :</h4>
        <ul>
          {properties.map((p, i) => {
            return (
              <li key={i}>{p}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}
