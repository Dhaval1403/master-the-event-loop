import React from 'react'
import { Box } from './../../styles/flex'
import { ButtonStyled } from './../Button/ButtonStyled'

class Controls extends React.Component {
	render() {
		return (
			<Box display="flex" justify-content="space-between">
				<ButtonStyled padding="8px 8px" margin="2px">
					Play
				</ButtonStyled>
				<ButtonStyled padding="8px 8px" margin="2px">
					Pause
				</ButtonStyled>
				<ButtonStyled padding="8px 8px" margin="2px">
					Stop
				</ButtonStyled>
			</Box>
		)
	}
}

export default Controls
