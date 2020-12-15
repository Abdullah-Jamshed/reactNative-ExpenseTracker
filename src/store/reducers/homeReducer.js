const INITIAL_STATE = {
  viewMode: 'chart',
  selectedCategory: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CATEGORY_VIEW':
      return {
        ...state,
        viewMode: action.payload.mode,
      };
    case 'CATEGORY_VIEW1':
      return {
        ...state,
        viewMode: action.payload.mode,
      };
    case 'SELECTED_CATEGORY':
      return {
        ...state,
        selectedCategory: action.payload.category,
      };
    default:
      return state;
  }
};
