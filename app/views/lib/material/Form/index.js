import React, { Component } from 'react';

export default class Form extends Component {
  static propTypes = {
      sendString : React.PropTypes.string.isRequired,
      sendAction : React.PropTypes.func.isRequired,
      formClass : React.PropTypes.string
  }

  render() {
    let formClass = 'form-horizontal ';

    if (this.props.formClass){
      formClass += this.props.formClass;
    }

    return (
      <form className={formClass}>
        <fieldset>
          {this.props.children}
          <div className="form-group">
            <div className="col-sm-6 col-sm-offset-6">
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.props.sendAction}>
                {this.props.sendString}
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    );
  }
}
