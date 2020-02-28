import { TOGGLE_SPIN } from './eventLoop.types'

const initalState = { spin: false }

export const eventLoopReducer = (state = initalState, action) => {
	switch (action.type) {
		case TOGGLE_SPIN:
			return { ...state, spin: !state.spin }
		default:
			return state
	}
}
