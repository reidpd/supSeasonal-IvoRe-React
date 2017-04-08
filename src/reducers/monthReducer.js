import initialState from './initialState';

const monthReducer = (state = initialState.currentSelectedMonth, action) => {
  switch(action.type) {
    case 'SET_MONTH':
      return /*Important piece of state, translated via action  (eg action.text)*/;
    default:
      return state;
  }
}

export default monthReducer;
