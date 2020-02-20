import React, { Component } from 'react'

import { Button } from '../Button/Button'

import { ConsoleBox, ConsoleTitle } from '../../styles/console'
import { Box } from '../../styles/flex'
import { P } from '../../styles/text'

//storing message in the state for now
class Console extends Component {
	constructor(props) {
		super(props)
		this.state = {
			message: ['Hello'],
		}
	}

	//pushes data to the message array
	addToConsole = (data) => {
		this.setState((prevState) => ({
			message: [...prevState.message, data],
		}))
	}

	render() {
		return (
			<ConsoleBox>
				<Box display="flex" justifyContent="center" alignItems="center">
					<ConsoleTitle p="10px">Console</ConsoleTitle>
				</Box>

				<Box borderTop={1} borderStyle="solid" color="colorBlue" />

				<Box height="350px" mt="20px" textAlign="center">
					{this.state.message.map((message) => (
						<P>{message}</P>
					))}

					{/*temporary functionality for depiction*/}
					<Button onClick={() => this.addToConsole('Hello')}>Click me</Button>
				</Box>
			</ConsoleBox>
		)
	}
}

export default Console
