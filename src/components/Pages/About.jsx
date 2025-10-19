import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <h1>About InstaBoard</h1>
      <p>
        InstaBoard is a modern social platform that helps you discover and connect 
        with amazing people from around the world. Our mission is to create 
        meaningful connections and foster a vibrant community.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Discover new users and profiles</li>
        <li>Like and save your favorite users</li>
        <li>Browse team members and their details</li>
        <li>Modern and intuitive user interface</li>
      </ul>
      <h2>Contact Us</h2>
      <p>
        Have questions or feedback? We'd love to hear from you! 
        Reach out to our team for support and suggestions.
      </p>
    </div>
  );
}

export default About;
