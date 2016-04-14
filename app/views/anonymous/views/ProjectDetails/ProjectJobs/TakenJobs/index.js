'use strict';

import React, {Component} from 'react';
import Table from '~/views/lib/material/Table';
import './TakenJobs.less';

export default class SearchJobs extends Component {
  static propTypes = {
    project: React.PropTypes.object.isRequired
  }

  render() {
    let jobs = {};
    let current = null;

    for (let m of this.props.project.currentMembers) {
      current = m.job.name;
      if (jobs[current]) {
        jobs[current]++;
      } else {
        jobs[current] = 1;
      }
    }
    return (
      <div className="takenJobs">
        <h4>Métiers déjà pris :</h4>
        <Table>
          <tbody>
            {Object.keys(jobs).map((key) => {
              return (
                <tr key={key}>
                  <td className="quantityCell">1</td>
                  <td>{key}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
