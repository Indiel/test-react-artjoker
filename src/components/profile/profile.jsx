/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { showChangeForm } from '../../actions/actions';
import { validateEmail, validatePassword, validateAge, validatePhone } from '../../helpers/validate';
import './profile.css';

import renderField from '../render-field/render-field';
import renderHobbies from '../render-hobbies/render-hobbies';

const Profile = ({ handleSubmit, enteredUser, isShowChangeForm, handlerShowChangeForm }) => {
  return (
    <div className="profile">
      <section className="profile__info">
        <h2>Профиль</h2>
        {enteredUser.name ? (
          <p className="profile__date">
            Имя:
            <span>
              {' '}
              {enteredUser.name}
            </span>
          </p>
        ) : undefined}

        {enteredUser.email && (
          <p className="profile__date">
            Email:
            <span>
              {' '}
              {enteredUser.email}
            </span>
          </p>
        )}

        {enteredUser.phone && (
          <p className="profile__date">
            Телефон:
            <span>
              {' '}
              {enteredUser.phone}
            </span>
          </p>
        )}

        {enteredUser.gender && (
          <p className="profile__date">
            Пол:
            <span>
              {' '}
              {enteredUser.gender}
            </span>
          </p>
        )}

        {enteredUser.age && (
          <p className="profile__date">
            Возраст:
            <span>
              {' '}
              {enteredUser.age}
            </span>
          </p>
        )}

        {enteredUser.hobbies && (
          <p className="profile__date">
            Хобби:
            <span>
              {' '}
              {enteredUser.hobbies.join(', ')}
            </span>
          </p>
        )}

        <button type="button" className="btn profile__show-form-btn" onClick={handlerShowChangeForm}>Анкета</button>
      </section>
      {isShowChangeForm ? (
        <section className="profile__rewrite">
          <h2>Отредактируйте данные:</h2>
          <form className="profile__form" onSubmit={handleSubmit}>
            <Field
              component={renderField}
              name="name"
              type="text"
              id="profile-name"
              label="Имя и фамилия:"
              placeholder="Введите имя и фамилию"
            />

            <Field
              component={renderField}
              name="email"
              type="text"
              id="profile-email"
              label="Email:"
              placeholder="Введите email"
              validate={[validateEmail]}
            />

            <Field
              component={renderField}
              name="phone"
              type="phone"
              id="profile-phone"
              label="Телефон:"
              placeholder="Введите номер"
              validate={[validatePhone]}
            />

            <p className="profile__gender">Пол:</p>
            <Field
              component="input"
              name="gender"
              type="radio"
              id="profile-gender-m"
              value="Мужской"
            />
            <label htmlFor="profile-gender-m" className="profile__gender-label"> Мужской  </label>

            <Field
              component="input"
              name="gender"
              type="radio"
              id="profile-gender-f"
              value="Женский"
            />
            <label htmlFor="profile-gender-f" className="profile__gender-label"> Женский</label>

            <Field
              component={renderField}
              name="age"
              type="number"
              id="profile-age"
              label="Возраст:"
              placeholder="Возраст"
              validate={[validateAge]}
            />

            <Field
              component={renderField}
              name="password"
              type="password"
              id="profile-password"
              label="Пароль:"
              placeholder="Измените пароль"
              validate={[validatePassword]}
            />

            <FieldArray
              component={renderHobbies}
              name="hobbies"
              oldRecord={enteredUser.hobbies}
            />

            <button type="submit" className="btn">Изменить</button>
          </form>
        </section>
      ) : undefined}
    </div>
  );
};

const ProfileForm = reduxForm({ form: 'profile' })(Profile);

const mapStateToProps = (state) => {
  return {
    enteredUser: state.login.enteredUser,
    isShowChangeForm: state.login.isShowChangeForm,
    state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { handlerShowChangeForm: () => { dispatch(showChangeForm()); } };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
