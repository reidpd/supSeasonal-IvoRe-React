import initialState from './initialState';

const currentSelectedMonth = (state ='', action) => {
  // console.log('src/reducers/monthReducer/const_currentSelectedMonth()');
  switch(action.type) {
    case 'SET_MONTH':
      // console.log('src/reducers/monthReducer/const_currentSelectedMonth()/SET_MONTH');
      return action.month;
    default:
      // console.log('src/reducers/monthReducer/const_currentSelectedMonth()/default');
      return state
  }
}

export default currentSelectedMonth;
