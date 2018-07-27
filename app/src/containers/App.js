import React, { Component } from 'react';
import Navigation from '../components/molecules/Navigation';
import Fonts from '../styles/fonts.css';
import Util from '../styles/util.css';

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
