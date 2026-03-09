import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Header() {
  return (
    <div className="header-container">
      <nav className="header-logo">
        <Link to="/">
          <h1>To-Do App</h1>
        </Link>
      </nav>
      <Navigation />
    </div>
  );
}
