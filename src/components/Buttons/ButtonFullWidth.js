import React from 'react'

const ButtonFullWidth = ({
  buttonText,
  buttonColor = 'btn-turq',
  buttonClass = '',
  onClick = null,
  id = '',
}) => (
  <button
    style={{
      width: '100%',
    }}
    id={id}
    onClick={onClick}
    className={`btn ${buttonClass} ${buttonColor}`}
  >
    {buttonText}
  </button>
)

export default ButtonFullWidth
