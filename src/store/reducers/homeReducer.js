const {ActionSheetIOS} = require('react-native');

const INITIAL_STATE = {
  viewMode: 'chart',
  selectedCategory: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SELECTED_CATEGORY':
      return {
        ...state,
        selectedCategory: action.payload.category,
      };
    case 'CATEGORY_VIEW':
      return {
        ...state,
        viewMode: action.payload.mode,
      };
    default:
      return state;
  }
};
