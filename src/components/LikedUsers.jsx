import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Style/LikedUsers.css';

function LikedUsers() {
  const [likedUsers, setLikedUsers] = useState([]);

  useEffect(() => {
    const savedLikedUsers = JSON.parse(localStorage.getItem('likedUsers') || '[]');
    setLikedUsers(savedLikedUsers);
  }, []);

  const unlikeUser = (userToUnlike) => {
    const updatedLikedUsers = likedUsers.filter(user => user.email !== userToUnlike.email);
    setLikedUsers(updatedLikedUsers);
    localStorage.setItem('likedUsers', JSON.stringify(updatedLikedUsers));
  };

  return (
    <div className="liked-users-page">
      <div className="page-header">
        <h1>Liked Users ❤️</h1>
        <Link to="/team" className="back-to-team-btn">Back to Team</Link>
      </div>

      {likedUsers.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">💔</div>
          <h2>No liked users yet</h2>
          <p>You haven't liked any users yet. Go to the team page to start liking users!</p>
          <Link to="/team" className="go-to-team-btn">Explore Team Members</Link>
        </div>
      ) : (
        <>
          <div className="liked-count">
            <p>You have liked {likedUsers.length} user{likedUsers.length !== 1 ? 's' : ''}</p>
          </div>
          
          <div className="liked-users-grid">
            {likedUsers.map((user, index) => (
              <div key={`${user.email}-${index}`} className="liked-user-card">
                <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
                <div className="user-info">
                  <h3>{user.name.first} {user.name.last}</h3>
                  <p className="email">{user.email}</p>
                  <p className="location">{user.location.city}, {user.location.country}</p>
                  <p className="phone">{user.phone}</p>
                </div>
                
                <div className="card-actions">
                  <Link
                    to={`/team/${index}`}
                    state={{ user }}
                    className="view-profile-btn"
                  >
                    View Profile
                  </Link>
                  
                  <button
                    onClick={() => unlikeUser(user)}
                    className="unlike-btn"
                  >
                    Unlike 💔
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default LikedUsers;
