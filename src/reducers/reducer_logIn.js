import intialState from './initialState';


//creating my reducer.
const logIn = (state = intitalState.loggedIn, action) => {
  console.log('userlogIn in logIn reducer');
  switch(action.type) {
    case 'LOGIN_PENDING':
      return 'Connecting to server, please wait';
    case 'LOGIN_FULFILLED':
      return action.payload;
    case 'LOGIN_REJECTED':
      return 'Please try again';
    default:
      return state
  }
}

export default logIn;
