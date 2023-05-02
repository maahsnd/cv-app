import React, { Component } from 'react';
import '../styles/style.css';

class Practical extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: '',
      positionTitle: '',
      mainTasks: '',
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
      A section to add practical experience (company name, position title, main tasks of your
      jobs, date from and until when you worked for that company). Edit & submit-edit btns via props.
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
      <div>
        <h2>Company: {this.state.companyName}</h2>
        <h2>Position: {this.state.positionTitle}</h2>
        <h2>Main tasks: {this.state.mainTasks}</h2>
        <h2>Dates: {this.state.dates}</h2>
        {this.editBtn(this.edit)}
      </div>
    );
  }

  editForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Company Name:
          <input
            type="text"
            name="companyName"
            value={this.state.companyName}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Position Title:
          <input
            type="text"
            name="positionTitle"
            value={this.state.positionTitle}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Main Tasks:
          <input
            type="text"
            name="mainTasks"
            value={this.state.mainTasks}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Dates:
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

export default Practical;
