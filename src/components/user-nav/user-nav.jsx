import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { singOut } from '../../actions/actions';
import './user-nav.css';

const UserNav = ({ isSingIn, handlerSingOut }) => {
  return (
    <nav className="user-nav">
      <ul className="user-nav__list">
        {isSingIn ? <li><NavLink to="/profile" activeClassName="active" className="nav-link">Profile</NavLink></li> : undefined}

        {isSingIn
          ? <li><button type="button" className="btn user-nav__btn" onClick={handlerSingOut}>Выход</button></li>
          : <li><Link to="/authorization" className="btn  user-nav__btn">Вход/Регистрация</Link></li>}
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return { isSingIn: Boolean(state.login.isSingIn) };
};

const mapDispatchToProps = (dispatch) => {
  return { handlerSingOut: () => { dispatch(singOut()); } };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserNav);
