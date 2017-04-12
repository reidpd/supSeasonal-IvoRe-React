
//creating my reducer.
// const userRegister = (state = {registered: false}, action) => {
//   switch(action.type) {
//     case 'REG_PENDING':
//       return 'Connecting to server, please wait';
//     case 'REG_FULFILLED':
//       return action.payload;
//     case 'REG_REJECTED':
//       return 'Please try again';
//     default:
//       return state
//   }
// }
//
// export default userRegister;

const userRegistration = (state = {signedUp: false} , action) => {
  switch(action.type) {
    case 'SIGNUP_PENDING':
    console.log('peending');
      return state;
    case 'SIGNUP_FULFILLED':
    console.log('fulfilled');
    console.log(action, state);
      return action.payload;
    case 'SIGNUP_REJECTED':
      console.log('rejected');
      return action.payload;
    default:
      return state;
  }
}
export default userRegistration;
