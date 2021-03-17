import React from "react";

class FormComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleValue = this.handleValue.bind(this);
    this.alertMe = this.alertMe.bind(this);
  }
  handleValue(event) {
    // console.log(event.target.value);
    this.setState({ value: event.target.value });
  }
  alertMe(event) {
    alert(this.state.value);
    //prevents the page from reloading when submit button is clicked
    event.preventDefault();
  }
  render() {
    return (
      <>
        <label>Name :</label>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleValue}
        />
        <input type="submit" value="submit" onClick={this.alertMe} />
      </>
    );
  }
}

export default FormComp;
