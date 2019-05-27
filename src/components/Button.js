import React from 'react'

const Button = ({
		buttonText,
		buttonColor = "btn-turq",
		buttonClass = "",
		onClick = null,
		id = ""
	}) =>
	(
		<button id={id} onClick={onClick} className ={`btn ${buttonClass} ${buttonColor}`}>{buttonText}</button>
	)

export default Button