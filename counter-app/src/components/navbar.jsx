import React, { Component } from "react";
/*class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
          <span className="badge bagde-pill badge-secondary m-2">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}
*/
//stateless function componnent
//many developpers use this method instead of class component
const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge bagde-pill badge-secondary m-2">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
