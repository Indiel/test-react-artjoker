import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { registration } from '../../actions/actions';
import './authorization.css';

import renderField from '../render-field/render-field';
// import validate from '../../helpers/validate';
import { validate } from '../../helpers/validate';

const Authorization = ({ handleSubmit, isRegistration, onRegistration }) => {
  return (
    <div className="authorization__wrapper">
      <div className="authorization">
        <h2>{isRegistration ? 'Вход' : 'Регистрация'}</h2>
        <form className="authorization__form" onSubmit={handleSubmit}>

          <Field
            component={renderField}
            name="email"
            type="email"
            id="authorization-email"
            label="Email:"
            placeholder="Enter your email..."
          />

          <Field
            component={renderField}
            name="password"
            type="password"
            id="authorization-password"
            label="Password:"
            placeholder="Enter your password..."
          />

          {isRegistration ? undefined : (
            <label htmlFor="authorization-checkbox">
              <input
                id="authorization-checkbox"
                name="checkbox"
                type="checkbox"
                required
              />
              I’m agree with terms and conditions
            </label>
          )}

          <button type="submit" className="btn authorization__submit">
            Enter
          </button>

          {isRegistration
            ? (
              <p className="authorization__toggle">
                Не можете войти?
                <button type="button" className="btn authorization__btn" onClick={onRegistration}> Зарегистрироваться</button>
              </p>
            )
            : (
              <p className="authorization__toggle">
                Зарегистрированы?
                <button type="button" className="btn authorization__btn" onClick={onRegistration}> Войти</button>
              </p>
            )}
        </form>
      </div>
    </div>
  );
};

const AuthorizationForm = reduxForm({
  form: 'authorization',
  validate,
})(Authorization);

const mapStateToProps = (state) => {
  return { isRegistration: state.login.isRegistration };
};

const mapDispatchToProps = (dispatch) => {
  return { onRegistration: () => { dispatch(registration()); } };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationForm);
