import React, {Component} from 'react';
import Jumbotron from '~/views/lib/material/Jumbotron';
import Form from '~/views/lib/material/Form';
import FormField from '~/views/lib/material/FormField';

export default class ProjectCreation extends Component {

  createForm() {
    return (
      <Form sendString="Créer" sendAction={() => {console.log('ok');}}>
        Coucou
      </Form>
    );
  }

  render() {
    return (
      <div className="v-projectCreation">
        <Jumbotron>
          <h1>Partager une idée</h1>

          {this.createForm()}
        </Jumbotron>
      </div>
    );
  }
}
