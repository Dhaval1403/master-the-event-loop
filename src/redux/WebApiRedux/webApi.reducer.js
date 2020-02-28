import { webApiTypes } from './webApi.types'
const initalState = {
	webApiStack: [],
}

export const webApiReducer = (state = initalState, action) => {
	switch (action.type) {
		case webApiTypes.ADD_TO_WEB_API:
			return { ...state, webApiStack: [...state.webApiStack, action.payload] }
		case webApiTypes.REMOVE_FROM_WEB_API:
			const newStack = [...state.webApiStack]
			newStack.shift()
			return { ...state, webApiStack: [...newStack] }
		default:
			return state
	}
}
