// import React from 'react';
// import {FieldGroup} from 'react-bootstrap';
// import ReactDOM from 'react-dom';

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {bindActionCreators} from 'redux';
import {findUser} from '../actions/index';
import {connect} from 'react-redux';

// class RegistrationPage extends Component {
//   render() {
//
//     const { handleSubmit } = this.props;
//     return (
//       <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Email</label>
//           <Field name="email" component="input" type="text"/>
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <Field name="password" component="input" type="text"/>
//         </div>
//         <div>
//           <label htmlFor="username">Username</label>
//           <Field name="username" component="input" type="email"/>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//       </div>
//     );
//   }
// }

///THOMas
// const mapDispatchToProps = dispatch => {
//   console.log("this is dispatch", dispatch);
//   return bindActionCreators({ login }, dispatch);
// }

// class LoginForm extends Component {
//   submit = (values) => {
//     console.log('values', values);
//     this.props.login(values);
//   }
//
//   render() {
//     const {handleSubmit} = this.props;
//     return (
//       <form onSubmit={handleSubmit(this.submit)}>
//         <Field name="email" type="email" component="input" label="Email" />
//         <Field name="password" type="text" component="input" label="Password" />
//         <div>
//           <button type="submit" >Submit</button>
//           <button type="button">Clear Values</button>
//         </div>
//       </form>
//     )
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
//   form: 'LoginForm'})(LoginForm));

// mapStateToProps =(state) => {
//   return {
//       logedIn:
//   }
// }

// const mapDispatchToProps = dispatch => {
//   console.log("this is dispatch", dispatch);
//   return bindActionCreators({ findUser}, dispatch);
// }

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({findUser}, dispatch);
}

class UserLogIn extends Component {
  render() {
    const { handleSubmit } = this.props.findUser;
    return (
      <div className="loginForm">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" label="input"/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" label="input"/>
        </div>
        {/* <div>
          <label htmlFor="username">Username</label>
          <Field name="username" component="input" type="email"/>
        </div> */}
        <button type="submit">Submit</button>
      </form>
      </div>
    );
  }
}

// Decorate the form component
// Thomas.
// UserLogIn = reduxForm({
//   form: 'contact' // a unique name for this form
// })(UserLogIn);

export default connect(null, mapDispatchToProps)(reduxForm({ form:'LoginForm'})(UserLogIn));
// export default UserLogIn;
// unsubmit habdler function would take















//  function FieldGroup({ id, label, help, ...props }) {
//   return (
//     <FormGroup controlId={id}>
//       <ControlLabel>{label}</ControlLabel>
//       <FormControl {...props} />
//       {help && <HelpBlock>{help}</HelpBlock>}
//     </FormGroup>
//   );
// }
//
//
//  export const formInstance = (
//   <Form horizontal>
//     <FormGroup controlId="formHorizontalEmail">
//       <Col componentClass={ControlLabel} sm={2}>
//         Email
//       </Col>
//       <Col sm={10}>
//         <FormControl type="email" placeholder="Email" />
//       </Col>
//     </FormGroup>
//
//     <FormGroup controlId="formHorizontalPassword">
//       <Col componentClass={ControlLabel} sm={2}>
//         Password
//       </Col>
//       <Col sm={10}>
//         <FormControl type="password" placeholder="Password" />
//       </Col>
//     </FormGroup>
//
//     <FormGroup>
//       <Col smOffset={2} sm={10}>
//         <Checkbox>Remember me</Checkbox>
//       </Col>
//     </FormGroup>
//
//     <FormGroup>
//       <Col smOffset={2} sm={10}>
//         <Button type="submit">
//           Sign in
//         </Button>
//       </Col>
//     </FormGroup>
//   </Form>
// );
//
// ReactDOM.render(formInstance, mountNode);
//
// //  const logInPage = (
// //    <form>
// //     <FieldGroup
// //       id="formControlsEmail"
// //       type="email"
// //       label="Email address"
// //       placeholder="Enter email"
// //      />
// //     <FieldGroup
// //       id="formControlsPassword"
// //       label="Password"
// //       type="password"
// //     />
// //    </form>
// //  );
// //
// //
//  ReactDOM.render(logInPage, document.getElementById('root'));
