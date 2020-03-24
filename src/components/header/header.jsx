import React from 'react';
import './header.css';

import MainNav from '../main-nav/main-nav';
import UserNav from '../user-nav/user-nav';

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper header__wrapper">
        <MainNav />
        <UserNav />
      </div>
    </header>
  );
};

export default Header;
