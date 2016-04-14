import React, {Component} from 'react';

export default class FormField extends Component {
  static propTypes = {
    containerClass: React.PropTypes.string.isRequired,
    fieldContainerClass: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
    labelString: React.PropTypes.string.isRequired,
    labelClass: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
    options: React.PropTypes.array
  }

  render() {
    let field = null;
    let containerClass = 'form-group ' + this.props.containerClass;
    let labelClass = 'control-label ' + this.props.labelClass;
    console.log(this.props.children);

    if (this.props.type === 'text') {
      field = <div className={this.props.fieldContainerClass}>
        <input className="form-control" id={this.props.id}/>
      </div>;
    } else if (this.props.type === 'select') {
      field = <div className={this.props.fieldContainerClass}>
        <select className="form-control" id={this.props.id}>
          {this.props.options}
        </select>
      </div>;
    }

    return (
      <div className={containerClass}>
        <label htmlFor={this.props.id} className={labelClass}>
          {this.props.labelString}
        </label>
        {field}
        {this.props.children}
      </div>
    );
  }
}
