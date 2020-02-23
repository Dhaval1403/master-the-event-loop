import React from 'react'

// import './WebApi.styles.css';

import { ConsoleBox, ConsoleTitle, List, ListItem } from '../../styles/console'
import { Box } from '../../styles/flex'
import { connect } from 'react-redux'

const WebApi = (input) => {
	return (
		<ConsoleBox>
			<Box display="flex" justifyContent="center" alignItems="center">
				<ConsoleTitle p="10px">WebApi</ConsoleTitle>
			</Box>

			<Box borderTop={1} borderStyle="solid" color="colorBlue" />

			<Box display="flex" justifyContent="center" mt="20px">
				<List>
					<ListItem>$.on('button', 'click', ...)</ListItem>

					<ListItem>timeout()</ListItem>
				</List>
			</Box>
		</ConsoleBox>
	)
}
const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(WebApi)
