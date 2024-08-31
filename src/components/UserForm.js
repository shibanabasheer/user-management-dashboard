import React, { useState, useEffect } from 'react';
import { validateEmail } from '../utils/validation';
import '../styles/UserForm.css';

// UserForm component for creating or editing user details
const UserForm = ({ selectedUser, onSave, onCancel }) => {
  const [user, setUser] = useState({ id: null, firstName: '', lastName: '', email: '', department: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (selectedUser) {
      setUser(selectedUser);
    } else {
      setUser({ id: null, firstName: '', lastName: '', email: '', department: '' });
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(user)) {
      onSave(user);
    }
  };

  const validateForm = (user) => {
    const newErrors = {};
    if (!user.firstName) newErrors.firstName = 'First Name is required.';
    if (!user.lastName) newErrors.lastName = 'Last Name is required.';
    if (!user.email) {
      newErrors.email = 'Email is required.';
    } else if (!validateEmail(user.email)) {
      newErrors.email = 'Invalid email address.';
    }
    if (!user.department) newErrors.department = 'Department is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" name="firstName" value={user.firstName} onChange={handleChange} required />
        {errors.firstName && <span className="error-message">{errors.firstName}</span>}
      </label>
      <label>
        Last Name:
        <input type="text" name="lastName" value={user.lastName} onChange={handleChange} required />
        {errors.lastName && <span className="error-message">{errors.lastName}</span>}
      </label>
      <label>
        Email:
        <input type="email" name="email" value={user.email} onChange={handleChange} required />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </label>
      <label>
        Department:
        <input type="text" name="department" value={user.department} onChange={handleChange} required />
        {errors.department && <span className="error-message">{errors.department}</span>}
      </label>
      <div className="form-buttons">
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default UserForm;
