import React from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../../actions/actions';
import './news-details.css';

import Preloader from '../preloader/preloader';
import Error from '../error/error';

class NewsDetails extends React.Component {
  componentDidMount() {
    const { itemId, getFetchNews } = this.props;
    getFetchNews(`http://testtask.sebbia.com/v1/news/details?id=${itemId}`);
  }

  render() {
    const { isLoading, isError, oneNews } = this.props;

    const error = isError ? <Error error={String(isError)} /> : undefined;
    const loading = isLoading && !isError ? <Preloader /> : undefined;

    const { title, date, shortDescription, fullDescription } = oneNews;

    const element = (
      <>
        {/* <img
          src={`./img/news-${id}.jpg`}
          alt="Img"
          className="news-details__img"
        /> */}
        <h2 className="news-details__title">{title}</h2>
        <time className="news-details__date">{date}</time>
        <p className="news-details__text">{shortDescription}</p>
        <p className="news-details__full" dangerouslySetInnerHTML={{ __html: fullDescription }} />
      </>
    );

    return (
      <div className="news-details">
        { element }
        { loading }
        { error }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.news.isLoading,
    isError: state.news.isError,
    oneNews: state.news.oneNews,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { getFetchNews: (url) => { dispatch(fetchNews(url)); } };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetails);
