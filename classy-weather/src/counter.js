import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 5 };

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    this.setState((curstate) => {
      return { count: curstate.count + 1 };
    });
  }
  handleDecrement() {
    this.setState((curstate) => {
      return { count: curstate.count - 1 };
    });
  }

  render() {
    return (
      <div style={{ fontSize: "50px" }}>
        <button
          style={{
            width: "50px",
            height: "100px",
            fontSize: "50px",
            borderRadius: "10px",
          }}
          onClick={this.handleDecrement}
        >
          -
        </button>
        <span>{this.state.count}</span>
        <button
          style={{
            width: "50px",
            height: "100px",
            fontSize: "50px",
            borderRadius: "10px",
          }}
          onClick={this.handleIncrement}
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
