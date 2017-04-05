import React from 'react';

import { Navbar} from 'react-bootstrap';

// class NavBar extends Component {
//   render () {
//     return (
//     <Navbar >
//       <NavItem>supSeasonal</NavItem>
//     </Navbar>
//
//     )
//   }
// }

const Login = () => {
  return (
    <Navbar.Text pull-right>
      <a>LogIn</a>
    </Navbar.Text>
  )
}

export default Login;
