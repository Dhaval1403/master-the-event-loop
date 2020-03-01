import React, { Component } from 'react'

// import './WebApi.styles.css';

import {
	ConsoleContainer,
	ConsoleData,
	ConsoleHeader,
	ConsoleTitle,
	List,
	ListItem,
} from '../../styles/console'
import { Box } from '../../styles/flex'
import { connect } from 'react-redux'
import { addToCallbackQueue } from '../../redux/callbackQueue/callbackQueue.actions'
import { removeFromWebApi } from './../../redux/WebApiRedux/wepApi.actions'

class WebApi extends Component {
	renderWebApi = ({ webApiStack }) =>
		webApiStack.map((currLine, i) => (
			<ListItem key={`webApiStack_item_${i}`}>{currLine.name}</ListItem>
		))

	render() {
		return (
			<>
				<ConsoleContainer>
					<ConsoleHeader>
						<Box display="flex" justifyContent="center" alignItems="center">
							<ConsoleTitle p="10px">WebApi</ConsoleTitle>
						</Box>
					</ConsoleHeader>

					<ConsoleData>
						<Box display="flex" justifyContent="center" m="20px 0">
							<List>{this.renderWebApi(this.props)}</List>
						</Box>
					</ConsoleData>
				</ConsoleContainer>
			</>
		)
	}
}

const mapStateToProps = ({ webApiReducer: { webApiStack } }) => ({
	webApiStack,
})

const mapDispatchToProps = (dispatch) => ({
	addToCallBackQueue: (value) => dispatch(addToCallbackQueue(value)),
	removeFromWebApi: (funcId) => dispatch(removeFromWebApi(funcId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(WebApi)
