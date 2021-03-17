import React from "react";

class FormSelectComp extends React.Component {
  state = { str: ["Apple", "Banana", "Orange", "Grapes"] };
  render() {
    return (
      <fieldset>
        <legend>List</legend>
        <select
          onChange={function (event) {
            console.log(event.target.value);
          }}
        >
          {this.state.str.map((str) => (
            <option key={str}>{str}</option>
          ))}
        </select>
      </fieldset>
    );
  }
}

export default FormSelectComp;
