export const addToCallbackQueue = (value) => ({
	type: 'ADD_TO_CALLBACK_QUEUE',
	value: value,
})

export const removeFromCallbackQueue = () => ({ type: 'REMOVE_FROM_CALLBACK_QUEUE' })
