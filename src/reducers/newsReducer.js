const initialState = {
  isNewsLoading: false,
  isOneNewsLoading: false,
  news: [],
  oneNews: false,
  isError: false,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_NEWS_LOADING':
      if (action.payload) {
        return {
          ...state,
          isNewsLoading: action.payload,
          isError: false,
        };
      }
      return {
        ...state,
        isNewsLoading: action.payload,
        isError: false,
      };

    case 'IS_ONE_NEWS_LOADING':
      if (action.payload) {
        return {
          ...state,
          oneNews: false,
          isOneNewsLoading: action.payload,
          isError: false,
        };
      }
      return {
        ...state,
        isOneNewsLoading: action.payload,
        isError: false,
      };

    case 'FETCH_NEWS_SUCCESS':
      return {
        ...state,
        news: action.payload,
        isError: false,
      };

    case 'FETCH_ONE_NEWS_SUCCESS':
      return {
        ...state,
        oneNews: action.payload,
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
