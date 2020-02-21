import React, { Component } from 'react'

import { ConsoleBox, ConsoleTitle, List, ListItem } from '../../styles/console'
import { Box } from '../../styles/flex'

class CallbackQueue extends Component {
	constructor(props) {
		super()
	}

	render() {
		const values = this.props.queue.getValues().map((node) => <li>{node}</li>)

		return (
			<ConsoleBox>
				<Box display="flex" justifyContent="center" alignItems="center">
					<ConsoleTitle p="10px">Callback Queue</ConsoleTitle>
				</Box>

				<Box borderTop={1} borderStyle="solid" color="colorBlue" />

				<Box display="flex" justifyContent="center" mt="20px">
					<List>
						<ListItem>{values}</ListItem>
					</List>
				</Box>
			</ConsoleBox>
		)
	}
}

export default CallbackQueue
