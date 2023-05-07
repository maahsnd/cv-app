import React, { useState } from 'react';
import '../styles/style.css';

const General = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [editing, setEditing] = useState(true);

  /* Responsibility:       
  Creates a section to add general information like name, email, phone number.
  Edit & submit-edit btns via props. */

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    /* potential bug: comparison of field and string fails */
    if (field == 'name') {
      setName(value);
    }
    if (field == 'email') {
      setEmail(value);
    }
    if (field == 'tel') {
      setTel(value);
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
        <p>{name}</p>
        <p>{email}</p>
        <p>{tel}</p>
        <button onClick={edit}>Edit</button>
      </div>
    );
  };

  const editForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label>
          Phone number:
          <input type="tel" name="tel" value={tel} onChange={handleChange} />
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  };

  let generalInfo;
  editing ? (generalInfo = editForm()) : (generalInfo = displayData());

  return <div>{generalInfo}</div>;
};

export default General;
