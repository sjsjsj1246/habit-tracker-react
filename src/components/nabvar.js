import React, { Component } from 'react';

class Nabvar extends Component {
  render() {
    return (
      <nav>
        <i className="navbar-logo fas fa-leaf"></i>
        <span>Habit Tracker</span>
        <span className="navbar-count">9</span>
      </nav>
    );
  }
}

export default Nabvar;
