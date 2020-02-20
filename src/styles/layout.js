import styled from 'styled-components'
import { layout, space } from 'styled-system'

import { variable } from './variable'

export const Container = styled.section`
	${layout};
	${space};
	@media (min-width: ${variable.lg}) {
		max-width: 1280px;
	}
`

export const Main = styled.main`
	background-color: ${({ backgroundColor }) =>
		backgroundColor ? variable[backgroundColor] : variable.colorWhite};
	height: auto;
	margin-top: ${variable.spacingXL};
	width: 100%;
	z-index: 0;
`

export const Wrap = styled.div`
	background-color: ${({ backgroundColor }) =>
		backgroundColor ? variable[backgroundColor] : variable.colorGrayLight5};
`
