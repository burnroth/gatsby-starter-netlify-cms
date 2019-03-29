import React from 'react'

const Button = ({
		buttonText,
		buttonColor = "btn-turq"
	}) =>
	(
		<button className = {`btn ${buttonColor}`}>{buttonText}</button>
	)

export default Button