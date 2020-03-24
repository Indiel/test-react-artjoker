import React from 'react';
import { Link } from 'react-router-dom';
import './news-list-item.css';

const NewsListItem = ({ id, title, date, text }) => {
  return (
    <li className="news__list-item">
      <img
        src={`../../img/news-${id}.jpg`}
        alt="Img"
        className="news__img"
      />
      <div className="news__info">
        <h2 className="news__title"><Link to={`/news/${id}`} className="news__link">{title}</Link></h2>
        <time className="news__date">{date}</time>
        <p className="news__text">{text}</p>
      </div>
    </li>
  );
};

export default NewsListItem;
