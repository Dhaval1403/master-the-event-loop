import React, { Component } from 'react'
import './EventLoop.styles.css'
import { connect } from 'react-redux'

import { removeFromCallbackQueue } from '../../redux/callbackQueue/callbackQueue.actions'
import { addFunctionToCallstack, checkCallstack } from '../../redux/callstack/callstack.actions'
import { toggleSpin } from '../../redux/eventLoop/eventLoop.actions'

class EventLoop extends Component {
	state = {
		spin: false,
	}
	componentDidMount() {
		// After the component has mounted, start the loop
		this.makeFuncObj = (str) => ({
			name: str,
			delay: 0,
			webApi: false,
			message: 'Test Console log',
		})

		//this.timerId = setInterval(() => {
		//this.props.toggleSpin()
		//	console.log('ran loop')
		//	}, 600)
		/* 	this.runLoop = () => {
			// if callstack is empty and callbackqueue is not empty
			if (!this.props.isOccupied && this.props.callbackQueue.length !== 0) {
				// add the callbackqueue[0] to callstack
				// but callbackqueue has func as strings whereas
				// callstack accepts func as obj (see callstack reducer)
				// hence wrap the string in makeFuncObj
				//this.props.checkCallstack()

				//this.props.toggleSpin()
				this.props.addFunctionToCallstack(
					this.makeFuncObj(this.props.callbackQueue[0] + 'added by event loop')
				)
			}
		}

		this.timerId = setInterval(() => {
			this.runLoop()
			console.log('ran loop')
		}, 1000) */
	}
	/* 	makeFuncObj = (str) => ({
		name: str,
		delay: 0,
		webApi: false,
		message: 'Test Console log',
	})

	runLoop = () => {
		// if callstack is empty and callbackqueue is not empty
		if (!this.props.isOccupied && this.props.callbackQueue.length !== 0) {
			
			// add the callbackqueue[0] to callstack
			// but callbackqueue has func as strings whereas
			// callstack accepts func as obj (see callstack reducer)
			// hence wrap the string in makeFuncObj

			this.props.toggleSpin()
		}
	} */
	render() {
		return (
			<div className={'spinner-container' + (this.props.spinArrow ? ' spin' : '')}>
				<div className="circle" />
				<div className="triangle" />
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	callstack: state.callstack.stack,
	isOccupied: state.callstack.isOccupied,
	callbackQueue: state.callbackQueue,
	spinArrow: state.eventLoop.spin,
})

const mapDispatchToProps = (dispatch) => ({
	removeFromCallbackQueue: () => dispatch(removeFromCallbackQueue()),
	addFunctionToCallstack: (func) => dispatch(addFunctionToCallstack(func)),
	toggleSpin: () => dispatch(toggleSpin()),
	checkCallstack: () => dispatch(checkCallstack()),
})

export default connect(mapStateToProps, mapDispatchToProps)(EventLoop)
