import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  // State to manage user details
  const [userDetails, setUserDetails] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    address: '123 Main St, City, Country',
  });

  // State to manage form input
  const [formInput, setFormInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  // Function to handle form submission (updating user details)
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Update user details with the form input
    setUserDetails({
      ...userDetails,
      ...formInput,
    });
    // Reset form input
    setFormInput({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: '',
    });
  };

  return (
    <div className="profile-page">
      <h2>User Profile</h2>
      <div className="user-details">
        <p>
          <strong>First Name:</strong> {userDetails.firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {userDetails.lastName}
        </p>
        <p>
          <strong>Email:</strong> {userDetails.email}
        </p>
        <p>
          <strong>Phone Number:</strong> {userDetails.phoneNumber}
        </p>
        <p>
          <strong>Address:</strong> {userDetails.address}
        </p>

      </div>
      <div className="profile-page">
      <h2>User Profile</h2>

      {/* Balance Section */}
      <div className="balance-section">
        <p className="balance-label">Current Balance:</p>
        <p className="balance-amount">$1,000.00</p>
      </div>

      <div className="transaction-history-link">
        <Link to="/transaction-history">View Transaction History</Link>
      </div>

    
    </div>

      <form onSubmit={handleFormSubmit} className="update-form">
        <h3>Update Profile</h3>
        <label> 
          First Name:
          <input
            type="text"
            name="firstName"
            value={formInput.firstName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formInput.lastName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formInput.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={formInput.phoneNumber}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formInput.address}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default ProfilePage;
