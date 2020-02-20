import React, { Component } from 'react';

import { ConsoleBox, ConsoleTitle } from '../../styles/console';
import { Box, Flex } from '../../styles/flex';
import { Span } from '../../styles/text';

class Callstack extends Component {
	render() {
		// const { callstack } = this.props;
		return (
			<ConsoleBox>
				<Box textAlign="center">
					<ConsoleTitle>Callstack</ConsoleTitle>
				</Box>

				<Box borderTop={3} borderStyle="solid" color="colorBlue" justifySelf="center" mt={2} />

				<Box display="flex" height="350px" justifyContent="center" mt="20px">
					<Flex alignSelf="flex-end">
						<Span>Start()</Span>
					</Flex>
				</Box>
			</ConsoleBox>
		);
	}
}

export default Callstack;
