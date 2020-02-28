import React, { Component } from 'react'
import { connect } from 'react-redux'

import { removeFunctionFromCallstack } from './../../redux/callstack/callstack.actions'
import { pushToConsole } from './../../redux/Console/Console.actions'
import { addToWebApi } from './../../redux/WebApiRedux/wepApi.actions'

import { ConsoleBox, ConsoleTitle, List, ListItem } from '../../styles/callstack'
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

	checkForConsoleLogs = (currLine) => {
		/* 	if (this.consoleVariations.includes(currLine.name)) {
			this.props.consoleApi(currLine.message)
			//this.props.removeFunctionFromCallstack()
		}
		if (currLine.webApi) {
			this.props.addToWebApi(currLine)
			//this.props.removeFunctionFromCallstack()
		} */

		//this.props.removeFunctionFromCallstack()

		return currLine.name
	}

	renderCallstack = ({ callstack }) =>
		callstack.map((currLine, i) => (
			<ListItem key={`callstack_item_${i}`}>{this.checkForConsoleLogs(currLine)}</ListItem>
		))

	render() {
		return (
			<ConsoleBox>
				<Box display="flex" justifyContent="center" alignItems="center">
					<ConsoleTitle p="10px">Callstack</ConsoleTitle>
				</Box>

				<Box borderTop={1} borderStyle="solid" color="colorBlue" />

				<Box display="flex" justifyContent="center" m="20px 0">
					<List>{this.renderCallstack(this.props)}</List>
				</Box>
			</ConsoleBox>
		)
	}
}

const mapStateToProps = (state) => ({
	callstack: state.callstack.stack,
	isOccupied: state.callstack.isOccupied,
})

const mapDispatchToProps = (dispatch) => ({
	removeFunctionFromCallstack: () => dispatch(removeFunctionFromCallstack()),
	consoleApi: (message) => dispatch(pushToConsole(message)),
	addToWebApi: (funcData) => dispatch(addToWebApi(funcData)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Callstack)
