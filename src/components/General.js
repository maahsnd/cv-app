import React, { Component } from 'react';
import '../styles/style.css';

class General extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      tel: '',
      editing: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.edit = this.edit.bind(this);
    this.editBtn = props.editBtn;
  }

  /* Responsibility:       
  Creates a section to add general information like name, email, phone number.
  Edit & submit-edit btns via props. */

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
        <p>{this.state.name}</p>
        <p>{this.state.email}</p>
        <p>{this.state.tel}</p>
        {this.editBtn(this.edit)}
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

    return <div>{generalInfo}</div>;
  }
}

export default General;
