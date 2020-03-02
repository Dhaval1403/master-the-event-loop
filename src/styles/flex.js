import styled from 'styled-components'
import { border, boxShadow, flexbox, layout, position, space, typography } from 'styled-system'

import { variable } from './variable'

export const Box = styled.div`
	${border};
	${boxShadow};
	${flexbox};
	${layout};
	${position};
	${space};
	${typography};
	background-color: ${({ backgroundColor }) =>
		backgroundColor ? variable[backgroundColor] : 'transparent'};
	${({ color }) => color && `color: ${variable[color]}`};
	transition: background-color ${variable.transition}, box-shadow ${variable.transition},
		width ${variable.transition};
`

export const Flex = styled.div`
	${border};
	${flexbox};
	${layout};
	${position};
	${space};
	${typography};
	background-color: ${({ backgroundColor }) =>
		backgroundColor ? variable[backgroundColor] : 'transparent'};
	${({ color }) => color && `color: ${variable[color]}`};
`
