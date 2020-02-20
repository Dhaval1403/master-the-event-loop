import React from 'react'

import CallbackQueue from '../CallbackQueue/CallbackQueue'
import Callstack from '../Callstack/Callstack'
import Console from '../Console/Console'
import EventLoop from '../EventLoop/EventLoop'
import Header from '../Header/Header'
import queue from '../CallbackQueue/queue'
import WebApi from '../WebApi/WebApi'

import { Cell, Grid } from '../../styles/grid'
import { Normalize } from '../../styles/normalize'
import Help from '../Help/Help'

const Container = () => {
	return (
		<>
			<Normalize />

			<Header />

			<Help />

			<Grid display="grid" gridTemplateColumns="1fr 1fr 1fr" mt="100px">
				<Cell>
					<Callstack />
				</Cell>

				<Cell>
					<WebApi />
				</Cell>

				<Cell>
					<Console />
				</Cell>

				<Cell>
					<EventLoop />
				</Cell>

				<Cell gridColumn="span 2">
					<CallbackQueue queue={queue.head} />
				</Cell>
			</Grid>
		</>
	)
}

export default Container
