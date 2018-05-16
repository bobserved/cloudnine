import React from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

export const Filter = (props) => (
  <Dropdown
    options={props.options}
    onChange={props.onChange}
    value={props.value}
    placeholder={props.placeholder}
  />
)
