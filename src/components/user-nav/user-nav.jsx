import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { singOut } from '../../actions/actions';
import './user-nav.css';

const UserNav = ({ isSignIn, handlerSingOut }) => {
  return (
    <nav className="user-nav">
      <ul className="user-nav__list">
        {isSignIn ? <li><NavLink to="/profile" activeClassName="active" className="nav-link">Profile</NavLink></li> : undefined}

        {isSignIn
          ? <li><button type="button" className="btn user-nav__btn" onClick={handlerSingOut}>Выход</button></li>
          : <li><Link to="/authorization" className="btn  user-nav__btn">Вход/Регистрация</Link></li>}
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return { isSignIn: Boolean(state.login.isSignIn) };
};

const mapDispatchToProps = (dispatch) => {
  return { handlerSingOut: () => { dispatch(singOut()); } };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserNav);
