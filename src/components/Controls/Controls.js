import React from 'react'
import { connect } from 'react-redux'

import { Box } from './../../styles/flex'
import { ButtonStyled } from './../Button/ButtonStyled'

import {
	addFunctionToCallstack,
	changeCallstackState,
} from '../../redux/callstack/callstack.actions'

import { playAnimation, pauseAnimation, stopAnimation } from './../../redux/controls/controls.actions'


let testdata = [
	{
		name: 'console.info',
		delay: 0,
		webApi: false,
		message: 'Test Console info',
	},
	{
		name: 'console.time',
		delay: 0,
		webApi: false,
		message: 'Test Console time',
	},
	{
		name: 'console.error',
		delay: 0,
		webApi: false,
		message: 'Test Console error',
	},
	{
		name: 'console.log',
		delay: 0,
		webApi: false,
		message: 'Test Console log',
	},
	{
		name: 'console.warn',
		delay: 0,
		webApi: false,
		message: 'Test Console warn',
	},
	{
		name: 'fetch',
		delay: 2000,
		webApi: true,
		message: undefined,
	},
	{
		name: 'setTimout',
		delay: 1000,
		webApi: true,
		message: undefined,
	},
	{
		name: 'customFunc',
		delay: 0,
		webApi: false,
		message: undefined,
	},
]

let animationData = []


class Controls extends React.Component {

	constructor() {
		super()
		this.state = { timerId: undefined }
	}

	pipeIntoCallStack = () => {
		if (animationData.length > 0) {
			this.props.addFunctionToCallstack(animationData.pop())
		} else {
			if (this.props.callbackQueue.length > 0) {
				this.props.changeCallstackState(false)
			} else {
				this.stopInterval(true)
			}
		}
	}

	startInterval = () => {
		/* this.props.loadFunctions(this.props.editor.editor, 0)
		console.log(this.props.editor); */

		if (this.state.timerId) {
			this.stopInterval(true)
		}

		animationData = [...testdata]

		this.setState({ timerId: setInterval(() => this.pipeIntoCallStack(), 2000) })
		this.props.changeCallstackState(true)
		this.props.playAnimation()
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
				<ButtonStyled padding="8px 8px" margin="2px" onClick={this.startInterval} disabled={this.state.timerId ? true : false}>
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
})

export default connect(mapStateToProps, mapDispatchToProps)(Controls)
