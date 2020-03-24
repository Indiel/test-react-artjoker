/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import './render-field.css';

// eslint-disable-next-line react/prop-types
const renderField = ({ input, label, id, type, placeholder, meta, errorMassage }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div className="input__wrapper">
        <input id={id} {...input} placeholder={placeholder} type={type} className="input" />
        <div className="input__border" />
        {meta.touched
          && ((meta.error && <span className="input__error">{meta.error}</span>)
          || ((meta.warning && <span className="input__error">{meta.warning}</span>))
          || (errorMassage ? <span className="input__error">{errorMassage}</span> : null))}
        {/* {errorMassage ? <span className="input__error">{errorMassage}</span> : null} */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { errorMassage: state.login.errorMassage };
};

export default connect(mapStateToProps)(renderField);
