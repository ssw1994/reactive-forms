import FormControl from "./formControl";
class FormGroup {
  _valid = undefined;
  _touched = false;
  _disabled = undefined;
  _controls = null;
  _validation = null;
  constructor(controls) {
    this._controls = controls;
  }

  set valid(valid) {
    this._valid = valid;
  }

  get valid() {
    return this._valid;
  }

  set touched(touched) {
    this._touched = touched;
  }

  get touched() {
    return this._touched;
  }

  set disabled(disabled) {
    this._disabled = disabled;
  }

  get disabled() {
    return this._disabled;
  }

  set controls(controls) {
    this._controls = controls;
  }

  get controls() {
    return this._controls;
  }

  setValidator(validation){

  }

  get(control) {
    if (this.controls && this.controls.hasOwnProperty(control)) {
      return this.controls[control];
    }
  }

  setValidator(validator) {}

  clearValidator() {}

  hasError() {}

  update() {}
}

export default FormGroup;
