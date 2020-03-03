import { consoleTypes } from './Console.types'

const INITIAL_STATE = {
	messages: [],
}

export const consoleReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case consoleTypes.PUSH_TO_CONSOLE:
			return {
				...state,
				messages: [...state.messages, action.payload],
			}
		case consoleTypes.CLEAR_CONSOLE:
			return {
				...state,
				messages: [],
			}
		default:
			return state
	}
}
