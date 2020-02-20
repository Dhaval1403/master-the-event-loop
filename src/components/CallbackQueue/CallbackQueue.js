import React, { Component } from 'react';

import { ConsoleBox, ConsoleTitle, List, ListItem } from '../../styles/console';
import { Box } from '../../styles/flex';

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
			<ConsoleBox>
				<Box textAlign="center">
					<ConsoleTitle>Callback Queue</ConsoleTitle>
				</Box>

				<Box borderTop={3} borderStyle="solid" color="colorBlue" justifySelf="center" mt={2} />

				<Box display="flex" height="350px" justifyContent="center" mt="20px">
					<List>
						<ListItem>{values}</ListItem>
					</List>
				</Box>
			</ConsoleBox>
		);
	}
}

export default CallbackQueue;
