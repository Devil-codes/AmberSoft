//Passing argument in an event
import React from "react";

class PassArgument extends React.Component {
  state = { count: 0 };

  incrementCount(temp) {
    this.setState({ count: this.state.count + 1 });
    console.log(temp);
  }

  render() {
    var temp = 1;
    return (
      <>
        <button
          onClick={() => {
            this.incrementCount(temp);
          }}
        >
          Increment
        </button>
        <span>{this.state.count}</span>
      </>
    );
  }
}
export default PassArgument;
