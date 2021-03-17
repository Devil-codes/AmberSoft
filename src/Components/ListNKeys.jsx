import React from "react";
class ListNKeys extends React.Component {
  state = { number: [2, 3, 4, 5], str: ["Hello", "World", "!"] };
  returnValue() {
    return this.state.str.length === 0
      ? "No Elements Available"
      : this.state.str.map((str) => (
          <li className="visible list-group-item" key={str}>
            {str}
          </li>
        ));
  }
  render() {
    return (
      <>
        <ul className="list-group">{this.returnValue()}</ul>
        <ol>
          {this.state.number.map((number) => (
            <li className="invisible list-group-item" key={number}>
              {number * 2}
            </li>
          ))}
        </ol>
      </>
    );
  }
}

export default ListNKeys;
