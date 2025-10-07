import React, { useState } from 'react';
import './UserCard.css';

const UserCard = ({ picture, name, email }) => {
  const [likes, setLikes] = useState(0);
  const [showEmail, setShowEmail] = useState(true);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const toggleEmail = () => {
    setShowEmail(!showEmail);
  };

  return (
    <div className="user-card">
      <div className="user-card-header">
        <img src={picture} alt={`${name}'s profile`} className="user-avatar" />
        <div className="user-info">
          <h3 className="user-name">{name}</h3>
          {showEmail && <p className="user-email">{email}</p>}
        </div>
      </div>
      
      <div className="user-card-actions">
        <button className="like-button" onClick={handleLike}>
          ❤️ Like ({likes})
        </button>
        <button className="toggle-email-button" onClick={toggleEmail}>
          {showEmail ? 'Hide Email' : 'Show Email'}
        </button>
      </div>
    </div>
  );
};

export default UserCard;
