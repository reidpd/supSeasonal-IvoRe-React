import React, {Component} from 'react';

import {Navbar} from 'react-bootstrap';

class NavBar extends Component {
  constructor(props){
    super(props);
    this.state ={
      month: ''
    }
  }
// formatDate(date) {
//   return date.toLocaleDateString();
// }
//   const newDate = {date: new Date()}


  render(){
    return (
      // <div>
      //   would like to render an image associated with the time of the month.
      //   might need to be a separate component.
      // </div>

      <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
              <div>
              <a href="#">supSeasonal</a>
              {/* <div clasName={props.newDate}</div> */}
              </div>
            </Navbar.Brand>
          </Navbar.Header>
          <div>
              <input type='text'/>
           </div>
      </Navbar>


    )
  }
}

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
//
// const navbarInstance = (
//   <Navbar>
//     <Navbar.Header>
//       <Navbar.Brand>
//         <a href="#">React-Bootstrap</a>
//       </Navbar.Brand>
//     </Navbar.Header>
//     <Nav>
//       <NavItem eventKey={1} href="#">Link</NavItem>
//       <NavItem eventKey={2} href="#">Link</NavItem>
//       <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
//         <MenuItem eventKey={3.1}>Action</MenuItem>
//         <MenuItem eventKey={3.2}>Another action</MenuItem>
//         <MenuItem eventKey={3.3}>Something else here</MenuItem>
//         <MenuItem divider />
//         <MenuItem eventKey={3.4}>Separated link</MenuItem>
//       </NavDropdown>
//     </Nav>
//   </Navbar>
// )


export default NavBar;
