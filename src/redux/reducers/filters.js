const initialState = {
  sortBy: 'popular',
  category: 0,
};

const filtersReducer = (state = initialState, action) => {
  if (action.type === 'SET__SORT_BY') {
    return {
      ...state,
      sortBy: action.payload,
    };
  }
  if (action.type === 'SET__CATEGORY') {
    return {
      ...state,
      category: action.payload,
    };
  }
  return state;
};
export default filtersReducer;
