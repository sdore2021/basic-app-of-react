import React, { Component } from "react";
class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getColor()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIcrement(this.props.counter)}
          className="btn btn-secondary bnt-sm m-2"
        >
          Increment
        </button>
        <button onClick={this.props.onDelete} className="btn btn-danger sm m-2">
          Delete
        </button>
      </div>
    );
  }

  getColor() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
