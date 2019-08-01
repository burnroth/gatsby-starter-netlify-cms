import React from 'react'
import { Link } from 'gatsby'

const Button = ({
  buttonText,
  buttonColor = 'btn-turq',
  buttonClass = '',
  onClick = null,
  id = '',
  href = '',
  disabled = false
}) =>
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

export default Button
