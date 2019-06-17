import React from "react";
import {Link} from 'gatsby'

const Button = ({
  buttonText,
  buttonColor = "btn-turq",
  buttonClass = "",
  onClick = null,
  id = "",
  href = ""
}) =>
  href ? (
    <Link to={href} className={`btn ${buttonClass} ${buttonColor}`} >
      {buttonText}
    </Link>
  ) : (
    <button
      id={id}
      onClick={onClick}
      className={`btn ${buttonClass} ${buttonColor}`}
    >
      {buttonText}
    </button>
  );

export default Button;