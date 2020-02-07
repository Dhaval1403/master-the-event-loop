import React, { Component } from 'react';

class Callstack extends Component {
	handlePlay = () => {
		const stack = [...this.props];
		switch (stack) {
			case 'Web_Api':
				return;
			case 'console.log':
				return;
			default:
		}
	};
	render() {
		return (
			<div>
				<button className="button" onClick={this.handlePlay}>
					Play
				</button>
			</div>
		);
	}
}

export default Callstack;
