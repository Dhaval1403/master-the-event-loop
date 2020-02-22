import React from 'react'

import CallbackQueue from '../CallbackQueue/CallbackQueue'
import Callstack from '../Callstack/Callstack'
import Console from '../Console/Console'
import EventLoop from '../EventLoop/EventLoop'
import Header from '../Header/Header'
import Queue from '../../utils/customDataStructures/Queue'
import WebApi from '../WebApi/WebApi'
import Editor from '../Editor/Editor'

import { Cell, Grid } from '../../styles/grid'
import { Normalize } from '../../styles/normalize'
import Help from '../Help/Help'

const Container = () => {
	const queue = new Queue()

	return (
		<>
			<Normalize />

			<Header />

			<Help />

			<Grid
				display="grid"
				gridTemplateColumns="2fr 1fr 1fr"
				gridTemplateRows="300px 200px"
				gridGap="25px"
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
					<CallbackQueue queue={queue} />
				</Cell>
			</Grid>
		</>
	)
}

export default Container
