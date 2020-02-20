import React, { Component } from 'react'

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
				<Box textAlign="center">
					<ConsoleTitle>Console</ConsoleTitle>
				</Box>

				<Box borderTop={3} borderStyle="solid" color="colorBlue" justifySelf="center" mt={2} />

				<Box height="200px" mt="20px" textAlign="center">
					{this.state.message.map((message) => (
						<P>{message}</P>
					))}

					{/*temporary functionality for depiction*/}
					<button onClick={() => this.addToConsole('Hello')}>Click me</button>
				</Box>
			</ConsoleBox>
		)
	}
}

export default Console
