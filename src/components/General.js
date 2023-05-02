import React, { Component } from 'react';

class General extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      tel: '',
      editing: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /* Responsibility:       
  Creates a section to add general information like name, email, phone number.
  Edit & submit-edit btns via props. */

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('submit');
    this.setState({ editing: false });
  }

  displayData() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <h2>{this.state.email}</h2>
        <h2>{this.state.tel}</h2>
      </div>
    );
  }

  editForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Phone number:
          <input
            type="tel"
            name="tel"
            value={this.state.tel}
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
    console.log(generalInfo);

    return <div>{generalInfo}</div>;
  }
}

export default General;
