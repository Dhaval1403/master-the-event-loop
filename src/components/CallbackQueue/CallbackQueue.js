import React, { Component } from 'react';

import './CallbackQueue.styles.css';

class CallbackQueue extends Component {
	constructor(props) {
		super();
	}

	render() {
		const values = [];
		let trav = this.props.queue;
		while (trav !== null) {
			values.push(<li>{trav.value}</li>);
			trav = trav.next;
		}

		return (
			<div className="callback-queue">
				<div className="title">Callback Queue</div>
				<div className="body">
					<ul>{values}</ul>
				</div>
			</div>
		);
	}
}

export default CallbackQueue;
