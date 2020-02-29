import { ADD_TO_CALLBACK_QUEUE, REMOVE_FROM_CALLBACK_QUEUE } from './callbackQueue.types'

const INITIAL_STATE = {
	stack: [],
}

export const callbackQueueReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_TO_CALLBACK_QUEUE: {
			return { ...state, stack: [...state.stack, action.payload] }
		}

		case REMOVE_FROM_CALLBACK_QUEUE: {
			const queue = [...state.stack]
			queue.shift()
			return { ...state, stack: [...queue] }
		}

		default:
			return state
	}
}
