import styled, { css } from 'styled-components'
import { borderRadius, layout, space, typography } from 'styled-system'

import { variable } from '../../styles/variable'

export const ButtonStyled = styled.button`
	${borderRadius};
	${layout};
	${space};
	${typography};
	background-color: ${variable.colorBlue};
	${({ borderRadius }) => borderRadius === undefined && `border-radius: ${variable.borderRadius}`};
	color: ${variable.colorWhite};
	cursor: pointer;
	${({ fontWeight }) => fontWeight === undefined && 'font-weight: 700'};
	${({ textAlign }) => textAlign === undefined && 'text-align: center'};
	${({ textDecoration }) => textDecoration && `text-decoration: ${textDecoration}`};
	transition: background-color ${variable.transition}, border ${variable.transition},
		color ${variable.transition};
	vertical-align: middle;
	white-space: nowrap;
	&:hover {
		background-color: ${({ hoverColor }) =>
			hoverColor ? variable[hoverColor] : variable.colorBlueDark};
		color: ${variable.colorWhite};
	}
`
