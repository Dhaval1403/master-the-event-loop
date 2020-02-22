import React, { Component } from 'react'

import { connect } from 'react-redux'
import { pushToConsole } from '../../redux/Console/Console.actions'

import { Button } from '../Button/Button'
import { ConsoleBox, ConsoleTitle } from '../../styles/console'
import { Box } from '../../styles/flex'
import { P } from '../../styles/text'

class Console extends Component {
	render() {
		return (
			<ConsoleBox>
				<Box display="flex" justifyContent="center" alignItems="center">
					<ConsoleTitle p="10px">Console</ConsoleTitle>
				</Box>

				<Box borderTop={1} borderStyle="solid" color="colorBlue" />

				<Box height="350px" mt="20px" textAlign="center">
					{this.props.messages.map((message) => (
						<P key={this.props.messages.indexOf(message)}>{message}</P>
					))}

					{/* temporary button for functionality depiction, will be removed */}
					<Button onClick={() => this.props.pushToConsole('hello')}>Click Me</Button>
				</Box>
			</ConsoleBox>
		)
	}
}

const mapStateToProps = (state) => ({
	messages: state.consoleReducer.messages,
})

//temporary dispatch for functionality depiction
const mapDispatchToProps = (dispatch) => ({
	pushToConsole: (message) => dispatch(pushToConsole(message)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Console)
