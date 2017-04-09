import React from 'react';

import { setMonth } from '../actions';

// import { DropdownButton } from 'react-bootstrap';
// import {NavDropdown, MenuItem, Nav} from 'react-bootstrap';
// import { MenuItem } from 'react-bootstrap';
// import { Nav } from 'react-bootstrap';
// import { NavDropdown } from 'react-bootstrap';

const Months = () => {
  console.log('there');
  return (
    <select>
        <option onChange={(event) => {
          setMonth(event.target.value);
        }}>jan</option>
        <option onChange={(event) => {
          setMonth(event.target.value);
        }}>feb</option>
        <option onChange={(event) => {
          setMonth(event.target.value);
        }}>mar</option>
        <option onChange={(event) => {
          setMonth(event.target.value);
        }}>apr</option>
        <option onChange={(event) => {
          setMonth(event.target.value);
        }}>may</option>
        <option onChange={(event) => {
          setMonth(event.target.value);
        }}>jun</option>
        <option onChange={(event) => {
          setMonth(event.target.value);
        }}>jul</option>
        <option onChange={(event) => {
          setMonth(event.target.value);
        }}>aug</option>
        <option onChange={(event) => {
          setMonth(event.target.value);
        }}>sep</option>
        <option onChange={(event) => {
          setMonth(event.target.value);
        }}>oct</option>
        <option onChange={(event) => {
          setMonth(event.target.value);
        }}>nov</option>
        <option onChange={(event) => {
          setMonth(event.target.value);
        }}>dec</option>
    </select>
  );
};

export default Months;
