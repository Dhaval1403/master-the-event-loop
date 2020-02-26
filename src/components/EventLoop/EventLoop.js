import React, { Component } from 'react'
import './EventLoop.styles.css'
import { connect } from 'react-redux'

class EventLoop extends Component {
	render() {
		return (
			<div className={this.props.spin ? this.props.spin : 'spinner-container'}>
				<div className="circle" />
				<div className="triangle" />
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	spin: state.spin,
})

export default connect(mapStateToProps)(EventLoop)
