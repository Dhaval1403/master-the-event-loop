import React, { Component } from 'react'
import { connect } from 'react-redux'

import { removeFunctionFromCallstack } from './../../redux/callstack/callstack.actions'
import { pushToConsole } from './../../redux/Console/Console.actions'

import { ConsoleBox, ConsoleTitle } from '../../styles/console'
import { List, ListItem } from '../../styles/callstack'
import { Box } from '../../styles/flex'

class Callstack extends Component {
	consoleVariations = [
		'console',
		'console.log',
		'console.trace',
		'console.time',
		'console.info',
		'console.error',
		'console.warn',
	]

	mountCallStack = () => {
		console.log(this.props.callstack)
	}

	checkForConsoleLogs = (currLine) => {
		if (this.consoleVariations.includes(currLine.name)) {
			this.props.consoleApi(currLine.message)
		}

		return currLine.name
	}

	renderCallstack = ({ callstack }) =>
		callstack.map((currLine) => <ListItem>{this.checkForConsoleLogs(currLine)}</ListItem>)

	render() {
		return (
			<ConsoleBox>
				<Box display="flex" justifyContent="center" alignItems="center">
					<ConsoleTitle p="10px">Callstack</ConsoleTitle>
				</Box>

				<Box borderTop={1} borderStyle="solid" color="colorBlue" />

				<Box display="flex" height="350px" justifyContent="center" mt="20px">
					<List>{this.renderCallstack(this.props)}</List>
				</Box>
			</ConsoleBox>
		)
	}
}

const mapStateToProps = (state) => ({
	callstack: state.callstack.stack,
})

const mapDispatchToProps = (dispatch) => ({
	removeFunctionFromCallstack: () => dispatch(removeFunctionFromCallstack()),
	consoleApi: (message) => dispatch(pushToConsole(message)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Callstack)
