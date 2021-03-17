import React from "react";

class ChangingBadge extends React.Component {
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

  returnBadgeClass() {
    //badge will be red for value zero but other than that it will be yellow
    return this.state.count === 0
      ? "badge badge-danger"
      : "badge badge-warning";
  }

  render() {
    return (
      <div>
        Using Constructor and binding with conditional rendering
        <br />
        <button onClick={this.handleCount} className="btn btn-primary m-3">
          Increment
        </button>
        <span className={this.returnBadgeClass()}>
          <b>{this.state.count === 0 ? "---" : this.state.count}</b>
        </span>
      </div>
    );
  }
}

export default ChangingBadge;

/*handleCount() {
  if (this.state.count >= 10) {
    this.setState((prevState) => ({ count: 0 }));
  } else {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }
}*/
