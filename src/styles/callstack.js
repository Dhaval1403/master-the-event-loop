import styled from 'styled-components'
import { space, typography } from 'styled-system'

import { variable } from './variable'

export const List = styled.ul`
	display: flex;
	flex-direction: column-reverse;
	flex-wrap: wrap;
`

export const ListItem = styled.li`
	margin-bottom: 10px;
	border: 1px solid rgb(207, 206, 206);
`
