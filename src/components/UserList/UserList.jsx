import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from '../UserCard/UserCard';
import { useDarkMode } from '../../contexts/DarkModeContext';
import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  // Function to fetch users from API
  const fetchUsers = async (append = false) => {
    try {
      if (append) {
        setLoadingMore(true);
      } else {
        setLoading(true);
      }
      
      const response = await axios.get('https://randomuser.me/api/?results=12');
      const fetchedUsers = response.data.results.map((user, index) => ({
        id: append ? users.length + index + 1 : index + 1,
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        picture: user.picture.large
      }));

      if (append) {
        setUsers(prevUsers => [...prevUsers, ...fetchedUsers]);
      } else {
        setUsers(fetchedUsers);
      }
      
      setError(null);
    } catch (err) {
      setError('Failed to fetch users. Please try again.');
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  // Filter users based on search query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  }, [users, searchQuery]);

  // Fetch initial users on component mount
  useEffect(() => {
    const loadInitialUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://randomuser.me/api/?results=12');
        const fetchedUsers = response.data.results.map((user, index) => ({
          id: index + 1,
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          picture: user.picture.large
        }));
        setUsers(fetchedUsers);
        setError(null);
      } catch (err) {
        setError('Failed to fetch users. Please try again.');
        console.error('Error fetching users:', err);
      } finally {
        setLoading(false);
      }
    };
    
    loadInitialUsers();
  }, []);

  // Handle Load More button click
  const handleLoadMore = () => {
    fetchUsers(true);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  if (loading) {
    return (
      <div className="user-list">
        <div className="user-list-header">
          <h1 className="user-list-title">InstaBoard - User Profiles</h1>
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
        <div className="loading">Loading users...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="user-list">
        <div className="user-list-header">
          <h1 className="user-list-title">InstaBoard - User Profiles</h1>
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
        <div className="error">
          {error}
          <button onClick={() => fetchUsers()} className="retry-button">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="user-list">
      <div className="user-list-header">
        <h1 className="user-list-title">InstaBoard - User Profiles</h1>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Search users by name..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
        <span className="search-icon">🔍</span>
      </div>

      {searchQuery && (
        <div className="search-results-info">
          {filteredUsers.length === 0 ? (
            <p>No users found matching "{searchQuery}"</p>
          ) : (
            <p>Found {filteredUsers.length} user(s) matching "{searchQuery}"</p>
          )}
        </div>
      )}
      
      <div className="user-list-container">
        {filteredUsers.map(user => (
          <UserCard
            key={user.id}
            picture={user.picture}
            name={user.name}
            email={user.email}
          />
        ))}
      </div>
      
      {!searchQuery && (
        <div className="load-more-container">
          <button 
            onClick={handleLoadMore} 
            className="load-more-button"
            disabled={loadingMore}
          >
            {loadingMore ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default UserList;
