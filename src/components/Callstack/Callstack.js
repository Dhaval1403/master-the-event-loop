import React, { Component } from 'react';
// import './Callstack.styles.css';

import { ConsoleBox, ConsoleTitle } from '../../styles/console';
import { Box, Flex } from '../../styles/flex';
import { Span } from '../../styles/text';

class Callstack extends Component {
	render() {
		const { callstack } = this.props;
		return (
			// <div className="call-stack">
			// 	<div className="title">Callstack</div>
			// 	<div className="body">
			// 		<div className="top"></div>
			// 		<div className="down">Start()</div>
			// 	</div>
			// </div>

			<ConsoleBox>
				<Box borderBottom="1px solid rgba(201, 201, 201, 0.685)" textAlign="center">
					<ConsoleTitle>Callstack</ConsoleTitle>
				</Box>

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
