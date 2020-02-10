import React, { Component } from 'react';
import './Callstack.styles.css';

class Callstack extends Component {
	render() {
		const { callstack } = this.props;
		return (
			<div className="call-stack">
				<div className="title">Callstack</div>
				<div className="body">
					<div className="top"></div>
					<div className="down">Start()</div>
				</div>
			</div>
		);
	}
}

export default Callstack;
