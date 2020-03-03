import React from 'react'
import { connect } from 'react-redux'

import { Box } from './../../styles/flex'
import { ButtonStyled } from './../Button/ButtonStyled'

import {
	addFunctionToCallstack,
	changeCallstackState,
} from '../../redux/callstack/callstack.actions'

import {
	playAnimation,
	pauseAnimation,
	stopAnimation,
} from './../../redux/controls/controls.actions'

import { clearConsole } from './../../redux/Console/Console.actions'

class Controls extends React.Component {
	constructor() {
		super()
		this.state = { timerId: undefined }
	}

	startInterval = () => {
		this.props.clearConsole()
		this.props.loadFunctions()
		this.setState({ timerId: true })
	}

	stopInterval = (shouldResetStack) => {
		clearInterval(this.state.timerId)
		this.props.changeCallstackState(this.props.callstack.length ? true : false, shouldResetStack)
		this.props.stopAnimation()
		this.setState({ timerId: undefined })
	}

	render() {
		return (
			<Box display="flex" justify-content="space-between">
				<ButtonStyled
					padding="8px 8px"
					margin="2px"
					onClick={this.startInterval}
					disabled={this.state.timerId ? true : false}
				>
					Play
				</ButtonStyled>
				<ButtonStyled padding="8px 8px" margin="2px" disabled={true} onClick={this.stopInterval}>
					Pause
				</ButtonStyled>
				<ButtonStyled padding="8px 8px" margin="2px" disabled={true} onClick={this.stopInterval}>
					Stop
				</ButtonStyled>
			</Box>
		)
	}
}

const mapStateToProps = (state) => ({
	callstack: state.callstack.stack,
	callbackQueue: state.callbackQueue.stack,
	editor: state.editor,
})

const mapDispatchToProps = (dispatch) => ({
	addFunctionToCallstack: (func) => dispatch(addFunctionToCallstack(func)),
	changeCallstackState: (toState) => dispatch(changeCallstackState(toState)),
	playAnimation: () => dispatch(playAnimation()),
	pauseAnimation: () => dispatch(pauseAnimation()),
	stopAnimation: () => dispatch(stopAnimation()),
	clearConsole: () => dispatch(clearConsole()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Controls)
