import React from 'react';
import { useHistory } from 'react-router-dom';
import './modal.css';

import NewsDetails from '../news-details/news-details';

const Modal = ({ itemId }) => {
  const history = useHistory();

  const back = (e) => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <div className="modal-wrapper">
      <div className="modal">
        <NewsDetails itemId={itemId} />
        <button className="modal__close-btn" type="button" onClick={back}>
          &#10008;
        </button>
      </div>
    </div>
  );
};

export default Modal;
