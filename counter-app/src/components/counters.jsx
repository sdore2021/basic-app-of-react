import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onReset} className="btn btn-primary sm m-2">
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={() => this.props.onDelete(counter.id)}
            onIcrement={() => this.props.onIncrement(counter)}
            counter={counter}
            selected={true}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
