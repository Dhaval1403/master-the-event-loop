import React, { Component } from 'react'

import { ConsoleBox, ConsoleTitle } from '../../styles/console'
import { Box, Flex } from '../../styles/flex'
import { Span } from '../../styles/text'

class Callstack extends Component {
	render() {
		// const { callstack } = this.props;
		return (
			<ConsoleBox>
				<Box display="flex" justifyContent="center" alignItems="center">
					<ConsoleTitle p="10px">Callstack</ConsoleTitle>
				</Box>

				<Box borderTop={1} borderStyle="solid" color="colorBlue" />

				<Box display="flex" height="350px" justifyContent="center" mt="20px">
					<Flex alignSelf="flex-end">
						<Span>Start()</Span>
					</Flex>
				</Box>
			</ConsoleBox>
		)
	}
}

export default Callstack
