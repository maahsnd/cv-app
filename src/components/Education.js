import React, { Component } from 'react';
import '../styles/style.css';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: '',
      areaOfStudy: '',
      dates: '',
      editing: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.edit = this.edit.bind(this);
    this.editBtn = props.editBtn;
  }

  /*  
    Responsiblity:
    A section to add your educational experience (school name, title of study, date of study).
    Edit & submit-edit btns via props.
   */
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ editing: false });
  }

  edit() {
    this.setState({ editing: true });
  }

  displayData() {
    return (
      <div className="display">
        <p>School: {this.state.school}</p>
        <p>Area of Study: {this.state.areaOfStudy}</p>
        <p>Dates: {this.state.dates}</p>
        {this.editBtn(this.edit)}
      </div>
    );
  }

  editForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          School:
          <input
            type="text"
            name="school"
            value={this.state.school}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Area of Study:
          <input
            type="text"
            name="areaOfStudy"
            value={this.state.areaOfStudy}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Dates of Study:
          <input
            type="text"
            name="dates"
            value={this.state.dates}
            onChange={this.handleChange}
          />
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }

  render() {
    const editingStatus = this.state.editing;
    let generalInfo;
    editingStatus
      ? (generalInfo = this.editForm())
      : (generalInfo = this.displayData());

    return <div>{generalInfo}</div>;
  }
}

export default Education;
