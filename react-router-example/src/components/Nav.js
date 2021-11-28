import React from 'react';
import { Link } from 'react-router-dom';

export function Nav(props) {
  return (
    <div>
      <h1>Navigation</h1>
      <Link to="/">Home</Link> |<Link to="/flights/1">Flights/1</Link> |
      <Link to="/edit/1">Edit/1</Link>
    </div>
  );
}
