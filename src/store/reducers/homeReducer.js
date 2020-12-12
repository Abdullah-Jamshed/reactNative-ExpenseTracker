const {ActionSheetIOS} = require('react-native');

const INITIAL_STATE = {
  viewMode: 'chart',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CATEGORY_VIEW':
      return {
        ...state,
        viewMode: action.payload.mode,
      };
    default:
      return state;
  }
};
