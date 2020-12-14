const {ActionSheetIOS} = require('react-native');

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
    case 'SELECTED_CATEGORY':
      return {
        ...state,
        selectedCategory: action.payload.category,
      };
    case 'SELECTED_TYPE':
      return {
        ...state,
        type: action.payload.type,
      };
    default:
      return state;
  }
};
