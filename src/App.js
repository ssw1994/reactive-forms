import React from "react";
import "./App.css";
import { FormControl, FormGroup } from "./forms";
import FormUI from "./forms/formUI";
class App extends React.Component {
  constructor(props) {
    console.log(FormUI);
    super(props);
    let formGroup = new FormGroup({
      name: new FormControl(
        "sachin",
        { type: "text", placeholder: "Enter name" },
        { required: true }
      )
    });
    console.log(formGroup.controls);
    this.state = {
      form: formGroup
    };
  }

  inputHandler = (e) =>{
    console.log(e);
  }

  control = (c, key) => {
    return <FormUI control={c} key={key} change={(e)=>this.inputHandler(e)}></FormUI>;
  };

  updateUI() {
    console.log(this.state.form);
    Object.values(this.state.form.controls).map((c, key) => {
      return this.control(c, key);
    });
  }

  render() {
    return (
      <form>
        {Object.values(this.state.form.controls).map((c, key) => {
          return this.control(c, key);
        })}
      </form>
    );
  }
}

export default App;
