'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchById, search} from '~/actions/Search';
import Jumbotron from '~/views/lib/material/Jumbotron';
import ProjectJobs from './ProjectJobs';
import ProjectProperties from './ProjectProperties';
import SearchedJobs from './ProjectJobs/SearchedJobs';
import {Link} from 'react-router';

class ProjectDetails extends Component {
  componentWillMount() {
    // Populate MUST BE REWORKED
    this.props.search();

    this.props.searchById(this.props.params.id);
    console.log(this.props.result);
  }

  componentWillUnmount() {
    let notAProject = -1;
    this.props.searchById(notAProject);
  }

  getProjectDescription() {
    let e = this.props.result[0];

    console.log("el");
    console.log(e);

    if (e && !e.isPrivate) {
      return (
        <div>
          <h1>{e.name}</h1>
          <h3>{e.fastDescription}</h3>
          <div className="projectDescription">
            {e.description}
          </div>
          <ProjectJobs project={e}/>
          <ProjectProperties project={e}/>
        </div>
      );
    } else if (e) {
      return (
        <div>
          <h1>{e.name}</h1>
          <h3>{e.fastDescription}</h3>

          Ce projet est privé. Vous pouvez cependant demandez des informations
           à l'auteur.

          <center>
            <Link className="btn btn-raised btn-primary" to="/">
              Demander des informations
            </Link>
          </center>
          <SearchedJobs project={e}/>
          <ProjectProperties project={e}/>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="v-projectDetails">
        <Jumbotron>
          {this.getProjectDescription()}
        </Jumbotron>
      </div>
    );
  }
}

export default connect((state) => {
  return {result: state.searchResults};
}, (dispatch) => {
  return {
    searchById: (id) => {
      dispatch(searchById(id));
    },
    search: () => {
      dispatch(search());
    }
  };
})(ProjectDetails);
