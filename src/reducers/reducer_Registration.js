
//creating my reducer.
const userRegister = (state = intitalState.registered, action) => {
  switch(action.type) {
    case 'REG_PENDING':
      return 'Connecting to server, please wait';
    case 'REG_FULFILLED':
      return action.payload;
    case 'REG_REJECTED':
      return 'Please try again';
    default:
      return state
  }
}

export default userRegister;
