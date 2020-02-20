import React from 'react';

// import './WebApi.styles.css';

import { ListBox, ListTitle, List, ListItem } from '../../styles/box';
import { Box } from '../../styles/flex';

const WebApi = input => {
	return (
		// <div className="web-api">
		// 	<div className="title">Web Apis</div>
		// 	<div className="body">
		// 		<ul>
		// 			<li>$.on('button', 'click', ...)</li>
		// 			<li>timeout()</li>
		// 		</ul>
		// 	</div>
		// </div>

		<ListBox>
			<Box borderBottom="1px solid rgba(201, 201, 201, 0.685)" textAlign="center">
				<ListTitle>WebApi</ListTitle>
			</Box>

			<Box display="flex" height="350px" justifyContent="center" mt="20px">
				<List>
					<ListItem>$.on('button', 'click', ...)</ListItem>

					<ListItem>timeout()</ListItem>
				</List>
			</Box>
		</ListBox>
	);
};

export default WebApi;
