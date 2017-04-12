import intialState from './initialState';


//creating my reducer.
const logIn = (state = intitalState.loggedIn, action) => {
  console.log('userlogIn in logIn reducer');
  switch(action.type) {
    case 'LOGIN_PENDING':
      return state;
    case 'LOGIN_FULFILLED':
      return action.payload.data;
    case 'LOGIN_REJECTED':
      return action.payload;
    default:
      return state;
  }
}

export default logIn;
