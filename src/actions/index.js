import React, { Component } from 'react';

export const action1 = (props) => {
  return {
    type: 'ACTION_1',
    props
  }
}

export const action2 = (props) => {
  const data = /* API Fetch */;
  return {
    type: 'ACTION_2',
    payload: data
  }
}
