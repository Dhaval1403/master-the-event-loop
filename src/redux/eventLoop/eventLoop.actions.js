import { TOGGLE_SPIN, BLOCK_EVENT_LOOP, UNBLOCK_EVENT_LOOP } from './eventLoop.types'

export const toggleSpin = () => ({
	type: TOGGLE_SPIN,
})

export const blockEventLoop = (currFuncToPush) => ({
	type: BLOCK_EVENT_LOOP,
	payload: currFuncToPush,
})

export const unblockEventLoop = (state) => ({
	type: UNBLOCK_EVENT_LOOP,
	payload: state,
})
