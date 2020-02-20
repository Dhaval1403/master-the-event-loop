import React from 'react';

// import './WebApi.styles.css';

import { ConsoleBox, ConsoleTitle, List, ListItem } from '../../styles/console';
import { Box } from '../../styles/flex';

const WebApi = input => {
	return (
		<ConsoleBox>
			<Box textAlign="center">
				<ConsoleTitle>WebApi</ConsoleTitle>
			</Box>

			<Box borderTop={3} borderStyle="solid" color="colorBlue" justifySelf="center" mt={2} />

			<Box display="flex" height="350px" justifyContent="center" mt="20px">
				<List>
					<ListItem>$.on('button', 'click', ...)</ListItem>

					<ListItem>timeout()</ListItem>
				</List>
			</Box>
		</ConsoleBox>
	);
};

export default WebApi;
