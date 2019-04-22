import React from 'react';
import { Link } from "gatsby"

const Button = props => {
  return (
    <Link className={`${props.type}-button btn`} to={props.link}>Click me</Link>
  );
};

export default Button;