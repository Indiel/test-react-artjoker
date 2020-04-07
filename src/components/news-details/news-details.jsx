import React from 'react';

import newsData from '../../json/news.json';
import './news-details.css';

// eslint-disable-next-line react/prop-types
const NewsDetails = ({ itemId }) => {
  const { id, title, date, text } = newsData.news.find((item) => {
    return item.id === Number(itemId);
  });

  return (
    <div className="news-details">
      <img
        src={`./img/news-${id}.jpg`}
        alt="Img"
        className="news-details__img"
      />
      <h2 className="news-details__title">{title}</h2>
      <time className="news-details__date">{date}</time>
      <p className="news-details__text">{text}</p>
    </div>
  );
};

export default NewsDetails;
