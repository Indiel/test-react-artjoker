import React from 'react';
import { NavLink } from 'react-router-dom';
import './main-nav.css';

const MainNav = () => {
  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        <li>
          <NavLink to="/" activeClassName="active" exact className="nav-link">Home</NavLink>
        </li>
        <li>
          <NavLink to="/news" activeClassName="active" className="nav-link">News</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
