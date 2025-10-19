import React from 'react';
import { NavLink } from 'react-router-dom';
import './Style/Navigation.css';

function Navigation() {
  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? '#ffd700' : '#ffffff',
    fontWeight: isActive ? '700' : '500',
    textDecoration: 'none'
  });

  return (
    <nav className="navigation">
      <NavLink to="/" style={navLinkStyle} className="nav-link">
        🏠 Home
      </NavLink>
      <NavLink to="/about" style={navLinkStyle} className="nav-link">
        ℹ️ About
      </NavLink>
      <NavLink to="/team" style={navLinkStyle} className="nav-link">
        👥 Team
      </NavLink>
      <NavLink to="/liked-users" style={navLinkStyle} className="nav-link">
        ❤️ Liked Users
      </NavLink>
    </nav>
  );
}

export default Navigation;
