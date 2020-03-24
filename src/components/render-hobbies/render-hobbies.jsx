import React from 'react';
import { Field } from 'redux-form';
import './render-hobbies.css';

import renderField from '../render-field/render-field';

const renderHobbies = ({ fields, meta: { error } }) => {
  return (
    <ul className="profile__hobbies-list">
      <li className="profile__hobbies-item">
        <button className="btn profile__hobbies-add" type="button" onClick={() => { return fields.push(); }}>
          Добавить хобби
        </button>
      </li>
      {fields.map((hobby, index) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <li className="profile__hobbies-item" key={index}>
            <Field
              name={hobby}
              type="text"
              component={renderField}
            />
            <button
              className="btn profile__hobbies-del"
              type="button"
              title="Удалить хобби"
              onClick={() => { return fields.remove(index); }}
            >
              X
            </button>
          </li>
        );
      })}
      {error && <li className="error">{error}</li>}
    </ul>
  );
};

export default renderHobbies;
