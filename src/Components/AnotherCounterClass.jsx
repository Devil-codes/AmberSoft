import React from "react";

class AnotherCounterClass extends React.Component {
  state = { count: 0 };

  handleCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        Using Arrow Function without binding&nbsp;
        <br />
        <button onClick={this.handleCount} className="btn btn-primary m-3">
          Increment
        </button>
        <span className="badge badge-warning">
          <b>{this.state.count === 0 ? "---" : this.state.count}</b>
        </span>
      </div>
    );
  }
}

export default AnotherCounterClass;
