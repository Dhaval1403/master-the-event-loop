import { ADD_TO_CALLBACK_QUEUE, REMOVE_FROM_CALLBACK_QUEUE } from './callbackQueue.types'

export const addToCallbackQueue = (value) => ({
	type: ADD_TO_CALLBACK_QUEUE,
	payload: value,
})

export const removeFromCallbackQueue = () => ({
	type: REMOVE_FROM_CALLBACK_QUEUE,
	meta: {
		delay: 1000,
	},
})
