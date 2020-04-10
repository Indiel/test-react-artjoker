import React from 'react';
import './error.css';

const Error = ({ error }) => {
  return (
    <div className="error__wrapper">
      <div className="error">
        <div className="error__message">{error}</div>
        <div className="error__border" />
      </div>
    </div>
  );
};

export default Error;
