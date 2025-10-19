import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './Team.css';

function Team() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [numberOfResults, setNumberOfResults] = useState(12);
  const [likedUsers, setLikedUsers] = useState([]);

  useEffect(() => {
    const savedLikedUsers = JSON.parse(localStorage.getItem('likedUsers') || '[]');
    setLikedUsers(savedLikedUsers);
  }, []);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://randomuser.me/api/?results=${numberOfResults}`);
      const data = await response.json();
      setUsers(data.results);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  }, [numberOfResults]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const loadMoreUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://randomuser.me/api/?results=12`);
      const data = await response.json();
      setUsers(prevUsers => [...prevUsers, ...data.results]);
    } catch (error) {
      console.error('Error loading more users:', error);
    } finally {
      setLoading(false);
    }
  };

  const likeUser = (user) => {
    const newLikedUsers = [...likedUsers, user];
    setLikedUsers(newLikedUsers);
    localStorage.setItem('likedUsers', JSON.stringify(newLikedUsers));
  };

  const isUserLiked = (user) => {
    return likedUsers.some(likedUser => likedUser.email === user.email);
  };

  const handleNumberOfResultsChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= 1 && value <= 100) {
      setNumberOfResults(value);
    }
  };

  return (
    <div className="team-page">
      <h1>Team Members</h1>
      
      <div className="controls">
        <label htmlFor="numberOfResults">Number of results (1-100):</label>
        <input
          type="number"
          id="numberOfResults"
          min="1"
          max="100"
          value={numberOfResults}
          onChange={handleNumberOfResultsChange}
        />
      </div>

      {loading && <div className="loading">Loading...</div>}

      <div className="users-grid">
        {users.map((user, index) => (
          <div key={`${user.email}-${index}`} className="user-card">
            <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
            <h3>{user.name.first} {user.name.last}</h3>
            <p>{user.email}</p>
            <p>{user.location.city}, {user.location.country}</p>
            
            <div className="card-actions">
              <Link
                to={`/team/${index}`}
                state={{ user }}
                className="view-profile-btn"
              >
                View Profile
              </Link>
              
              {!isUserLiked(user) && (
                <button
                  onClick={() => likeUser(user)}
                  className="like-btn"
                >
                  Like
                </button>
              )}
              
              {isUserLiked(user) && (
                <span className="liked-indicator">Liked ❤️</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="load-more-section">
        <button onClick={loadMoreUsers} disabled={loading} className="load-more-btn">
          {loading ? 'Loading...' : 'Load More'}
        </button>
      </div>
    </div>
  );
}

export default Team;
