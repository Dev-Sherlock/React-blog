import React, { Component } from 'react';
import NavBar from './navbar';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (

      <div>
        <h1>Logo</h1>
        <NavBar></NavBar>
      </div>
    );
  }
}
export default App;
