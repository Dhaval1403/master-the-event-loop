import React from 'react'

import { ButtonStyled } from './ButtonStyled'

export const Button = ({
	ariaLabel = '',
	children,
	text = '',
	typeButton = 'button',
	...otherProps
}) => {
	const acessibility = ariaLabel || text
	const content = children || text

	return (
		<ButtonStyled
			aria-label={acessibility}
			type={typeButton}
			{...otherProps}
			padding="8px 25px"
			borderRadius="4px"
			color="white"
		>
			{content}
		</ButtonStyled>
	)
}
