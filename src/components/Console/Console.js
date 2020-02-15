import React from 'react';
import './Console.styles.css';

import { ConsoleStyled } from '../Console/ConsoleStyled';

import { Box } from '../../styles/flex';
import { Span } from '../../styles/text';

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

		<ConsoleStyled>
			<Box>
				<Span>Callback Queue</Span>
				<Span>Console</Span>
			</Box>
		</ConsoleStyled>
	);
};

export default Console;
