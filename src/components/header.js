import React from 'react';
import { Link } from 'react-router-dom';

export const Header = (props) => {
  return (
    <header className={props.absolute ? "header header--absolute" : "header"}>
      <Link to="/">
        {props.leftIcon}
      </Link>
      {props.rightIcon}
    </header>
  );
};