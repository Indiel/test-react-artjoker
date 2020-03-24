import React from 'react';
import './footer.css';

import MainNav from '../main-nav/main-nav';
import UserNav from '../user-nav/user-nav';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper footer__wrapper">
        <MainNav />
        <UserNav />
      </div>
    </footer>
  );
};

export default Footer;
