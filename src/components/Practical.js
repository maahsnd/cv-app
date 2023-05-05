import React, { useState } from 'react';
import '../styles/style.css';

const Practical = (props) => {
  const [companyName, setCompanyName] = useState('');
  const [positionTitle, setPositionTitle] = useState('');
  const [mainTasks, setMainTasks] = useState('');
  const [dates, setDates] = useState('');
  const [editing, setEditing] = useState(true);

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.edit = this.edit.bind(this);
  const editBtn = props.editBtn;

  /*  
    Responsiblity:
      A section to add practical experience (company name, position title, main tasks of your
      jobs, date from and until when you worked for that company). Edit & submit-edit btns via props.
   */
  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    /* potential bug: comparison of field and string fails */
    if (field == 'companyName') {
      setCompanyName(value);
    }
    if (field == 'positionTitle') {
      setPositionTitle(value);
    }
    if (field == 'mainTasks') {
      setMainTasks(value);
    }
    if (field == 'dates') {
      setDates(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditing(false);
  };

  const edit = () => {
    setEditing(true);
  };

  const displayData = () => {
    return (
      <div className="display">
        <p>Company: {companyName}</p>
        <p>Position: {positionTitle}</p>
        <p>Main tasks: {mainTasks}</p>
        <p>Dates: {dates}</p>
        {editBtn(edit)}
      </div>
    );
  };

  const editForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Company Name:
          <input
            type="text"
            name="companyName"
            value={companyName}
            onChange={handleChange}
          />
        </label>

        <label>
          Position Title:
          <input
            type="text"
            name="positionTitle"
            value={positionTitle}
            onChange={handleChange}
          />
        </label>

        <label>
          Main Tasks:
          <input
            type="text"
            name="mainTasks"
            value={mainTasks}
            onChange={handleChange}
          />
        </label>

        <label>
          Dates:
          <input
            type="text"
            name="dates"
            value={dates}
            onChange={handleChange}
          />
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  };

  let generalInfo;
  editing ? (generalInfo = editForm()) : (generalInfo = displayData());

  return <div>{generalInfo}</div>;
};

export default Practical;
