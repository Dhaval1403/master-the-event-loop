import styled, { css } from 'styled-components'
import { border, boxShadow, flexbox, layout, space, typography } from 'styled-system'

import { variable } from './variable'

export const Box = styled.div`
	${border};
	${boxShadow};
	${flexbox};
	${layout};
	${space};
	${typography};
	background-color: ${({ backgroundColor }) =>
		backgroundColor ? variable[backgroundColor] : 'transparent'};
	${({ color }) => color && `color: ${variable[color]}`};
	transition: background-color ${variable.transition}, box-shadow ${variable.transition},
		width ${variable.transition};
	${({ focus }) =>
		focus &&
		css`
			:focus-within {
				color: ${variable.colorGreen};
			}
		`};
	${({ hover }) =>
		hover &&
		css`
			&:hover {
				background-color: ${variable.colorGrayTransparent5};
				box-shadow: 0 1px 10px 1px ${variable.colorGrayLight4};
			}
		`};
`

export const Flex = styled.div`
	${border};
	${flexbox};
	${layout};
	${space};
	${typography};
`
