import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <nav>
        <Link to="/">
          <h1>To-Do App</h1>
        </Link>
      </nav>
      <Navigation />
    </div>
  );
}
