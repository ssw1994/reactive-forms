import React, { Component } from "react";
class FormUI extends Component {
  _select = null;
  _input = null;
  _autocomplete = null;
  _checkbox = null;
  _radio = null;

  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    let props = this.props;
    console.log(props);
    return <div>{this.setTemplate(props.control)}</div>;
  }

  inputHandler = (event) =>{
    event && event.persist();
    this.props.change(event);
  }

  showLabel() {
    return <span className="form_error"></span>;
  }

  selectTemplate(props) {
    return (
      <div className="form_control">
        <select {...props.config}>
          {(props.config.options || []).map(option => {
            return <option value={option.value}>{option.name}</option>;
          })}
        </select>
        {this.showLabel()}
      </div>
    );
  }

  inputTemplate(control) {
    let [value,config,validation] = [control.value,control.config,control.validation];
    
    return (
      <div className="form_control">
        <input {...config} {...validation} value = {value} onChange={(e)=>this.inputHandler(e)}/>
        {this.showLabel()}
      </div>
    );
  }

  autocompleteTemplate() {}

  checkboxTemplate() {}

  radioTemplate() {}

  setTemplate(control) {
    console.log(control.config);
    let template = null;
    switch (control.config.type) {
      case "number":
      case "text":
      case "email":
      case "password":
        template = this.inputTemplate(control);
        break;
      case "select":
        template = this.selectTemplate(control);
        break;
      case "autocomplete":
        template = this.autocompleteTemplate(control);
        break;
      case "checkbox":
        template = this.checkboxTemplate(control);
        break;
      case "radio":
        template = this.radioTemplate(control);
        break;
      default:
        template = null;
    }
    return template;
  }
}

export default FormUI;
