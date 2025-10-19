import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <div className="error-icon">🔍</div>
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Page Not Found</h2>
        <p className="error-message">
          Oops! The page you're looking for doesn't exist. 
          It might have been moved, deleted, or you entered the wrong URL.
        </p>
        
        <div className="action-buttons">
          <Link to="/" className="home-btn">
            🏠 Go Home
          </Link>
          <Link to="/team" className="team-btn">
            👥 Browse Team
          </Link>
        </div>
        
        <div className="additional-links">
          <p>Or try one of these pages:</p>
          <div className="quick-links">
            <Link to="/about" className="quick-link">About Us</Link>
            <Link to="/liked-users" className="quick-link">Liked Users</Link>
          </div>
        </div>
      </div>
    </div>
  );
}


export default NotFound;
