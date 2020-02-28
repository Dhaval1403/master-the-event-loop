import { TOGGLE_SPIN, BLOCK_EVENT_LOOP, UNBLOCK_EVENT_LOOP } from './eventLoop.types'

const initalState = { spin: false, blocked: false, currFuncToPush: {} }

export const eventLoopReducer = (state = initalState, action) => {
	switch (action.type) {
		case TOGGLE_SPIN:
			return { ...state, spin: !state.spin }
		case BLOCK_EVENT_LOOP:
			return { ...state, blocked: true, currFuncToPush: action.payload }
		case UNBLOCK_EVENT_LOOP:
			return { ...state, blocked: false, currFuncToPush: {} }
		default:
			return state
	}
}
