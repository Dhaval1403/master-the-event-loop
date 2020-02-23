import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ConsoleBox, ConsoleTitle, List, ListItem } from '../../styles/console'
import { Box } from '../../styles/flex'

// For testing actions
import {
	addToCallbackQueue,
	removeFromCallbackQueue,
} from './../../redux/callbackQueue/callbackQueue.actions'

class CallbackQueue extends Component {
	constructor(props) {
		super(props)

		// For demonstration and testing
		const { enqueue, dequeue } = this.props
		enqueue('func1')
		enqueue('func2')
		dequeue()
	}

	render() {
		const values = this.props.callbackQueue.map((value, i) => <ListItem key={i}>{value}</ListItem>)

		return (
			<ConsoleBox>
				<Box display="flex" justifyContent="center" alignItems="center">
					<ConsoleTitle p="10px">Callback Queue</ConsoleTitle>
				</Box>

				<Box borderTop={1} borderStyle="solid" color="colorBlue" />

				<Box display="flex" justifyContent="center" m="20px 0">
					<List>
						<ListItem>{values}</ListItem>
					</List>
				</Box>
			</ConsoleBox>
		)
	}
}

const mapStateToProps = (state) => ({
	callbackQueue: state.callbackQueue,
})

// For testing the actions
const mapDispatchToProps = (dispatch) => ({
	enqueue: (value) => dispatch(addToCallbackQueue(value)),
	dequeue: () => dispatch(removeFromCallbackQueue()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CallbackQueue)
