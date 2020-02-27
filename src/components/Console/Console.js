import React, { Component } from 'react'

import { connect } from 'react-redux'

import { ConsoleBox, ConsoleTitle, List, ListItem } from '../../styles/console'
import { Box } from '../../styles/flex'

const messageTypes = {
	console: 'colorWhite',
	'console.log': 'colorWhite',
	'console.trace': 'colorWhite',
	'console.time': 'colorGreenTransparent',
	'console.info': 'colorBlueTransparent',
	'console.error': 'colorRedTransParent',
	'console.warn': 'colorYellowTransparent',
}

class Console extends Component {
	render() {
		return (
			<ConsoleBox>
				<Box display="flex" justifyContent="center" alignItems="center">
					<ConsoleTitle p="10px">Console</ConsoleTitle>
				</Box>

				<Box borderTop={1} borderStyle="solid" color="colorBlue" />

				<Box display="flex" justifyContent="center" m="20px 0">
					<List>
						{this.props.messages.map((message) => (
							<ListItem type={messageTypes[message.name]}>{message.message}</ListItem>
						))}
					</List>
				</Box>
			</ConsoleBox>
		)
	}
}

const mapStateToProps = (state) => ({
	messages: state.consoleReducer.messages,
})

export default connect(mapStateToProps, null)(Console)
