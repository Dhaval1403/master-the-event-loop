import styled from 'styled-components'
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
	${({ disabled }) => disabled ? `background-color:${variable.colorGrayDark}` : `background-color:${variable.colorBlue}`};
	transition: background-color ${variable.transition}, border ${variable.transition},
		color ${variable.transition};
	vertical-align: middle;
	white-space: nowrap;
	&:hover {
		background-color: ${({ hoverColor, disabled }) =>
		hoverColor ? variable[hoverColor] : !disabled ? variable.colorBeautifulGreen : variable.colorGrayDark};
		color: ${variable.colorWhite};
	}
`
