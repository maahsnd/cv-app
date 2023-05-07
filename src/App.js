import React from 'react';
import General from './components/General';
import Education from './components/Education';
import Practical from './components/Practical';

const App = () => {
  return (
    <div className="host">
      <h2 className="title">My CV</h2>
      <General />
      <hr></hr>
      <Education />
      <hr></hr>
      <Practical />
    </div>
  );
};

export default App;
