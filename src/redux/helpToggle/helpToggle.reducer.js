import { helpTypes } from './helpToggle.types'

const INITIAL_STATE = {
	isHelp: false,
}

export const helpReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case helpTypes.TOGGLE_HELP:
			return {
				...state,
				isHelp: !state.isHelp,
			}

		default:
			return state
	}
}
