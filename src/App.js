import React, { Component } from 'react';
import General from './components/General';
import Education from './components/Education';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  editBtn(onClickFunc) {
    return <button onClick={onClickFunc}>Edit</button>;
  }

  render() {
    return (
      <div>
        <General editBtn={this.editBtn} />
        <hr></hr>
        <Education editBtn={this.editBtn} />
      </div>
    );
  }
}

export default App;
