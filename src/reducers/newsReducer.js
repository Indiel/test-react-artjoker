const initialState = {
  isLoading: false,
  news: [],
  oneNews: false,
  isError: false,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_LOADING':
      if (action.payload) {
        return {
          ...state,
          oneNews: false,
          isLoading: action.payload,
          isError: false,
        };
      }
      return {
        ...state,
        isLoading: action.payload,
        isError: false,
      };

    case 'FETCH_NEWS_SUCCESS':
      if (action.payload.list) {
        return {
          ...state,
          news: action.payload.list,
          isError: false,
        };
      }
      return {
        ...state,
        oneNews: action.payload.news,
        isError: false,
      };

    case 'FETCH_NEWS_ERROR':
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};

export default newsReducer;
