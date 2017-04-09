import initialState from './initialState';

const currentSelectedMonth = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_MONTH':
      return action.month;
    default:
      return state.currentSelectedMonth;
  }
}

export default currentSelectedMonth;
