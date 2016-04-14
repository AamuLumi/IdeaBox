'use strict';

import React, {Component} from 'react';
import Table from '~/views/lib/material/Table';
import {Link} from 'react-router';
import './SearchedJobs.less';

export default class SearchJobs extends Component {
  static propTypes = {
    project: React.PropTypes.object.isRequired
  }

  render() {
    console.log(this.props.project);
    let jobs = {};

    for (let j of this.props.project.requiredJobs){
      if (jobs[j.name]){
        jobs[j.name]++;
      } else {
        jobs[j.name] = 1;
      }
    }
    return (
      <div className="searchedJobs">
        <h4>Métiers recherchés :</h4>
        <Table>
          <tbody>
            {Object.keys(jobs).map((key) => {
              return (
                <tr key={key}>
                  <td>{jobs[key]}</td>
                  <td>{key}</td>
                  <td className="centered">
                    <Link className="btn btn-raised btn-xs btn-primary postulateButton" to="/">
                      Postuler
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
