import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };

  handleDelete = counterId => {
    const newCounter = this.state.counters.filter(elt => elt.id != counterId);
    this.setState({ counters: newCounter });
  };

  handleReset = () => {
    const counters = this.state.counters.map(elt => {
      elt.value = 0;
      return elt;
    });
    this.setState({ counters });
    console.log(this.state.counters);
    console.log("hello from handleReset");
  };

  handleIncrement = counter => {
    console.log("increment form counters ");
    let counters = [...this.state.counters];
    const index = this.state.counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
