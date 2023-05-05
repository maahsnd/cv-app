import React from 'react';
import General from './components/General';
import Education from './components/Education';
import Practical from './components/Practical';

const App = () => {
  const editBtn = (onClickFunc) => {
    <button onClick={onClickFunc}>Edit</button>;
  };

  return (
    <div className="host">
      <h2 className="title">My CV</h2>
      <General editBtn={editBtn} />
      <hr></hr>
      <Education editBtn={editBtn} />
      <hr></hr>
      <Practical editBtn={editBtn} />
    </div>
  );
};

export default App;
