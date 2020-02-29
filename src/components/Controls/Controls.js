import React from 'react'
import { connect } from 'react-redux'

import { Box } from './../../styles/flex'
import { ButtonStyled } from './../Button/ButtonStyled'

import {
	addFunctionToCallstack,
	changeCallstackState,
} from '../../redux/callstack/callstack.actions'


const testdata = [
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


class Controls extends React.Component {

	constructor() {
		super()
		this.timerId = undefined
	}

	pipeIntoCallStack = () => {
		if (testdata.length > 0) {
			this.props.addFunctionToCallstack(testdata.pop())
		} else {
			clearInterval(this.timerId)
			this.props.changeCallstackState(false)
			this.timerId = undefined
		}
	}

	startInterval = () => {

		this.timerId = setInterval(() => this.pipeIntoCallStack(), 2000)
		this.props.changeCallstackState(true)
	}

	stopInterval = () => {
		clearInterval(this.timerId)
		this.props.changeCallstackState(false)
		this.timerId = undefined
	}

	render() {
		return (
			<Box display="flex" justify-content="space-between">
				<ButtonStyled padding="8px 8px" margin="2px" onClick={this.startInterval} disabled={this.timerId}>
					Play
				</ButtonStyled>
				<ButtonStyled padding="8px 8px" margin="2px" onClick={this.stopInterval}>
					Pause
				</ButtonStyled>
				<ButtonStyled padding="8px 8px" margin="2px" onClick={this.stopInterval}>
					Stop
				</ButtonStyled>
			</Box>
		)
	}
}

const mapStateToProps = (state) => ({
	callstack: state.callstack.stack,
})

const mapDispatchToProps = (dispatch) => ({
	addFunctionToCallstack: (func) => dispatch(addFunctionToCallstack(func)),
	changeCallstackState: (toState) => dispatch(changeCallstackState(toState)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Controls)
