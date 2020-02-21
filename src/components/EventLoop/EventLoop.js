import React, { Component } from 'react'
import './EventLoop.styles.css'

import { ConsoleBox, ConsoleTitle } from '../../styles/console'
import { Box } from '../../styles/flex'

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
			<ConsoleBox>
				<Box display="flex" justifyContent="center" alignItems="center">
					<ConsoleTitle p="10px">Event Loop</ConsoleTitle>
				</Box>

				<Box borderTop={1} borderStyle="solid" color="colorBlue" />

				<Box display="flex" justifyContent="center" alignItems="center" mt="20px">
					<div className={'spinner-container' + (this.state.spin ? ' spin' : '')}>
						<div className="circle" />
						<div className="triangle" />
					</div>
				</Box>
			</ConsoleBox>
		)
	}
}

export default EventLoop
