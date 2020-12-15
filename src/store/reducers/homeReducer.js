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
    case 'SELECTED_CATEGOR2':
      return {
        ...state,
        selectedCategory: action.payload.category,
      };
    case 'SELECTED_CATEGOR3':
      return {
        ...state,
        selectedCategory: action.payload.category,
      };
    case 'SELECTED_CATEGOR4':
      return {
        ...state,
        selectedCategory: action.payload.category,
      };
    case 'SELECTED_CATEGOR5':
      return {
        ...state,
        selectedCategory: action.payload.category,
      };
    default:
      return state;
  }
};
