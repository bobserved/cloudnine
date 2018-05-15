import React from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

export const Filter = (props) => {
  console.log(props)
  return (
    <Dropdown
      options={props.options}
      onChange={props.onChange}
      value={props.defaultOption}
      placeholder={props.placeholder}
    />
  )
};
