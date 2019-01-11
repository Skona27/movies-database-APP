import React from "react";
import {Link} from "react-router-dom";

const Button = props => {
  const style=`btn btn-${props.style} custom-btn`;

  return (
    <Link to="/create" className={style}>{props.value}</Link>
  )
}

export default Button;