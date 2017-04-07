export React from 'react';
export {FieldGroup} from 'react-bootstrap';
export ReactDOM from 'react-dom';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

const formInstance = (
  <Form horizontal>
    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
        Email
      </Col>
      <Col sm={10}>
        <FormControl type="email" placeholder="Email" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Password
      </Col>
      <Col sm={10}>
        <FormControl type="password" placeholder="Password" />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Checkbox>Remember me</Checkbox>
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button type="submit">
          Sign in
        </Button>
      </Col>
    </FormGroup>
  </Form>
);

ReactDOM.render(formInstance, mountNode);

//  const logInPage = (
//    <form>
//     <FieldGroup
//       id="formControlsEmail"
//       type="email"
//       label="Email address"
//       placeholder="Enter email"
//      />
//     <FieldGroup
//       id="formControlsPassword"
//       label="Password"
//       type="password"
//     />
//    </form>
//  );
//
//
// ReactDOM.render(logInPage, document.getElementById('root'));
