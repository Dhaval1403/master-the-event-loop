import React from 'react'

import { ConsoleBox, ConsoleTitle } from '../../styles/console'
import { Box } from '../../styles/flex'
import { P } from '../../styles/text'

const EventLoop = (props) => {
	return (
		<ConsoleBox>
			<Box display="flex" justifyContent="center" alignItems="center">
				<ConsoleTitle p="10px">Event Loop</ConsoleTitle>
			</Box>

			<Box borderTop={1} borderStyle="solid" color="colorBlue" />

			<Box height="350px" mt="20px" textAlign="center">
				<P>Hello World</P>
			</Box>
		</ConsoleBox>
	)
}

export default EventLoop
