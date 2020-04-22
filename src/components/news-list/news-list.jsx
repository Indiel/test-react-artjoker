import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchNews } from '../../actions/actions';
import './news-list.css';

import NewsListItem from '../news-list-item/news-list-item';
import Preloader from '../preloader/preloader';
import Error from '../error/error';

class NewsList extends React.Component {
  componentDidMount() {
    const { getFetchNews } = this.props;
    getFetchNews();
  }

  render() {
    const { isNewsLoading, news, isError } = this.props;

    const loading = isNewsLoading && !isError ? <Preloader /> : undefined;
    const error = isError ? <Error error={String(isError)} /> : undefined;

    const elements = news.length > 0
      ? (news.map((item) => {
        const { url, title, publishedAt, description } = item;
        return (
          <NewsListItem
            key={url}
            id={publishedAt}
            title={title}
            date={(new Date(publishedAt)).toLocaleString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })}
            text={description}
          />
        );
      }))
      : undefined;

    return (
      <ul className="news__list">
        { loading || error || elements }
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isNewsLoading: state.news.isNewsLoading,
    isError: state.news.isError,
    news: state.news.news,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { getFetchNews: (url) => { dispatch(fetchNews(url)); } };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewsList));
