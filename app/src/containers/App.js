import React, { Component } from 'react';
import Navigation from '../components/molecules/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
