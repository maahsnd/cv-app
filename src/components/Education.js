import React, { useState } from 'react';
import '../styles/style.css';

const Education = (props) => {
  const [school, setSchool] = useState('');
  const [areaOfStudy, setAreaOfStudy] = useState('');
  const [dates, setDates] = useState('');
  const [editing, setEditing] = useState(true);

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.edit = this.edit.bind(this);

  const editBtn = props.editBtn;

  /*  
    Responsiblity:
    A section to add your educational experience (school name, title of study, date of study).
    Edit & submit-edit btns via props.
   */
  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    /* potential bug: comparison of field and string fails */
    if (field == 'school') {
      setSchool(value);
    }
    if (field == 'areaOfStudy') {
      setAreaOfStudy(value);
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
        <p>School: {school}</p>
        <p>Area of Study: {areaOfStudy}</p>
        <p>Dates: {dates}</p>
        {editBtn(edit)}
      </div>
    );
  };

  const editForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <label>
          School:
          <input
            type="text"
            name="school"
            value={school}
            onChange={handleChange}
          />
        </label>

        <label>
          Area of Study:
          <input
            type="text"
            name="areaOfStudy"
            value={areaOfStudy}
            onChange={handleChange}
          />
        </label>

        <label>
          Dates of Study:
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
  editing
    ? (generalInfo = this.editForm())
    : (generalInfo = this.displayData());

  return <div>{generalInfo}</div>;
};

export default Education;
