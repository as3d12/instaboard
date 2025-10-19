import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './TeamDetails.css';

function TeamDetails() {
  const location = useLocation();
  const { user } = location.state || {};

  if (!user) {
    return (
      <div className="team-details-page">
        <div className="error-message">
          <h1>User not found</h1>
          <p>Sorry, we couldn't find the user details you're looking for.</p>
          <Link to="/team" className="back-btn">Back to Team</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="team-details-page">
      <div className="back-navigation">
        <Link to="/team" className="back-btn">← Back to Team</Link>
      </div>

      <div className="profile-card">
        <div className="profile-header">
          <img 
            src={user.picture.large} 
            alt={`${user.name.first} ${user.name.last}`}
            className="profile-image"
          />
          <div className="profile-name">
            <h1>{user.name.title} {user.name.first} {user.name.last}</h1>
            <p className="username">@{user.login.username}</p>
          </div>
        </div>

        <div className="profile-details">
          <div className="detail-section">
            <h2>Contact Information</h2>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="label">Email:</span>
                <span className="value">{user.email}</span>
              </div>
              <div className="detail-item">
                <span className="label">Phone:</span>
                <span className="value">{user.phone}</span>
              </div>
              <div className="detail-item">
                <span className="label">Cell:</span>
                <span className="value">{user.cell}</span>
              </div>
            </div>
          </div>

          <div className="detail-section">
            <h2>Address</h2>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="label">Street:</span>
                <span className="value">{user.location.street.number} {user.location.street.name}</span>
              </div>
              <div className="detail-item">
                <span className="label">City:</span>
                <span className="value">{user.location.city}</span>
              </div>
              <div className="detail-item">
                <span className="label">State:</span>
                <span className="value">{user.location.state}</span>
              </div>
              <div className="detail-item">
                <span className="label">Country:</span>
                <span className="value">{user.location.country}</span>
              </div>
              <div className="detail-item">
                <span className="label">Postcode:</span>
                <span className="value">{user.location.postcode}</span>
              </div>
            </div>
          </div>

          <div className="detail-section">
            <h2>Personal Information</h2>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="label">Date of Birth:</span>
                <span className="value">{new Date(user.dob.date).toLocaleDateString()}</span>
              </div>
              <div className="detail-item">
                <span className="label">Age:</span>
                <span className="value">{user.dob.age} years old</span>
              </div>
              <div className="detail-item">
                <span className="label">Gender:</span>
                <span className="value">{user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}</span>
              </div>
              <div className="detail-item">
                <span className="label">Nationality:</span>
                <span className="value">{user.nat}</span>
              </div>
            </div>
          </div>

          <div className="detail-section">
            <h2>Account Information</h2>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="label">Username:</span>
                <span className="value">{user.login.username}</span>
              </div>
              <div className="detail-item">
                <span className="label">Registered:</span>
                <span className="value">{new Date(user.registered.date).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamDetails;
