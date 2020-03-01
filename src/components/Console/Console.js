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
			<>
				<ConsoleContainer>
					<ConsoleHeader>
						<Box display="flex" justifyContent="center" alignItems="center">
							<ConsoleTitle p="10px">Console</ConsoleTitle>
						</Box>
					</ConsoleHeader>

					<ConsoleData>
						<Box display="flex" justifyContent="center" m="20px 0">
							<List>
								{this.props.messages.map((message, i) => (
									<ListItem key={`console_item_${i}`} type={messageTypes[message.name]}>{message.message}</ListItem>
								))}
							</List>
						</Box>
					</ConsoleData>
				</ConsoleContainer>
			</>
		)
	}
}

const mapStateToProps = (state) => ({
	messages: state.consoleReducer.messages,
})

export default connect(mapStateToProps, null)(Console)
