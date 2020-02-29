import React, { Component } from 'react'
import './EventLoop.styles.css'
import { connect } from 'react-redux'

import { removeFromCallbackQueue } from '../../redux/callbackQueue/callbackQueue.actions'
import { addFunctionToCallstack } from '../../redux/callstack/callstack.actions'
import { toggleSpin } from '../../redux/eventLoop/eventLoop.actions'

class EventLoop extends Component {

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
})

export default connect(mapStateToProps, mapDispatchToProps)(EventLoop)
