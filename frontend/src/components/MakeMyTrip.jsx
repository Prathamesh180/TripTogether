import React, { useState } from 'react';
import '../styles/MakeMyTrip.css';

export default function MakeMyTrip() {
  const [formData, setFormData] = useState({
    location: '',
    date: '',
    time: '',
    member: '',
    gender: '',
    age: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the data to be sent
    const data = {
      location: formData.location,
      date: formData.date,
      time: formData.time,
      member: formData.member,
      gender: formData.gender,
      age: formData.age
    };

    // Make an HTTP POST request to the server
    fetch('http://localhost:8000/api/v1/createtrip', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.ok) {
          // Form submission successful
          setSuccessMessage('Form submitted successfully!');
          setFormData({
            location: '',
            date: '',
            time: '',
            member: '',
            gender: '',
            age: ''
          });
        } else {
          // Form submission failed
          throw new Error('Something went wrong. Please try again.');
        }
      })
      .catch(error => {
        // Handle any errors that occur during the request
        setErrorMessage(error.message);
        console.error('Error:', error);
      });
  };

  return(
    
    <div className="form-container bg-green-300">
      <h2>Fill in the Form</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Location:
          <input type="text" name="location" value={formData.location} onChange={handleChange} />
        </label>
        <label>
          Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
        </label>
        <label>
          Time:
          <input type="time" name="time" value={formData.time} onChange={handleChange} />
        </label>
        <label>
          Number of People:
          <input type="number" name="member" value={formData.member} onChange={handleChange} />
        </label>
        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </label>
        <button type="submit" >Submit</button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
   

    
  )
}
