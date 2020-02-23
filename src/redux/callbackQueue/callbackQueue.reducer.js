const INITIAL_STATE = []

export const callbackQueueReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'ADD_TO_CALLBACK_QUEUE': {
			const queue = [...state]
			queue.push(action.value)
			return queue
		}

		case 'REMOVE_FROM_CALLBACK_QUEUE': {
			const queue = [...state]
			queue.shift()
			return queue
		}

		default:
			return state
	}
}
