import React, { Component } from 'react'
import './EventLoop.styles.css'
import { connect } from 'react-redux'

import { removeFromCallbackQueue } from '../../redux/callbackQueue/callbackQueue.actions'
import { addFunctionToCallstack } from '../../redux/callstack/callstack.actions'

class EventLoop extends Component {
	constructor(props) {
		super(props)
		this.state = {
			spin: false,
		}

		this.makeFuncObj = (str) => ({
			name: str,
			delay: 0,
			webApi: false,
			message: 'Test Console log',
		})

		this.runLoop = () => {
			// if callstack is empty and callbackqueue is not empty
			if (this.props.callstack.length === 0 && this.props.callbackQueue.length !== 0) {
				// add the callbackqueue[0] to callstack
				// but callbackqueue has func as strings whereas
				// callstack accepts func as obj (see callstack reducer)
				// hence wrap the string in makeFuncObj
				this.props.addFunctionToCallstack(
					this.makeFuncObj(this.props.callbackQueue[0] + 'added by event loop')
				)
				this.props.removeFromCallbackQueue()
			}
		}

		this.timerId = setInterval(() => {
			this.runLoop()
			console.log('ran loop')
		}, 1000)
	}

	render() {
		setTimeout(() => {
			this.setState({
				spin: true,
			})
		}, 1000)

		return (
			<div className={'spinner-container' + (this.state.spin ? ' spin' : '')}>
				<div className="circle" />
				<div className="triangle" />
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	callstack: state.callstack.stack,
	callbackQueue: state.callbackQueue,
})

const mapDispatchToProps = (dispatch) => ({
	removeFromCallbackQueue: () => dispatch(removeFromCallbackQueue()),
	addFunctionToCallstack: (func) => dispatch(addFunctionToCallstack(func)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EventLoop)
