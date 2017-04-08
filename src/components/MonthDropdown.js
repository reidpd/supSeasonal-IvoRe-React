import React, {Component} from 'react';
import {NavDropdown, MenuItem, Nav} from 'react-bootstrap';

const Months = () => {

  return (
  <div>
    <Nav>
      <NavDropdown eventKey={3} title="Months" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}> January</MenuItem>
        <MenuItem eventKey={3.1}> February</MenuItem>
        <MenuItem eventKey={3.1}> March</MenuItem>
        <MenuItem eventKey={3.1}> April</MenuItem>
        <MenuItem eventKey={3.1}> May</MenuItem>
        <MenuItem eventKey={3.1}> June</MenuItem>
        <MenuItem eventKey={3.1}> July</MenuItem>
        <MenuItem eventKey={3.1}> August</MenuItem>
        <MenuItem eventKey={3.1}> September</MenuItem>
        <MenuItem eventKey={3.1}> October</MenuItem>
        <MenuItem eventKey={3.1}> November</MenuItem>
        <MenuItem eventKey={3.1}> December</MenuItem>
      </NavDropdown>
    </Nav>
  </div>
  );
};

export default Months;
