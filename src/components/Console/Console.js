import React from 'react';
// import './Console.styles.css';

import { ConsoleBox, ConsoleTitle } from '../../styles/console';
import { Box } from '../../styles/flex';
import { P } from '../../styles/text';

const Console = input => {
	return (
		// <div className="console">
		// 	<div className="console-title">
		// 		<div className="menu">
		// 			<span>Callback Queue</span>
		// 			<span>Console</span>
		// 		</div>
		// 	</div>
		// 	<div className="console-body">
		// 		<p>Hello World</p>
		// 	</div>
		// </div>

		<ConsoleBox>
			<Box borderBottom="1px solid rgba(201, 201, 201, 0.685)" textAlign="center">
				<ConsoleTitle>Callback Queue | Console |</ConsoleTitle>
			</Box>

			<Box height="350px" mt="20px" textAlign="center">
				<P>Hello World</P>
			</Box>
		</ConsoleBox>
	);
};

export default Console;
