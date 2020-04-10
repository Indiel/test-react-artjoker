import React from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../../actions/actions';
import './news-list.css';

import NewsListItem from '../news-list-item/news-list-item';
import Preloader from '../preloader/preloader';
import Error from '../error/error';

class NewsList extends React.Component {
  componentDidMount() {
    const { getFetchNews } = this.props;
    getFetchNews('http://testtask.sebbia.com/v1/news/categories/0/news');
  }

  render() {
    const { isLoading, news, isError } = this.props;

    const loading = isLoading && !isError ? <Preloader /> : undefined;
    const error = isError ? <Error error={String(isError)} /> : undefined;

    const elements = news.length > 0
      ? (news.map((item) => {
        const { id, title, date, shortDescription } = item;

        return (
          <NewsListItem
            key={id}
            id={id}
            title={title}
            date={(new Date(date)).toLocaleString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })}
            text={shortDescription}
          />
        );
      }))
      : undefined;

    return (
      <ul className="news__list">
        { elements }
        { loading }
        { error }
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.news.isLoading,
    isError: state.news.isError,
    news: state.news.news,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { getFetchNews: (url) => { dispatch(fetchNews(url)); } };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
