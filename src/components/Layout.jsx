import React from 'react';
import Navigation from './Navigation';
import './Style/Layout.css';

function Layout({ children }) {
  return (
    <div className="layout-container">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <h2>📋 InstaBoard</h2>
          </div>
          <Navigation />
        </div>
      </header>
      
      <main className="main-content">
        {children}
      </main>
      
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>📋 InstaBoard</h3>
            <p>Connect with amazing people worldwide</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/team">Team</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>📧 asaadessam880@gmail.com</p>
            <p>📞 +962 (77) 932-9950</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 InstaBoard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
