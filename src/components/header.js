import React from 'react';
import { Link } from 'react-router-dom';

export const Header = (props) => {
  return (
    <header className={props.absolute ? "header header--absolute" : "header"}>
      <Link to="/">
        {props.leftIcon && props.leftIcon}
      </Link>
      <h3 className="header__title">{props.title && props.title}</h3>
      {props.rightIcon && props.rightIcon}
    </header>
  );
};