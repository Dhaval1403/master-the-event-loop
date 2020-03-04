import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
	ConsoleContainer,
	ConsoleData,
	ConsoleHeader,
	ConsoleTitle,
	List,
	ListItem,
} from '../../styles/console'

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

	renderCallstack = ({ callstack }) =>
		callstack.map((currLine, i) => <ListItem key={`callstack_item_${i}`}>{currLine.name}</ListItem>)

	render() {
		return (
			<>
				<ConsoleContainer>
					<ConsoleHeader>
						<Box display="flex" justifyContent="center" alignItems="center">
							<ConsoleTitle p="10px">Callstack</ConsoleTitle>
						</Box>
					</ConsoleHeader>

					<ConsoleData>
						<Box display="flex" justifyContent="center" m="20px 0">
							<List>{this.renderCallstack(this.props)}</List>
						</Box>
					</ConsoleData>
				</ConsoleContainer>
			</>
		)
	}
}

const mapStateToProps = (state) => ({
	callstack: state.callstack.stack,
})

export default connect(mapStateToProps, null)(Callstack)
