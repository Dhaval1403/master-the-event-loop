import React from 'react';

import CallbackQueue from '../CallbackQueue/CallbackQueue';
import queue from '../CallbackQueue/queue';
import Callstack from '../Callstack/Callstack';
import WebApi from '../WebApi/WebApi';
import Console from '../Console/Console';
import { Header } from '../Header/Header';

import { Cell, Grid } from '../../styles/grid';
import { Normalize } from '../../styles/normalize';

export const Container = () => {
	return (
		<>
			<Normalize />

			<Header />

			<Grid display="grid" gridTemplateColumns="1fr 1fr 1fr" mt="100px">
				<Cell>
					<Callstack />
				</Cell>

				<Cell>
					<WebApi />
				</Cell>

				<Cell>
					<Callstack />
				</Cell>

				<Cell>
					<Console />
				</Cell>

				<Cell>
					<CallbackQueue queue={queue.head} />
				</Cell>
			</Grid>
		</>
	);
};
