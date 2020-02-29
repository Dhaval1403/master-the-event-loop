import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'

import CallbackQueue from '../CallbackQueue/CallbackQueue'
import Callstack from '../Callstack/Callstack'
import Console from '../Console/Console'
import EventLoop from '../EventLoop/EventLoop'
import Header from '../Header/Header'
import WebApi from '../WebApi/WebApi'
import Editor from '../Editor/Editor'

import { Cell, Grid } from '../../styles/grid'
import { Normalize } from '../../styles/normalize'
import { theme } from '../../styles/theme'
import Help from '../Help/Help'

class Container extends Component {

	render() {
		return (
			<>
				<ThemeProvider theme={theme}>
					<Normalize />

					<Header />

					<Help />

					<Grid
						display="grid"
						gridTemplateColumns={{ d: '1fr', md: '2fr 1fr 1fr' }}
						gridTemplateRows="40vh 30vh"
						gridGap="25px"
						gridRowGap="10vh"
						m="25px"
					>
						<Cell>
							<Editor />
						</Cell>

						<Cell>
							<Callstack />
						</Cell>

						<Cell>
							<WebApi />
						</Cell>

						<Cell>
							<Console />
						</Cell>

						<Cell alignSelf="center" justifySelf="center">
							<EventLoop />
						</Cell>

						<Cell>
							<CallbackQueue />
						</Cell>
					</Grid>
				</ThemeProvider>
			</>
		)
	}
}


export default Container
