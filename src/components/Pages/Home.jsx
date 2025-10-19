import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to InstaBoard</h1>
          <p className="hero-subtitle">
            Discover amazing users and connect with your community!
          </p>
          <div className="hero-buttons">
            <Link to="/team" className="cta-button primary">
              🚀 Explore Team Members
            </Link>
            <Link to="/about" className="cta-button secondary">
              📖 Learn More
            </Link>
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose InstaBoard?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Meet Amazing People</h3>
              <p>Discover profiles of interesting people from around the world and connect with them.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">❤️</div>
              <h3>Like & Save Favorites</h3>
              <p>Like users you find interesting and save them to your favorites list for easy access.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Detailed Profiles</h3>
              <p>View comprehensive user profiles with contact information and personal details.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Modern Interface</h3>
              <p>Enjoy a clean, modern, and responsive design that works perfectly on all devices.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <div className="container">
          <h2 className="section-title">Join Our Growing Community</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Active Users</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Countries</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
