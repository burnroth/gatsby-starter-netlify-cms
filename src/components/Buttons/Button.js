import React from "react";
import { Link } from "gatsby";
import lang from "../../../assets/translations/lang.json";

const Button = ({
  buttonText,
  contactUs = lang.buttons.contactUs,
  contactURL = lang.navbar.contactURL,
  buttonColor = "btn-turq",
  buttonClass = "",
  onClick = null,
  id = "",
  href = "",
  disabled = false,
  contactButton = false
}) =>
contactButton ? (
  <Link to={contactURL} className={`btn ${buttonClass} ${buttonColor}`} >
    {buttonText || contactUs}
  </Link>
) : 
  href ? (
    <Link to={href} className={`btn ${buttonClass} ${buttonColor}`}>
      {buttonText}
    </Link>
  ) : (
    <button
      id={id}
      onClick={onClick}
      className={`btn ${buttonClass} ${buttonColor}`}
      disabled={disabled}
    >
      {buttonText}
    </button>
  ) 
export default Button;
