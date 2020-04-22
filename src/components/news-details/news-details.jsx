import React from 'react';
import { connect } from 'react-redux';
import { searchOneNews } from '../../actions/actions';
import './news-details.css';

import Preloader from '../preloader/preloader';
import Error from '../error/error';

class NewsDetails extends React.Component {
  componentDidMount() {
    const { itemId, getOneNews } = this.props;
    getOneNews(itemId);
  }

  render() {
    const { isOneNewsLoading, isError, oneNews } = this.props;

    const error = isError ? <Error error={String(isError)} /> : undefined;
    const loading = isOneNewsLoading && !isError ? <Preloader /> : undefined;

    const { title, publishedAt, content } = oneNews;

    const element = (
      <>
        {/* <img
          src={`./img/news-${id}.jpg`}
          alt="Img"
          className="news-details__img"
        /> */}
        <h2 className="news-details__title">{title}</h2>
        <time className="news-details__date">{(new Date(publishedAt)).toLocaleString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
        <p className="news-details__text">{content}</p>
      </>
    );

    return (
      <div className="news-details">
        { loading || error || element }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isOneNewsLoading: state.news.isOneNewsLoading,
    isError: state.news.isError,
    oneNews: state.news.oneNews,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { getOneNews: (date) => { dispatch(searchOneNews(date)); } };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetails);
