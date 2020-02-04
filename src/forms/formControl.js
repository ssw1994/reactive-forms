import validator from "./Validator";
class FormControl {
  _value = null;
  _touched = false;
  _valid = undefined;
  _config = null;
  _disabled = undefined;
  _validations = null;
  _subscribers = [];
  constructor(value, config, validations) {
    this.value = value;
    this.config = config;
    this.validations = validations;
    //validator.bind(validations);
  }

  set touched(touched) {
    this._touched = touched;
  }

  get touched() {
    return this.touched;
  }

  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
  }

  set valid(valid) {
    this._valid = valid;
  }

  get valid() {
    return this._valid;
  }

  set config(config) {
    this._config = config;
  }

  get config() {
    return this._config;
  }

  set disabled(disabled) {
    this._disabled = disabled;
  }

  get disabled() {
    return this._disabled;
  }

  set validations(validations) {
    this._validations = validations;
  }

  get validations() {
    return this._validations;
  }

  markAsTouched() {
    this.touched = true;
  }

  markAsUntouched() {
    this.touched = false;
  }

  setValidator(validation) {
    this.validations = { ...this.validations, validation };
  }

  removeValidator(validation) {
    let validations = Object.assign({}, this.validations || {});
    if (validations & validations.hasOwnProperty(validation)) {
      delete validations[validation];
    }
    this.validations = { ...validation };
  }

  clearValidation() {
    this.validations = null;
  }

  subscribe(){

  }

  update() {
    if (this.value) {
    }
  }

  hasError() {}

  getValues() {}

  getRawValues() {}
}

export default FormControl;
