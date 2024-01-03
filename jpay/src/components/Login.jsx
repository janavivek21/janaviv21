import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    pass: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
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
    // Proceed with the login logic if all fields are filled
    // For example, you can make an API call to authenticate the user.
    alert('Login Successful!');
  };

  return (
    <body>
         <div className="main-wrap">
        <form className="form" onSubmit={handleLogin}>
          <div className="form-wrap">
            <h1>
              <span>Login</span>
            </h1>
            <h6>Hi There...!</h6>

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
            <div className='forpass'>
              <span>Forget password?</span>
            </div>
            <br />

            <center>
              <button className="form-btn" type="submit">
                LOGIN
              </button>
              <br></br>
              <br></br>
              new user ?<Link className="Signup" to={'/Signup'}> Create account </Link>
            </center>
          </div>
        </form>
      </div>
    </body>
  );
}

export default Login;
