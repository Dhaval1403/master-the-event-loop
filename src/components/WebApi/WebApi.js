import React, { Component } from 'react'

// import './WebApi.styles.css';

import { ConsoleBox, ConsoleHeader, ConsoleTitle, List, ListItem } from '../../styles/console'
import { Box } from '../../styles/flex'
import { connect } from 'react-redux'
import { addToCallbackQueue } from '../../redux/callbackQueue/callbackQueue.actions'

class WebApi extends Component {
	render() {
		return (
			<>
				<ConsoleHeader>
					<Box display="flex" justifyContent="center" alignItems="center">
						<ConsoleTitle p="10px">WebApi</ConsoleTitle>
					</Box>
				</ConsoleHeader>

				<ConsoleBox>
					<Box borderTop={1} borderStyle="solid" color="colorBlue" />

					<Box display="flex" justifyContent="center" m="20px 0">
						<List>
							<ListItem>$.on('button', 'click', ...)</ListItem>

							<ListItem>timeout()</ListItem>
						</List>
					</Box>
				</ConsoleBox>
			</>
		)
	}
}

const mapStateToProps = ({ webApiReducer: { webApiStack } }) => ({
	webApiStack,
})

const mapDispatchToProps = (dispatch) => ({
	addToCallBackQueue: (value) => dispatch(addToCallbackQueue(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(WebApi)
