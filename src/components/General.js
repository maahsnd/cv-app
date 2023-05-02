import React, { Component } from 'react';

class General extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      tel: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  /* Responsibility:       
  Creates a section to add general information like name, email, phone number.
  Edit & submit-edit btns via props. */

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <form>
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
      </div>
    );
  }
}

export default General;
