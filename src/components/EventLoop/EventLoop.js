import React, { Component } from 'react'
import './EventLoop.styles.css'

class EventLoop extends Component {
	constructor(props) {
		super(props)
		this.state = {
			spin: false,
		}
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

export default EventLoop
