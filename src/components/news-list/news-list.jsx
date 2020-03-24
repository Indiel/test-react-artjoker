import React from 'react';
import './news-list.css';

import NewsListItem from '../news-list-item/news-list-item';
import newsData from '../../json/news.json';

const NewsList = () => {
  const elements = newsData.news.map((item) => {
    const { id, title, date, text } = item;

    return (
      <NewsListItem
        key={id}
        id={id}
        title={title}
        date={date}
        text={text}
      />
    );
  });

  return (
    <ul className="news__list">
      { elements }
    </ul>
  );
};

export default NewsList;
