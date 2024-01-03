import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    pass: '',
    cpass: '',
    Ages: '',
    DOB: '',
    phno: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    for (const key in formData) {
      if (formData[key] === '') {
        alert(`Please fill in the ${key === 'pass' ? 'password' : key} field.`);
        return;
      }
    }
    // Proceed with the signup logic if all fields are filled
    // For example, you can make an API call to register the user.
    alert('Signup Successful!');
  };

  return (
    <body>
      <div className="main-wrap">
        <div className="form-wrap">
          <h1>
            SIGN <span>UP</span>
          </h1>
          <h6>Welcome to Jpay</h6>
          <form className="form" onSubmit={handleSignup}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <br />
            <input
              type="password"
              name="pass"
              id="pass"
              placeholder="Password"
              value={formData.pass}
              onChange={handleInputChange}
            />
            <br />
            <input
              type="password"
              name="cpass"
              id="cpass"
              placeholder="Confirm Password"
              value={formData.cpass}
              onChange={handleInputChange}
            />
            <br />
            <input
              type="number"
              name="Ages"
              id="Ages"
              placeholder="Age"
              value={formData.Ages}
              onChange={handleInputChange}
            />
            <br />
            <input
              type="date"
              name="DOB"
              id="DOB"
              placeholder="Date of Birth"
              value={formData.DOB}
              onChange={handleInputChange}
            />
            <br />
            <input
              type="number"
              name="phno"
              id="phno"
              placeholder="Phone Number"
              value={formData.phno}
              onChange={handleInputChange}
            />
            <center>
              <button type="submit" className="form-btn">
                SIGN UP
              </button>
              <br></br>
              <br></br>
              already a User? <Link className="login" to={'/Login'}>
                LOGIN
              </Link>
            </center>
          </form>
        </div>
      </div>
    </body>
  );
}

export default Signup;
