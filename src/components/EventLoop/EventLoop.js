import React, { useState } from 'react'
import './EventLoop.styles.css'

const EventLoop = (props) => {
	const [spin, setSpin] = useState(false)

	setTimeout(() => {
		setSpin(true)
	}, 1000)

	return (
		<div className={'arrow ' + (spin ? 'spin' : '')}>
			<div className="circle" />
			<div className="triangle" />
		</div>
	)
}

export default EventLoop
