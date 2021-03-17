import React from "react";

class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleCount = this.handleCount.bind(this);
  }

  handleCount() {
    if (this.state.count >= 10) {
      this.setState({ count: 0 });
    } else {
      this.setState({ count: this.state.count + 1 });
    }
  }

  render() {
    return (
      <div>
        Using Constructor and binding <br />
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

export default CounterClass;

/*handleCount() {
  if (this.state.count >= 10) {
    this.setState((prevState) => ({ count: 0 }));
  } else {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }
}*/
