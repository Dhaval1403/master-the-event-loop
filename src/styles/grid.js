import styled from 'styled-components'
import { border, flexbox, grid, layout, space, typography } from 'styled-system'

import { variable } from './variable'

export const Cell = styled.div`
	${border};
	${flexbox};
	${grid};
	${layout};
	${space};
	${typography};
	transition: background-color ${variable.transition}, box-shadow ${variable.transition};
`

export const Grid = styled.div`
	${border};
	${flexbox};
	${grid};
	${layout};
	${space};
`
