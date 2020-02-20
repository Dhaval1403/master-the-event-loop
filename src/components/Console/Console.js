import React, { Component } from 'react'
// import './Console.styles.css';

import { ListBox, ListTitle } from '../../styles/box'
import { Box } from '../../styles/flex'
import { P } from '../../styles/text'

//storing message in the state for now
class Console extends Component {
	constructor(props) {
		super(props)
		this.state = {
			message: ['hello'],
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
			<ListBox>
				<Box borderBottom="1px solid rgba(201, 201, 201, 0.685)" textAlign="center">
					<ListTitle>Console</ListTitle>
				</Box>

				<Box height="200px" mt="20px" textAlign="center">
					{this.state.message.map((message) => (
						<P>{message}</P>
					))}
					{/*temporary functionality for depiction*/}
					<button onClick={() => this.addToConsole('Hello')}>Click me</button>
				</Box>
			</ListBox>
		)
	}
}

export default Console
